CREATE MIGRATION m1nx6ziqmkh7nz7piin472s2ksievwjk5yyrbrae2nj2d4om4h7flq
    ONTO m1i7i2n3zgc5uaowckc4reaoqy55jzu6sn64ttzl56yoduu2csqjaa
{
  ALTER TYPE default::Theme {
      CREATE PROPERTY liked := (EXISTS ((.likes.user.id ?= (GLOBAL default::current_user).id)));
  };
};
