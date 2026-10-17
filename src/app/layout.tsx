import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashivamtechnologies.com"),
  title: "Ashivam Technologies | Innovative Technology. Powerful Solutions.",
  description:
    "We transform ambitious ideas into scalable digital products, intelligent software systems, and future-ready technology platforms designed for resilience and velocity.",
  keywords: [
    "Ashivam Technologies",
    "Software Engineering",
    "Web Architecture",
    "Mobile App Development",
    "Agra",
    "Enterprise Solutions",
    "Next.js",
    "Spring Boot",
    "Kotlin",
  ],
  authors: [{ name: "Ashivam Technologies" }],
  icons: {
    icon: "/ashivam-logo.svg",
    apple: "/ashivam-logo.jpg",
  },
  openGraph: {
    title: "Ashivam Technologies | Innovative Technology. Powerful Solutions.",
    description:
      "Enterprise software engineering, scalable cloud architectures, and digital product development crafted with precision from Agra, India.",
    url: "https://ashivamtechnologies.com",
    siteName: "Ashivam Technologies",
    images: [
      {
        url: "/ashivam-logo.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="bg-[#07090F] text-[#e1e2eb] antialiased selection:bg-[#528dff] selection:text-[#002d6c]">
        {children}
      </body>
    </html>
  );
}
