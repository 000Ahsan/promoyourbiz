import OurPartners from "@/components/OurPartners";
import Services from "@/components/Services";
import Link from "next/link";

export default function About() {
    return (
        <main>
            <header className="about-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80">
                        <h1>Creative Designers. Skilled Developers. Growth-Driven Marketers.</h1>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text mt-30">
                                    <h6>Building standout digital experiences requires more than just technical skill — it demands a deep understanding of each brands unique identity. With a keen eye for design and a passion for innovation, we craft websites, apps, and strategies that capture attention and drive growth.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="main-marq shadow-off">
                        <div className="slide-har st1">
                            <div className="box">
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>About Us</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fit-img radius-15">
                        <img src="/assets/imgs/promoyourbiz-about-banner.jpg" alt="" />
                    </div>
                </div>
            </header>

            <Services />

            <section className="intro-iner section-padding">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-5">
                            <div className="img-box">
                                <div className="img fit-img">
                                    <img src="/assets/imgs/promoyourbiz-about-1.jpg" alt="" />
                                </div>
                                <div className="states">
                                    <h2 className="mb-10 fw-600">7k+</h2>
                                    <span className="text-u fz-12 fw-500">Happy <br /> Clients</span>
                                </div>
                                <div className="just-shape">
                                    <div className="shap-right-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className="w-11 h-11">
                                            <path
                                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                fill="#0e0f11"></path>
                                        </svg>
                                    </div>
                                    <div className="shap-left-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            className="w-11 h-11">
                                            <path
                                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                fill="#0e0f11"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="butn-vid d-flex align-items-center">
                                    <div className="play-button">
                                        <Link target="_blank" href="https://www.instagram.com/promoyourbiz/" className="vid">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                    <div className="cont">
                                        <span>Checkout our Social <br /> Presence!</span>
                                    </div>
                                    <div className="shaps bottom">
                                        <div className="shap-right-top">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="w-11 h-11">
                                                <path
                                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                    fill="#0e0f11"></path>
                                            </svg>
                                        </div>
                                        <div className="shap-left-bottom">
                                            <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                className="w-11 h-11">
                                                <path
                                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                    fill="#0e0f11"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sec-head mb-60">
                                <h2 className="mb-10">Who we are?</h2>
                                <h6>Elevating brands globally with innovative strategies and visionary design</h6>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading1">
                                                <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse1"
                                                    aria-expanded="true" aria-controls="collapse1">
                                                    Build Strong Foundations
                                                </button>
                                            </h4>
                                            <div id="collapse1" className="accordion-collapse collapse show"
                                                aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Our mission is to help businesses build solid brand and digital foundations that are clear, consistent, and scalable. We focus on getting the fundamentals right so growth isn't accidental — its intentional.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading2">
                                                <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse2"
                                                    aria-expanded="true" aria-controls="collapse2">
                                                    Execute With Purpose
                                                </button>
                                            </h4>
                                            <div id="collapse2" className="accordion-collapse collapse"
                                                aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>We believe great ideas mean nothing without proper execution. Every design, line of code, and strategy we deliver is built with a clear goal: performance, usability, and long-term impact.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading3">
                                                <button className="accordion-button" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse3"
                                                    aria-expanded="true" aria-controls="collapse3">
                                                    Drive Real Growth
                                                </button>
                                            </h4>
                                            <div id="collapse3" className="accordion-collapse collapse"
                                                aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>We don't chase vanity metrics. Our mission is to create systems that attract the right audience, convert attention into action, and support sustainable business growth.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content" data-tp-throwable-scene="true">
                        <div className="item" data-tp-throwable-el="">
                            <div className="">
                                <span>SEO/Marketing</span>
                            </div>
                        </div>
                        <div className="item" data-tp-throwable-el="">
                            <div className="">
                                <span className="bdark">Motion</span>
                            </div>
                        </div>
                        <div className="item" data-tp-throwable-el="">
                            <div className="icon1">
                                <img src="/assets/imgs/about/s-icon1.svg" alt="" />
                            </div>
                        </div>
                        <div className="item" data-tp-throwable-el="">
                            <div className="">
                                <span className="bred">UI/UX Design</span>
                            </div>
                        </div>
                        <div className="item" data-tp-throwable-el="">
                            <div className="">
                                <img src="/assets/imgs/about/s-icon2.svg" alt="" />
                            </div>
                        </div>
                        <div className="item" data-tp-throwable-el="">
                            <div className="">
                                <span>Branding</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid sub-bg radius-30">
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="flex items-center justify-center">
                                <img src="/assets/imgs/promoyourbiz-icon-yellow.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="text">
                                <h4>Promo Your Biz was built on one simple idea: branding, design, code, and growth must work together. When they don't, businesses stall. When they do, growth becomes intentional.We focus on clarity, clean execution, and building digital foundations that actually support long-term success. No shortcuts. No gimmicks. Just work that moves businesses forward.</h4>
                            </div>
                            <div
                                className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                <div className="info-text">
                                    <span>Rizwan Sayani</span>
                                    <p>Founder & CEO, Promo Your Biz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="team-mp">
                <div className="container section-padding">
                    <div className="mb-80">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="mb-40">Teams Leaders</h2>
                            </div>
                            <div className="col-lg-12">
                                <h6>Every product we build is powered by passion. Meet the team that makes it happen. We are a team of innovators, designers, and developers who are passionate about building great products. </h6>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/rizwan-sayani.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Rizwan Sayani</h2>
                                <span>Founder / CEO</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/rizwan-r-sayani/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/zehra-sayani.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Zehra Sayani</h2>
                                <span>Co-Founder / Manager</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/zehra-r-sayani-37893735/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/shairoz-dewji.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Shairoz Dewji</h2>
                                <span>Peoples Success Manager</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/shairoz-dewji-37b84489/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/ahsan-kamran.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Ahsan Kamran</h2>
                                <span>Senior Full Stack Engineer</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/ahsankamran000/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/ahsan-kamran.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Arooba Ashraf</h2>
                                <span>Lead Designer</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/arooba-ashraf/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    {/* <img src="/assets/imgs/team/ahsan-kamran.png" alt="" /> */}
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Ali Rashid</h2>
                                <span>Content Writing Expert</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/in/ali-rashid-2877b8228/">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurPartners />

        </main>
    );
}