import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { UtmProvider } from "@/components/providers/UtmProvider";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abubakar Siddik | AI Automation Specialist & Full Stack Developer",
  description: "Abubakar Siddik — AI Automation Specialist with n8n, Make.com, GoHighLevel (GHL), and Zapier. Full Stack Developer with React.js, Next.js, Node.js, and the MERN stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <Script id="clear-caches" strategy="beforeInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(regs){
                regs.forEach(function(r){ r.unregister(); });
              });
            }
            if (window.caches) {
              caches.keys().then(function(keys){ keys.forEach(function(k){ caches.delete(k); }); });
            }
          `}
        </Script>
        {/* Google Analytics (GA4) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}  
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white pb-28 md:pb-32">
        <ScrollProgressBar />
          <main className="flex-1">
            <UtmProvider>{children}</UtmProvider>
          </main>
          <Footer />
          <BottomNav />
      </body>
    </html>
  );
}

