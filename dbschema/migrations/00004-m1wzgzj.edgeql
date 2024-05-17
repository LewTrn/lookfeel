CREATE MIGRATION m1wzgzji5twepiz5foir4hcvep6nzvwcynnw2qb3jhnbuve3rflvka
    ONTO m1juspujwienitftyxc6uhipngo4u7n6gn2lxvapnumqankhn6azvq
{
  ALTER TYPE default::Theme {
      ALTER PROPERTY like_count {
          RESET EXPRESSION;
          RESET CARDINALITY;
          SET REQUIRED;
          SET TYPE std::int32;
      };
      DROP PROPERTY liked;
      DROP LINK likes;
  };
};
