import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robi - Axentec",
  description: "Own the future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
