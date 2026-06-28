import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sim & Sam AI Marketing Suite",
  description: "Create WhatsApp status videos, posters, and captions for Sim & Sam's Bandlaguda."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
