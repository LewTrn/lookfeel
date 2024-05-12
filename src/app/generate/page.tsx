import Link from "next/link";

import { auth } from "~/edgedb";

import { GenerateContent } from "./_components/content/GenerateContent";
import { Header } from "./_components/header/Header";
import { UnauthedPublish } from "./_components/header/UnauthedPublish";
import { PublishDialog } from "./_components/publish/PublishDialog";

export default async function Generate() {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <main className="flex w-full flex-col">
      <Header>
        {signedIn ? (
          <PublishDialog />
        ) : (
          <Link href={auth.getBuiltinUIUrl()}>
            <UnauthedPublish />
          </Link>
        )}
      </Header>
      <GenerateContent />
    </main>
  );
}
