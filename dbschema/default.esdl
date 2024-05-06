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
}
