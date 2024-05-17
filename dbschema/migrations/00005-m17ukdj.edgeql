CREATE MIGRATION m17ukdjmuzkburbf4fu4w3px4lolrzjj5n4yfyacdwh7a5hk6unxjq
    ONTO m1wzgzji5twepiz5foir4hcvep6nzvwcynnw2qb3jhnbuve3rflvka
{
  ALTER TYPE default::Theme {
      CREATE MULTI LINK likes: default::Likes {
          ON SOURCE DELETE DELETE TARGET;
      };
      ALTER PROPERTY like_count {
          SET default := 0;
      };
  };
};
