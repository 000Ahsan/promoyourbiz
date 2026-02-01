'use client';

import Link from "next/link";

export default function Services({ showLearnMoreButton = true }: { showLearnMoreButton?: boolean }) {
    return (
        <section className="services-dm sub-bg radius-30 section-padding !m-3">
            <div className="container section-padding pt-0">
                <div className="sec-head mb-30">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="mb-40">Our Service Expertise</h2>
                            <h6>We are a brand marketing agency with expertise, and we are on a mission to help you take the next step in your business. We offer a range of services to help you grow your business and achieve your goals.</h6>
                        </div>
                        {showLearnMoreButton && (
                            <div className="col-lg-12" >
                                <div className="text">
                                    <Link href="/services" className="crv-butn mt-40">
                                        <div className="d-flex">
                                            <span className="text">Learn More</span>
                                            <span className="icon">
                                                <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-lg-12">
                        <div className="item grid grid-cols-5 items-center gap-5">
                            <div className="title">
                                <h3>Branding</h3>
                            </div>
                            <div className="text ml-auto col-span-4">
                                <div className="d-flex align-items-center">
                                    <p>We create unique and memorable brand identities that help you stand out in the market. Services include logo design, brand strategy, and visual language development.</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Brand Identity</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Logo Design</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Brand Strategy</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Visual Language</span>
                                </div>
                            </div>
                        </div>
                        <div className="item grid grid-cols-5 items-center gap-5">
                            <div className="title">
                                <h3>Design</h3>
                            </div>
                            <div className="text ml-auto col-span-4">
                                <div className="d-flex align-items-center">
                                    <p>We create visually stunning and user-friendly designs that enhance user experience and engagement. Services include UI/UX design, web and app design, brand identity, and visual direction.</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">UI/UX Design</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Web Design</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">App Design</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Brand Identity</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Visual Direction</span>
                                </div>
                            </div>
                        </div>
                        <div className="item grid grid-cols-5 items-center gap-5">
                            <div className="title">
                                <h3>Code</h3>
                            </div>
                            <div className="text ml-auto col-span-4">
                                <div className="d-flex align-items-center">
                                    <p>We build custom websites and applications that meet your business needs. Services include website development, web applications, mobile apps, CMS, and e-commerce solutions.</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Website Development</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Web Applications</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Mobile Apps</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">CMS</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">E-commerce Solutions</span>
                                </div>
                            </div>
                        </div>
                        <div className="item grid grid-cols-5 items-center gap-5">
                            <div className="title">
                                <h3>Growth</h3>
                            </div>
                            <div className="text ml-auto col-span-4">
                                <div className="d-flex align-items-center">
                                    <p>We help you grow your business through effective marketing strategies. Services include SEO optimization, social media marketing, performance campaigns, analytics, and strategy development.</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">SEO Optimization</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Social Media Marketing</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Performance Campaigns</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Analytics</span>
                                    <span className="text-sm bg-dark px-3 py-1 rounded-full">Strategy Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}