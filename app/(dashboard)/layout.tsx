import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import ClerkProviderWrapper from "../(auth)/ClerkProviderWrapper";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DarkShop - Admin Dashboard",
  description: "Admin dashboard to manage DarkShop's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ToasterProvider />
          <div className="flex max-lg:flex-col ">
            <LeftSideBar />
            <TopBar />
            <div>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
