'use client';

import Link from "next/link";
import { useState } from "react";
import OnboardingModal from "@/components/OnboardingModal";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import OurPartners from "@/components/OurPartners";
import portfolioData from "@/data/portfolio";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <main>
            <header className="header-dm section-padding">
                <div className="container position-re">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="caption">
                                <h1> Unleash the Power of <br /> Your Brand&apos;s Story</h1>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="crv-butn mt-40"
                                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                >
                                    <div className="d-flex">
                                        <span className="text">Claim Your Brand Blueprint</span>
                                        <span className="icon">
                                            <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div className="row md-hide">
                                <div className="col-lg-6 imgs-cube">
                                    <div className="imgs">
                                        <div className="circle">
                                            <img src="/assets/imgs/header/circle-badge.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="img fit-img radius-30 mt-50">
                                        <video src="/assets/imgs/header/video-1.mp4" autoPlay muted loop />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mimg fit-img">
                        <div className="shaps top">
                            <div className="shap-right-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#232323"></path>
                                </svg>
                            </div>
                            <div className="shap-left-bottom">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#232323"></path>
                                </svg>
                            </div>
                        </div>
                        <video style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            borderRadius: '30px'
                        }} src="/assets/imgs/header/video-222.mp4" autoPlay muted loop />
                        <div className="text">
                            <span className="fz-12 text-u mb-10">Since 2018</span>
                            <p>We craft websites that reveal your why <br /> and resonate with your audience, <br />turning casual visitors into devoted customers.</p>
                            <div className="shaps bottom">
                                <div className="shap-left-top">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#232323"></path>
                                    </svg>
                                </div>
                                <div className="shap-right-bottom">
                                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="w-11 h-11">
                                        <path
                                            d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                            fill="#232323"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="intro-dm">
                <div className="container">
                    <div className="sec-head mb-25">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="mb-40">Why Your Brand Matters</h2>
                            </div>
                            <div className="col-lg-12">
                                <h6 className="font-normal">Every brand has a spark that sets it apart. We believe your origin story, values, and vision are the most powerful assets you own. By centering your website around your why, you will connect with customers on a deeper level—fostering loyalty and advocacy rather than fleeting clicks.
                                </h6>
                                <Link href="/about" className="crv-butn mt-40">
                                    <div className="d-flex">
                                        <span className="text">More About Us</span>
                                        <span className="icon">
                                            <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurPartners />

            <section className="works-dm pt-30 pb-30">
                <div className="container">
                    <div>
                        <h2 className="mb-40">Our Featured Work</h2>
                        <h6>Take a look at our projects. We've had the privilege of collaborating with businesses across diverse industries, helping them establish a strong online presence and achieve their digital goals.</h6>
                    </div>
                    <div className="gallery row md-marg">
                        {portfolioData.sort(() => Math.random() - 0.5).slice(0, 4).map((item, index) => (
                            <div className="items col-lg-6 order-md-2" key={index}>
                                <div className="item">
                                    <div className="img">
                                        <img src={item.image} alt="" />
                                        <div className="tags">
                                            {item.tags.map((tag, index) => (
                                                <Link key={index} href="#0">{tag}</Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="cont mt-30">
                                        <div className="info sub-color mb-10">
                                            <span>{item.created}</span>
                                            <span className="dot"></span>
                                            <span>{item.technologies.map((tech, index) => (
                                                <span key={index}>{tech}</span>
                                            ))}</span>
                                        </div>
                                        <h6>
                                            <Link className="font-bold" target="_blank" href={item.link}>{item.title}</Link>
                                        </h6>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="/portfolio" className="crv-butn mt-100">
                                <div className="d-flex">
                                    <span className="text">View all Projects</span>
                                    <span className="icon">
                                        <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

            <section className="intro-vid ontop">
                <div className="container">
                    <div className="bg-img" data-background="/assets/imgs/pyb-intro-video-snap.png">
                        <div className="states">
                            <div className="imgs mb-30">
                                <div className="img fit-img">
                                    <img src="/assets/imgs/testim/avatar1.jpg" alt="" />
                                </div>
                                <Link href="#0" className="icon">
                                    <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                </Link>
                            </div>
                            <h3 className="mb-15">7k+ Clients</h3>
                            <p>Approaches are prominently featured on many architect websites.</p>
                        </div>
                        <div className="play-button">
                            <Link href="/assets/videos/pyb-intro-video.mp4" className="vid">
                                <i className="fas fa-play"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-100">
                <Testimonials />
            </div>

            <section className="blog-sa">
                <div className="container section-padding">
                    <div className="sec-head mb-30">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="mb-40">Latest Articles</h2>
                                <h6>The place that we share everything related to design trends, tips and more.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="item md-mb50">
                                <div>
                                    <img src="/assets/imgs/blog/1.jpg" alt="" />
                                </div>
                                <div className="cont mt-30">
                                    <h6>
                                        <Link className="font-bold" href="/">How to Create a Brand Identity for Your Business using AI?</Link>
                                    </h6>
                                    <p>Building a brand identity used to take weeks of meetings, expensive agencies, and endless revisions. That’s no longer the case. AI has changed the game — if you know how to use it properly.</p>
                                    <div className="info d-flex align-items-center mt-20">
                                        <Link href="#0" className="tag">
                                            <span>Design Trends</span>
                                        </Link>
                                        <Link href="#0" className="date">
                                            <span>/ May 15, 2024</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="item">
                                <div>
                                    <img src="/assets/imgs/blog/2.jpg" alt="" />
                                </div>
                                <div className="cont mt-30">
                                    <h6>
                                        <Link className="font-bold" href="/">Common UX painpoints in Dashboard-related projects</Link>
                                    </h6>
                                    <p>Dashboards are supposed to make data easy to understand. But most dashboards fail. They are cluttered, confusing, and don't actually help anyone make better decisions.</p>
                                    <div className="info d-flex align-items-center mt-20">
                                        <Link href="#0" className="tag">
                                            <span>User Experience</span>
                                        </Link>
                                        <Link href="#0" className="date">
                                            <span>/ May 15, 2024</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Link href="/blogs" className="crv-butn mt-100">
                                <div className="d-flex">
                                    <span className="text">View all Blogs</span>
                                    <span className="icon">
                                        <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <OnboardingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
