import "~/styles/globals.css";
import "~/styles/color-picker.css";

import { Inter } from "next/font/google";

import { AuthProvider } from "~/components/auth/AuthProvider";
import { MobileView } from "~/components/mobile/MobileView";
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
  logout,
  themeDrawer,
}: {
  children: React.ReactNode;
  logout: React.ReactNode;
  themeDrawer: React.ReactNode;
}) {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <html lang="en">
      <body className={`select-none font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <AuthProvider
            values={{
              signedIn,
              signInUrl: auth.getBuiltinUIUrl(),
              signOutUrl: auth.getSignoutUrl(),
            }}
          >
            <div className="overflow-hidden">{children}</div>
            {themeDrawer}
            {logout}
            <MobileView />
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
