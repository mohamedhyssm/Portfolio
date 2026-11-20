import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const title = "Mohamed Haytham | Full Stack Developer";
const description =
  "Mohamed Haytham builds full-stack web applications, backend systems, and learning platforms.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Mohamed Haytham Portfolio",
  authors: [{ name: "Mohamed Haytham Mohamed" }],
  metadataBase: new URL("https://mohamedhaytham.vercel.app"),
  openGraph: {
    title,
    description,
    siteName: "Mohamed Haytham Portfolio",
    images: [
      {
        url: "/mh-social.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Haytham, Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/mh-social.png"],
  },
  icons: {
    icon: { url: "/mh-logo.svg", type: "image/svg+xml" },
    apple: "/mh-apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={notoSans.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
