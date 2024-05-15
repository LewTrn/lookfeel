CREATE MIGRATION m1a2jpyfvittnyejh6etr3jjofbhrwka2fyvxrtk3wmjwtby4p4aia
    ONTO m1c4p7pxtywsgmmnqnfle2tugzzmaeogousv6xlihluebtsptosila
{
  CREATE TYPE default::Likes {
      CREATE REQUIRED LINK theme: default::Theme;
      CREATE REQUIRED LINK user: default::User;
  };
  ALTER TYPE default::Theme {
      CREATE MULTI LINK likes: default::Likes {
          ON SOURCE DELETE DELETE TARGET;
      };
  };
};
