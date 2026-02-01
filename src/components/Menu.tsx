'use client';

import Link from "next/link";

export default function Menu() {
    return (
        <div className="hamenu">
            <div className="close-menu cursor-pointer ti-close"></div>
            <div className="container-fluid rest d-flex">
                <div className="menu-links">
                    <ul className="main-menu rest">
                        <li>
                            <div className="o-hidden">
                                <Link href="/" className="link"><span className="fill-text"
                                    data-text="Home">Home</span></Link>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <Link href="/about" className="link"><span className="fill-text"
                                    data-text="About">About</span></Link>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <Link href="/services" className="link"><span className="fill-text"
                                    data-text="Services">Services</span></Link>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <Link href="/portfolio" className="link"><span className="fill-text"
                                    data-text="Portfolio">Portfolio</span></Link>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <Link href="/contact" className="link"><span className="fill-text"
                                    data-text="Start Project Now!">Start Project Now!</span></Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cont-info valign">
                    <div className="text-center full-width">
                        <div className="logo">
                            <img src="/assets/imgs/Logo-light.svg" alt="" />
                        </div>
                        <div className="social-icon mt-40">
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
                        <div className="item mt-30">
                            <h5>Canada</h5>
                        </div>
                        <div className="item mt-10">
                            <h5><Link href="mailto:info@promoyourbiz.ca">info@promoyourbiz.ca</Link></h5>
                            <h5 className="underline"><Link href="tel:+18774584550">+1 (877) 458 4550</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}