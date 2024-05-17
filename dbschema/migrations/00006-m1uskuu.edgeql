CREATE MIGRATION m1uskuulik7vpf26rkijuzltyecmtmwlgoz5zxzvxujeofudcoaeha
    ONTO m17ukdjmuzkburbf4fu4w3px4lolrzjj5n4yfyacdwh7a5hk6unxjq
{
  ALTER TYPE default::Theme {
      ALTER LINK likes {
          ON TARGET DELETE ALLOW;
      };
  };
};
