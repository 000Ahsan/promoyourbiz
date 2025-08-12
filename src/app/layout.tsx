import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";


export const metadata: Metadata = {
  title: "An Interactive Brand Marketing Agency in Canada | Promo Your Biz",
  description: "An Interactive Brand Marketing Agency in Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/imgs/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/common/css/plugins.css" />
        <link rel="stylesheet" href="/common/css/common_style.css" />
        <link rel="stylesheet" href="/assets/css/home7-style.css" />
        <link rel="stylesheet" href="/assets/css/inner_pages.css" />
      </head>
      <body
        className={`antialiased`}
      >

        <>
          <div className="loader-wrap">
              <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                  <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
              </svg>

              <div className="loader-wrap-heading">
                  <div className="load-text">
                      <span>L</span>
                      <span>o</span>
                      <span>a</span>
                      <span>d</span>
                      <span>i</span>
                      <span>n</span>
                      <span>g</span>
                  </div>
              </div>
          </div>
          <div className="cursor"></div>
          <div className="progress-wrap cursor-pointer">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>

          <Header />
          <Menu />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}

              <Footer />
            </div>
          </div>

        </>

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
