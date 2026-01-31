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
                        <img src="/assets/imgs/about/header/1.jpg" alt="" />
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
                                    <img src="/assets/imgs/about/intro1.jpg" alt="" />
                                </div>
                                <div className="states">
                                    <h2 className="mb-10 fw-600">7k+</h2>
                                    <span className="text-u fz-12 fw-500">Satisfaction <br /> Clients</span>
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
                                        <Link href="https://youtu.be/AzwC6umvd1s" className="vid">
                                            <i className="fas fa-play"></i>
                                        </Link>
                                    </div>
                                    <div className="cont">
                                        <span>Lets see <br /> how we did it.</span>
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
                                <h6 className="sub-head mb-10">Who we are?</h6>
                                <h3>Elevating brands globally with innovative strategies and visionary design</h3>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item active">
                                            <h4 className="accordion-header" id="heading2">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse2"
                                                    aria-expanded="false" aria-controls="collapse2">
                                                    Whats Our mission?
                                                </button>
                                            </h4>
                                            <div id="collapse2" className="accordion-collapse collapse show"
                                                aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>How quick is quick? For most design, we are talking 2-3
                                                        business days.
                                                        We balance speed with quality,ensuring you get top-north
                                                        design
                                                        swiftly</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header" id="heading3">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse3"
                                                    aria-expanded="false" aria-controls="collapse3">
                                                    Our Culture & Our Studio
                                                </button>
                                            </h4>
                                            <div id="collapse3" className="accordion-collapse collapse"
                                                aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>How quick is quick? For most design, we are talking 2-3
                                                        business days.
                                                        We balance speed with quality,ensuring you get top-north
                                                        design
                                                        swiftly</p>
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

            <section className="container-fluid">

                <div className="section-padding sub-bg radius-30">

                    <div className="testimonials-ds">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="qoute-icon md-mb50">
                                        <div className="text">
                                            <img src="/assets/imgs/about/testim/Vector_Cricle_Text.svg" alt="" />
                                        </div>
                                        <div className="icon">
                                            <img src="/assets/imgs/about/testim/vector_quote.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="swiper testim-swiper swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="item">
                                                    <div className="text">
                                                        <h4>Their ability to deliver high-quality design and clean, functional UI stood out from day one. A team thats passionate, professional, and full of creativity. Exactly what we needed — highly recommended.</h4>
                                                    </div>
                                                    <div
                                                        className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                                        <div>
                                                            <div className="img-author">
                                                                <img src="/assets/imgs/about/testim/avatar1.jpg"
                                                                    alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="info-text">
                                                            <span>Bradley Gordon</span>
                                                            <p>CEO & Founder, Archin Studio</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="item">
                                                    <div className="text">
                                                        <h4>From branding to development, their attention to detail and creative energy made all the difference. A professional, forward-thinking team that truly understands digital — highly recommended.</h4>
                                                    </div>
                                                    <div
                                                        className="info d-flex align-items-center mt-40 pt-30 bord-thin-top-light">
                                                        <div>
                                                            <div className="img-author">
                                                                <img src="/assets/imgs/about/testim/avatar2.jpg"
                                                                    alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="info-text">
                                                            <span>Bradley Gordon</span>
                                                            <p>CEO & Founder, Archin Studio</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-ds mt-100">
                        <div className="container">
                            <div className="sec-head mb-80">
                                <h6 className="sub-head">Partner with +150 brands</h6>
                            </div>
                            <div className="row sm-marg">
                                <div className="col-lg col-md-4 col-6 md-mb30">
                                    <div className="item d-flex align-items-center justify-content-center">
                                        <div className="img">
                                            <img src="/assets/imgs/about/clients/1.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-md-4 col-6 md-mb30">
                                    <div className="item d-flex align-items-center justify-content-center">
                                        <div className="img">
                                            <img src="/assets/imgs/about/clients/2.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-md-4 col-6 md-mb30">
                                    <div className="item d-flex align-items-center justify-content-center">
                                        <div className="img">
                                            <img src="/assets/imgs/about/clients/3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-md-4 col-6 sm-mb30">
                                    <div className="item d-flex align-items-center justify-content-center">
                                        <div className="img">
                                            <img src="/assets/imgs/about/clients/4.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-md-4 col-6">
                                    <div className="item d-flex align-items-center justify-content-center">
                                        <div className="img">
                                            <img src="/assets/imgs/about/clients/5.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <div className="team-mp">
                <div className="container section-padding bord-thin-top-light">
                    <div className="sec-head mb-80">
                        <div className="row">
                            <div className="col-lg-7">
                                <h6 className="sub-head">Teams Leaders</h6>
                            </div>
                            <div className="col-lg-4 d-flex align-items-center">
                                <div className="ml-auto">
                                    <p>Every product we build is powered by passion. Meet the team that makes it happen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    <img src="/assets/imgs/about/team/1.png" alt="" />
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Rizwan Sayani</h2>
                                <span>Founder</span>
                            </div>
                            <div className="ml-auto">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    <img src="/assets/imgs/about/team/2.png" alt="" />
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Zehra Sayani</h2>
                                <span>Co-Founder</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="#0">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </Link>
                                    <Link href="#0">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item mb-10">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    <img src="/assets/imgs/about/team/3.png" alt="" />
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Shairoz Dewji</h2>
                                <span>Peoples Success Manager</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="#0">
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </Link>
                                    <Link href="#0">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </Link>
                                    <Link href="#0">
                                        <i className="fa-brands fa-behance"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="d-flex">
                            <div>
                                <div className="img fit-img">
                                    <img src="/assets/imgs/about/team/4.png" alt="" />
                                </div>
                            </div>
                            <div className="cont">
                                <h2>Ahsan Kamran</h2>
                                <span>Senior Developer</span>
                            </div>
                            <div className="ml-auto">
                                <div className="social-icon">
                                    <Link href="#0">
                                        <i className="fa-brands fa-instagram"></i>
                                    </Link>
                                    <Link href="#0">
                                        <i className="fa-brands fa-dribbble"></i>
                                    </Link>
                                    <Link href="#0">
                                        <i className="fa-brands fa-behance"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </main>
    );
}