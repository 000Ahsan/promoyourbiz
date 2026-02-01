'use client';

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-sa pb-80">
            <div className="container section-padding">
                <div className="sec-head mb-80">
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="#" className="logo mb-40">
                                <img src="/assets/imgs/Logo-light.svg" alt="" />
                            </Link>
                            <h2 className="mb-40">Ready to bring your brand story to life?
                            </h2>
                            <h6>
                                We are a digital marketing agency that helps businesses grow their online presence and increase their revenue. We are a digital marketing agency that helps businesses grow their online presence and increase their revenue.
                            </h6>
                        </div>
                        <div className="col-lg-12">


                            <button
                                className="crv-butn mt-40"
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <div className="d-flex">
                                    <span className="text">Schedule a Discovery Call</span>
                                    <span className="icon">
                                        <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="row">
                        <div className="col-6">
                            <div className="item">
                                <span className="sub-color">location</span>
                                <p>Surrey, BC, Canada</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="item">
                                <span className="sub-color">inquiry</span>
                                <p>info@promoyourbiz.ca</p>
                                <p>+1 (877) 246 0914</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="social-icon">
                                <Link href="https://www.instagram.com/promoyourbiz/">
                                    <i className="fa-brands fa-instagram"></i>
                                </Link>
                                <Link href="https://www.facebook.com/Promoyourbiz">
                                    <i className="fa-brands fa-facebook"></i>
                                </Link>
                                <Link href="linkedin.com/company/promo-your-biz-ca/">
                                    <i className="fa-brands fa-linkedin-in"></i>
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
                                <p>© {new Date().getFullYear()} <Link href="https://promoyourbiz.ca">Promo Your Biz</Link>. All Right Reserved</p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end">
                            <div className="links sub-color d-flex justify-content-between">
                                <Link href="/">Home</Link>
                                <Link href="/about">About</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/portfolio">Portfolio</Link>
                                <Link href="/blogs">Blogs</Link>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}