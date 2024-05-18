import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { AuthProvider } from "~/components/auth/AuthProvider";
import { auth } from "~/edgedb";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "lookfeel",
  description:
    "Generate custom UI themes, visualize with real layouts and discover trending designs from the community.",
};

export default async function RootLayout({
  children,
  themeDrawer,
}: {
  children: React.ReactNode;
  themeDrawer: React.ReactNode;
}) {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <AuthProvider
            values={{
              signedIn,
              signInUrl: auth.getBuiltinUIUrl(),
              signOutUrl: auth.getSignoutUrl(),
            }}
          >
            {children}
            {themeDrawer}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
