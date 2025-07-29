'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-sa pb-80">
        <div className="container section-padding">
            <div className="sec-head mb-80">
                <div className="row">
                    <div className="col-lg-5">
                        <Link href="#" className="logo md-mb80">
                            <img src="/assets/imgs/Logo-light.svg" alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-indent">Empowering brands and simplifying digital experiences through strategic design, clean code, and smart marketing.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="contact-info">
                <div className="row">
                    <div className="col-lg-6 offset-lg-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="item">
                                    <span className="sub-color">location</span>
                                    <p>Surrey, BC, Canada</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end justify-end">
                                <div className="item">
                                    <span className="sub-color">inquiry</span>
                                    <p>info@promoyourbiz.ca</p>
                                    <p>+1-877-246-0914</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-5">
                        <div className="social-icon">
                            <Link href="#0">
                                <i className="fa-brands fa-x-twitter"></i>
                            </Link>
                            <Link href="#0">
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                            <Link href="#0">
                                <i className="fa-brands fa-dribbble"></i>
                            </Link>
                            <Link href="#0">
                                <i className="fa-brands fa-behance"></i>
                            </Link>
                            <Link href="#0">
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-footer">
            <div className="container bord-thin-top-light pt-50">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="copy sub-color md-mb50">
                            <p>© 2025-26 <Link href="#0">Promo Your Biz</Link>. All Right Reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <div className="links sub-color d-flex justify-content-between">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/portfolio">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}