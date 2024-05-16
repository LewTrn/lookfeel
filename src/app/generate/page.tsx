import { auth } from "~/edgedb";

import { Header } from "./_components/header/Header";
import { UnauthedPublish } from "./_components/header/UnauthedPublish";
import { PublishDialog } from "./_components/publish/PublishDialog";
import { GenerateViewThemeContainer } from "./_components/view/GenerateViewThemeContainer";

export default async function Generate() {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <main className="flex w-full flex-col">
      <Header>
        {signedIn ? (
          <PublishDialog />
        ) : (
          <UnauthedPublish href={auth.getBuiltinUIUrl()} />
        )}
      </Header>
      <GenerateViewThemeContainer />
    </main>
  );
}
