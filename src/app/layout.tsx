import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
        <body>{children}</body>
      <Footer />
    </html>
  );
}
