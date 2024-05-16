CREATE MIGRATION m1i7i2n3zgc5uaowckc4reaoqy55jzu6sn64ttzl56yoduu2csqjaa
    ONTO initial
{
  CREATE EXTENSION pgcrypto VERSION '1.3';
  CREATE EXTENSION auth VERSION '1.0';
  CREATE SCALAR TYPE default::Role EXTENDING enum<admin, user>;
  CREATE TYPE default::User {
      CREATE REQUIRED LINK identity: ext::auth::Identity {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY created_at: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE PROPERTY updated_at: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
      CREATE PROPERTY user_role: default::Role {
          SET default := 'user';
      };
      CREATE REQUIRED PROPERTY username: std::str;
  };
  CREATE GLOBAL default::current_user := (std::assert_single((SELECT
      default::User
  FILTER
      (.identity = GLOBAL ext::auth::ClientTokenIdentity)
  )));
  CREATE TYPE default::Tags {
      CREATE ACCESS POLICY admin_has_full_access
          ALLOW ALL USING (((GLOBAL default::current_user).user_role ?= default::Role.admin));
      CREATE ACCESS POLICY others_read_only
          ALLOW SELECT ;
      CREATE REQUIRED PROPERTY name: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::Fonts {
      CREATE REQUIRED PROPERTY body: std::str;
      CREATE REQUIRED PROPERTY heading: std::str;
  };
  CREATE TYPE default::Palette {
      CREATE REQUIRED PROPERTY accent: std::str;
      CREATE REQUIRED PROPERTY neutral: std::str;
      CREATE REQUIRED PROPERTY primary: std::str;
      CREATE REQUIRED PROPERTY secondary: std::str;
  };
  CREATE TYPE default::Theme {
      CREATE ACCESS POLICY admin_has_full_access
          ALLOW ALL USING (((GLOBAL default::current_user).user_role ?= default::Role.admin));
      CREATE REQUIRED LINK created_by: default::User {
          SET default := (GLOBAL default::current_user);
      };
      CREATE ACCESS POLICY creator_has_full_access
          ALLOW ALL USING ((.created_by ?= GLOBAL default::current_user));
      CREATE REQUIRED LINK fonts: default::Fonts {
          ON SOURCE DELETE DELETE TARGET;
      };
      CREATE REQUIRED LINK palette: default::Palette {
          ON SOURCE DELETE DELETE TARGET;
      };
      CREATE REQUIRED MULTI LINK tags: default::Tags;
      CREATE ACCESS POLICY others_read_only
          ALLOW SELECT, INSERT ;
      CREATE PROPERTY created_at: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
      };
      CREATE REQUIRED PROPERTY short_id: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY updated_at: std::datetime {
          CREATE REWRITE
              INSERT 
              USING (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
  };
  CREATE TYPE default::Likes {
      CREATE REQUIRED LINK user: default::User {
          SET default := (GLOBAL default::current_user);
      };
      CREATE REQUIRED LINK theme: default::Theme;
      CREATE CONSTRAINT std::exclusive ON ((.user, .theme));
  };
  ALTER TYPE default::Theme {
      CREATE MULTI LINK likes: default::Likes {
          ON SOURCE DELETE DELETE TARGET;
      };
  };
};
