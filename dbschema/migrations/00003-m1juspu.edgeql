CREATE MIGRATION m1juspujwienitftyxc6uhipngo4u7n6gn2lxvapnumqankhn6azvq
    ONTO m1nx6ziqmkh7nz7piin472s2ksievwjk5yyrbrae2nj2d4om4h7flq
{
  ALTER TYPE default::Theme {
      CREATE PROPERTY like_count := (std::count(.likes));
      ALTER PROPERTY liked {
          USING (EXISTS ((.likes.user ?= GLOBAL default::current_user)));
      };
  };
};
