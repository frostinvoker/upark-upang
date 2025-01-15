import "./globals.css";

export const metadata = {
  title: "Upark",
  description: "Upark - A Parking system for University of Pangasinan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
