"use client";

import { useSignedIn } from "~/components/auth/AuthProvider";

import { Header } from "./_components/header/Header";
import { UnauthedPublish } from "./_components/header/UnauthedPublish";
import { PublishDialog } from "./_components/publish/PublishDialog";
import { GenerateViewThemeContainer } from "./_components/view/GenerateViewThemeContainer";

export default function Generate() {
  const { signedIn, signInUrl } = useSignedIn();

  return (
    <main className="flex w-full flex-col">
      <Header>
        {signedIn ? <PublishDialog /> : <UnauthedPublish href={signInUrl} />}
      </Header>
      <GenerateViewThemeContainer />
    </main>
  );
}
