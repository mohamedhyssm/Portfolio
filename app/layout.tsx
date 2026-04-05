import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Mohamed Haytham",
  description: "Portfolio of a software engineer",
  applicationName: "Mohamed Haytham Portfolio",
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Mohamed Haytham Mohamed" }],
  openGraph: {
    title: "Mohamed Haytham Mohamed",
    description: "Portfolio of a software engineer",
    siteName: "Mohamed Haytham Portfolio",
    images: [
      {
        url: "/Logo.png",
        width: 512,
        height: 512,
        alt: "Logo of Mohamed Haytham Mohamed",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Haytham Mohamed",
    description: "Portfolio of a software engineer",
    images: ["/Logo.png"],
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", notoSans.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
