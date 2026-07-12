import "./globals.css";

export const metadata = {
  title: "ToonAI",
  description: "AI Image & Video Generator"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
