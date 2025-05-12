import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara Catalano - Software Engineer and Developer Portfolio | Melbourne, Australia",
  description:
    "Sara Catalano's software engineering portfolio showcasing skills in full-stack development, mobile and web applications, and software solutions. React, Python, C#, .NET, and more.",
  keywords:
    "software engineer, web developer, full-stack developer, mobile developer, React, Python, C#, .NET, software solutions, programming portfolio, software development, web applications",
  authors: [
    {
      name: "Sara Catalano",
      url: "https://saradomincroft.github.io/personal-portfolio/",
    },
  ],
  openGraph: {
    title: "Sara Catalano - Software Engineer & Developer Portfolio | Melbourne, Australia",
    description:
      "Explore the software engineering portfolio of Sara Catalano. Specializing in full-stack development, web apps, and innovative software solutions.",
    url: "https://saradomincroft.github.io/personal-portfolio/",
    siteName: "Sara Catalano",
    // images: [
    //   {
    //     url: "https://www.saracatalano.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Sara Catalano - Software Engineer Portfolio",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
