import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/containers/resume/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rajdeo prasad",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center flex-col py-12">
          <div className="w-11/12">
            <Header />
            <Navigation />
            <main className="flex justify-between items-start max-sm:flex-col">
              {children}
            </main>
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
