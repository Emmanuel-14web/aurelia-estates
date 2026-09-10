import type { Metadata } from "next";
import "./globals.css";
import "./inner.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurelia-estates.example"),
  title: "Aurelia Estates | Exceptional Properties",
  description: "A portfolio concept for a boutique luxury real estate agency.",
  robots: { index: false, follow: true },
  openGraph: { title: "Aurelia Estates", description: "Exceptional properties. Remarkable places.", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "Aurelia Estates", description: "Exceptional properties. Remarkable places.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><a className="skip" href="#main">Skip to content</a>{children}</body>
    </html>
  );
}
