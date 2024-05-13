CREATE MIGRATION m1c4p7pxtywsgmmnqnfle2tugzzmaeogousv6xlihluebtsptosila
    ONTO m16i4l3ihli2kls24vrjsyzccbzphjgjtbyqisoeib6vnca5mvtoeq
{
  ALTER TYPE default::Theme {
      ALTER LINK fonts {
          ON SOURCE DELETE DELETE TARGET;
      };
      ALTER LINK palette {
          ON SOURCE DELETE DELETE TARGET;
      };
  };
};
