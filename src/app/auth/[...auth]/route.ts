import { redirect } from "next/navigation";

import { auth } from "~/edgedb";

export const { GET, POST } = auth.createAuthRouteHandlers({
  async onBuiltinUICallback({ isSignUp }) {
    if (isSignUp) {
      const client = auth.getSession().client;

      await client.query(`
      INSERT User {
        username := '',
        user_role := 'user',
        identity := (global ext::auth::ClientTokenIdentity)
      }
    `);
    }

    redirect("/redirect");
  },
  onSignout() {
    redirect("/logout");
  },
});
