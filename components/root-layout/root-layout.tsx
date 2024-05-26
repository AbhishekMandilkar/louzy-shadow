/* eslint-disable @next/next/no-head-element */
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { AppNavbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LandingPage from "@/components/landing-page/landing";
import SideBar from "@/components/sider-bar/side-bar";
import CommonLayout from "@/components/common/common-layout";
import { Providers } from "@/app/providers";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader showSpinner={false} />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <>
            {isLoggedIn ? (
              <div className="flex h-screen w-screen bg-default-100">
                <SideBar />
                <main className="flex-1 overflow-scroll border-1 border-default-200 m-2 rounded-lg bg-background">
                  <AppNavbar />
                  <CommonLayout>{children}</CommonLayout>
                </main>
              </div>
            ) : (
              <LandingPage />
            )}
          </>
        </Providers>
      </body>
    </html>
  );
}
