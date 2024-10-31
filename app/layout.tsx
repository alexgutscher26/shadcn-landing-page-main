import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigFlow – Finance Made Simple for the Self-Employed",
  description:
    "GigFlow simplifies finances for gig workers and freelancers. Manage income, track expenses, and plan for taxes and goals—all in one easy-to-use platform.",
  keywords: [
    "freelance finance",
    "gig worker tools",
    "self-employed accounting",
    "income tracking",
    "expense management",
    "tax planning",
  ],
  authors: [{ name: "Alex" }],
  creator: "Owner",
  publisher: "GigFlow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://gigflow.com',
    title: 'GigFlow – Finance Made Simple for the Self-Employed',
    description: 'GigFlow simplifies finances for gig workers and freelancers. Manage income, track expenses, and plan for taxes and goals—all in one easy-to-use platform.',
    siteName: 'GigFlow',
    images: [{
      url: 'https://your-domain.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'GigFlow - Finance Management Platform',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GigFlow – Finance Made Simple for the Self-Employed',
    description: 'GigFlow simplifies finances for gig workers and freelancers. Manage income, track expenses, and plan for taxes and goals—all in one easy-to-use platform.',
    images: ['https://your-domain.com/twitter-image.jpg'],
    creator: '@yourhandle',
    site: '@gigflow',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
    other: {
      'facebook-domain-verification': ['your-facebook-domain-verification'],
    },
  },
  alternates: {
    canonical: 'https://gigflow.com',
  },
  category: 'Finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}