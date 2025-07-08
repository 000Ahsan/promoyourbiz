import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";


export const metadata: Metadata = {
  title: "An Interactive Brand Marketing Agency in Vancouver, Canada | Promo Your Biz",
  description: "An Interactive Brand Marketing Agency in Vancouver, Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/imgs/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/common/css/plugins.css" />
        <link rel="stylesheet" href="/common/css/common_style.css" />
        <link rel="stylesheet" href="/assets/css/home7-style.css" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}

        <Script src="/common/js/lib/jquery-3.6.0.min.js" />
        <Script src="/common/js/lib/jquery-migrate-3.4.0.min.js" />

        <Script src="/common/js/lib/plugins.js" />

        <Script src="/common/js/gsap_lib/gsap.min.js" />
        <Script src="/common/js/gsap_lib/ScrollSmoother.min.js" />
        <Script src="/common/js/gsap_lib/ScrollTrigger.min.js" />
        <Script src="/common/js/gsap_lib/SplitText.min.js" />

        <Script src="/common/js/common_scripts.js" />

        <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
