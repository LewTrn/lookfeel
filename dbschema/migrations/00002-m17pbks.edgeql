CREATE MIGRATION m17pbks3fcg3cuqqjs6gholziwtkaf423dnibp2lr6td4zqy4b2sea
    ONTO m1fbufh27gb5p347xbgm22hmjgzud3b7kjdmxmidtasnjyvaryanha
{
  ALTER TYPE default::Theme {
      DROP ACCESS POLICY admin_has_full_access;
      DROP ACCESS POLICY creator_has_full_access;
      DROP ACCESS POLICY others_read_only;
  };
};
