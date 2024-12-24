import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "PoE Rare Generator",
};

const fontin = localFont({
    src: [
        {
            path: 'assets/font/Fontin-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: 'assets/font/Fontin-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: 'assets/font/Fontin-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontin.className}`}
      >
        {children}
      </body>
    </html>
  );
}
