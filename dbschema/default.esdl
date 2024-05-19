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

    required palette: Palette {
      on source delete delete target;
    }
    required fonts: Fonts {
      on source delete delete target;
    }
    required multi tags: Tags;

    multi likes: Likes {
      on source delete delete target;
      on target delete allow;
    }
    required like_count: int32 {
      default := 0;
    }

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

  type Likes {
    required user: User {
      default := global current_user;
    }
    
    required theme: Theme;

    constraint exclusive on ((.user, .theme));
  }
}
