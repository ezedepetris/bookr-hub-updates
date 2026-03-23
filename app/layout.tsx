import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://updates.bookrhub.com"),
  title: {
    default: "BookrHub Updates - New Features, Improvements & News",
    template: "%s | BookrHub Updates",
  },
  description:
    "Stay updated with the latest BookrHub features, improvements, and news. Discover what's new in our booking system for salons, spas, and barbershops.",
  keywords: [
    "BookrHub updates",
    "booking software news",
    "salon software changelog",
    "spa booking system",
    "barbershop software",
    "appointment booking updates",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://updates.bookrhub.com",
    siteName: "BookrHub Updates",
    title: "BookrHub Updates - New Features, Improvements & News",
    description:
      "Stay updated with the latest BookrHub features, improvements, and news.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookrHub Updates",
    description: "Latest features and news from BookrHub.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often is BookrHub updated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We release updates regularly, typically adding new features and improvements every 2-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Are updates free for all users?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all updates are automatically available to all BookrHub users at no extra cost.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a new feature?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request features by contacting our support team or through your account dashboard.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BookrHub Updates",
  url: "https://updates.bookrhub.com",
  description: "Latest features, improvements and news from BookrHub.",
  publisher: {
    "@type": "Organization",
    name: "BookrHub",
    url: "https://bookrhub.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([faqSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col gradient-background font-sans">
        {children}
      </body>
    </html>
  );
}
