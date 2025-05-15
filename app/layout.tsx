// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles

// Initialize Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Metadata for the application
export const metadata: Metadata = {
  title: "Next.js To-Do App",
  description: "A simple To-Do application built with Next.js and Tailwind CSS",
};

/**
 * RootLayout component for the application.
 * This component wraps all pages and provides a consistent layout.
 * @param {Readonly<{ children: React.ReactNode }>} props - The component props.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS is typically configured via postcss.config.js and tailwind.config.ts */}
        {/* No need for <script src="https://cdn.tailwindcss.com"></script> here */}
        {/* Google Fonts are handled by next/font */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
