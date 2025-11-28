import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Somstyle – Slimme oplossingen voor thuis",
  description: "Somstyle maakt praktische en stijlvolle producten voor elke dag. Van keuken tot woonkamer: met Somstyle wordt organiseren, opbergen en schoonmaken net even makkelijker.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/favicons/favicon.ico', sizes: 'any' },
      { url: '/assets/favicons/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/assets/favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}


