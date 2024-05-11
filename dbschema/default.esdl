using extension auth;

module default {
  scalar type Role extending enum<admin, user>;

  global current_user := (
    assert_single((
      select User
      filter .identity = global ext::auth::ClientTokenIdentity
    ))
  );


  type User {
    required identity: ext::auth::Identity {
      constraint exclusive;
    };

    required username: str;
    
    user_role: Role {
      default := "user";
    };

    created_at: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated_at: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }
  }

  type Theme {
    required short_id: str {
      constraint exclusive;
    };

    required palette: Palette;
    required fonts: Fonts;
    required multi tags: Tags;

    required created_by: User {
      default := global current_user;
    }

    created_at: datetime {
      rewrite insert using (datetime_of_statement());
    }
    updated_at: datetime {
      rewrite insert using (datetime_of_statement());
      rewrite update using (datetime_of_statement());
    }

    access policy admin_has_full_access
      allow all
      using (global current_user.user_role ?= Role.admin);
    access policy creator_has_full_access
      allow all
      using (.created_by ?= global current_user);
    access policy others_read_only
      allow select, insert;
  }

  type Palette {
    required primary: str;
    required secondary: str;
    required accent: str;
    required neutral: str;
  }

  type Fonts {
    required heading: str;
    required body: str;
  }

  type Tags {
    required name: str {
      constraint exclusive;
    };

    access policy admin_has_full_access
      allow all
      using (global current_user.user_role ?= Role.admin);
    access policy others_read_only
      allow select;
  }
}
