import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import LandingPage from "@/components/landing";
import SideBar from "@/components/sider-bar/side-bar";
import CommonLayout from "@/components/common/common-layout";

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
  const { isAuthenticated, getUser } = getKindeServerSession();
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen w-screen">
            {isLoggedIn ? (
              <>
                <Navbar />
                <main className="w-screen flex h-full">
                  <SideBar />
                  <CommonLayout>{children}</CommonLayout>
                </main>
              </>
            ) : (
              <LandingPage />
            )}
          </div>
        </Providers>
      </body>
    </html>
  );
}
