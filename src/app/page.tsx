import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <header className="header-dm section-padding">
            <div className="container-xl position-re">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="caption">
                            <h1>Creative & Effective Brand <br /> Marketing Agency</h1>
                        </div>
                        <div className="row md-hide">
                            <div className="col-lg-6 imgs-cube">
                                <div className="imgs">
                                    <div className="circle">
                                        <Image src="assets/imgs/header/circle-badge.svg" alt="" />
                                    </div>
                                </div>
                                <div className="img fit-img radius-30 mt-50">
                                    <Image src="assets/imgs/header/1.jpg" alt="" />
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
                    <Image src="assets/imgs/header/2.jpg" alt="" />
                    <div className="text">
                        <span className="fz-12 text-u mb-10">Since <br /> 2018</span>
                        <p>We convert <br />
                            Ideas into Brands!</p>
                        <div className="shaps bottom">
                            <div className="shap-left-top">
                                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className="w-11 h-11">
                                    <path
                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                        fill="#0e0f11"></path>
                                </svg>
                            </div>
                            <div className="shap-right-bottom">
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
        </header>

        <section className="intro-dm">
            <div className="container">
                <div className="sec-head mb-100">
                    <div className="row">
                        <div className="col-lg-4">
                            <h6 className="sub-head">What Makes Us Different</h6>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="text-indent">Our team of experts focus on client and customer satisfaction as the ultimate goal for our projects. This is one of the many reasons why our work is globally acclaimed and recognized.
                            </h3>
                            <Link href="../inner_pages/about.html" className="crv-butn mt-40">
                                <div className="d-flex">
                                    <span className="text">More About Us</span>
                                    <span className="icon">
                                        <Image src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="clients-dm">
            <div className="main-marq shadow-off">
                <div className="slide-har st1">
                    <div className="box">
                        <div className="item">
                            <Image src="assets/imgs/brands/1.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/2.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/3.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/4.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/5.svg" alt="" />
                        </div>
                    </div>
                    <div className="box">
                        <div className="item">
                            <Image src="assets/imgs/brands/1.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/2.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/3.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/4.svg" alt="" />
                        </div>
                        <div className="item">
                            <Image src="assets/imgs/brands/5.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="works-dm section-padding">
            <div className="container">
                <div className="gallery row md-marg">
                    <div className="items col-lg-6 order-md-2">
                        <div className="item">
                            <div className="img">
                                <Image src="assets/imgs/works/2.jpg" alt="" />
                                <div className="tags">
                                    <Link href="#0">Website</Link>
                                    <Link href="#0">UI/UX</Link>
                                    <Link href="#0">illustration</Link>
                                </div>
                            </div>
                            <div className="cont mt-30">
                                <div className="info sub-color mb-10">
                                    <span>2024</span>
                                    <span className="dot"></span>
                                    <span>WordPress</span>
                                </div>
                                <h6>
                                    <Link href="../inner_pages/project-details.html">Smart Choice Builders</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="items col-lg-6 order-md-1">
                        <div className="sec-head">
                            <h6 className="sub-head mb-15">Featured Works</h6>
                            <h2 className="fz-60">Take a look at <br /> our projects</h2>
                        </div>
                    </div>
                    <div className="items col-lg-6 order-md-2">
                        <div className="item">
                            <div className="img">
                                <Image src="assets/imgs/works/1.jpg" alt="" />
                                <div className="tags">
                                    <Link href="#0">Website</Link>
                                    <Link href="#0">UI/UX</Link>
                                    <Link href="#0">illustration</Link>
                                </div>
                            </div>
                            <div className="cont mt-30">
                                <div className="info sub-color mb-10">
                                    <span>2023</span>
                                    <span className="dot"></span>
                                    <span>WordPress</span>
                                </div>
                                <h6>
                                    <Link href="../inner_pages/project-details.html">Metro Contracting Ltd.</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="items col-lg-6 order-md-2">
                        <div className="item">
                            <div className="img">
                                <Image src="assets/imgs/works/3.jpg" alt="" />
                                <div className="tags">
                                <Link href="#0">Website</Link>
                                    <Link href="#0">UI/UX</Link>
                                    <Link href="#0">illustration</Link>
                                </div>
                            </div>
                            <div className="cont mt-30">
                                <div className="info sub-color mb-10">
                                    <span>2023</span>
                                    <span className="dot"></span>
                                    <span>WordPress</span>
                                </div>
                                <h6>
                                    <Link href="../inner_pages/project-details.html">313 Consultancy</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="items col-lg-6 order-md-2">
                        <div className="item">
                            <div className="img">
                                <Image src="assets/imgs/works/4.jpg" alt="" />
                                <div className="tags">
                                    <Link href="#0">Website</Link>
                                    <Link href="#0">UI/UX</Link>
                                    <Link href="#0">illustration</Link>
                                </div>
                            </div>
                            <div className="cont mt-30">
                                <div className="info sub-color mb-10">
                                    <span>2023</span>
                                    <span className="dot"></span>
                                    <span>WordPress</span>
                                </div>
                                <h6>
                                    <Link href="../inner_pages/project-details.html">South Ridge Disposal Ltd</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="items col-lg-6 order-md-2">
                        <Link href="../inner_pages/portfolio-gallery.html" className="crv-butn mt-100">
                            <div className="d-flex">
                                <span className="text">View all Projects</span>
                                <span className="icon">
                                    <Image src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="services-dm sub-bg radius-30 section-padding">
            <div className="container section-padding pt-0">
                <div className="sec-head mb-100">
                    <div className="row">
                        <div className="col-lg-4">
                            <h6 className="sub-head">Our Service Expertise</h6>
                        </div>
                        <div className="col-lg-5">
                            <h3 className="text-indent md-mb15">We help you to build a creative digital business</h3>
                        </div>
                        <div className="col-lg-3">
                            <div className="text">
                                <p>We are a brand marketing agency with expertise, and we’re on a mission
                                    to help you take the next step in your business.</p>
                                <Link href="../inner_pages/services.html" className="crv-butn mt-40">
                                    <div className="d-flex">
                                        <span className="text">Learn More</span>
                                        <span className="icon">
                                            <Image src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-lg-9">
                        <div className="item d-flex align-items-center">
                            <div className="title">
                                <h2>Branding</h2>
                            </div>
                            <div className="text ml-auto">
                                <div className="d-flex align-items-center">
                                    <p>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</p>
                                    <div>
                                        <div className="icon invert">
                                            <Image src="../common/imgs/icons/crown-solid.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item d-flex align-items-center">
                            <div className="title">
                                <h2>Design</h2>
                            </div>
                            <div className="text ml-auto">
                                <div className="d-flex align-items-center">
                                    <p>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</p>
                                    <div>
                                        <div className="icon invert">
                                            <Image src="../common/imgs/icons/bezier-curve-solid.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item d-flex align-items-center">
                            <div className="title">
                                <h2>Code</h2>
                            </div>
                            <div className="text ml-auto">
                                <div className="d-flex align-items-center">
                                    <p>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</p>
                                    <div>
                                        <div className="icon invert">
                                            <Image src="../common/imgs/icons/code-solid.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item d-flex align-items-center">
                            <div className="title">
                                <h2>Growth</h2>
                            </div>
                            <div className="text ml-auto">
                                <div className="d-flex align-items-center">
                                    <p>Brand Identity, Stragegy & Consult, <br /> Position, Rebrand</p>
                                    <div>
                                        <div className="icon invert">
                                            <Image src="../common/imgs/icons/chart-line-solid.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="intro-vid ontop">
            <div className="container">
                <div className="bg-img" data-background="assets/imgs/intro.jpg">
                    <div className="states">
                        <div className="imgs mb-30">
                            <div className="img fit-img">
                                <Image src="assets/imgs/testim/avatar1.jpg" alt="" />
                            </div>
                            <Link href="#0" className="icon">
                                <Image src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                            </Link>
                        </div>
                        <h3 className="mb-15">7k+ Clients</h3>
                        <p>Approaches are prominently featured on many architect websites.</p>
                    </div>
                    <div className="play-button">
                        <Link href="https://youtu.be/AzwC6umvd1s" className="vid">
                            <i className="fas fa-play"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonials-dm section-padding pb-0">
            <div className="container">
                <div className="sec-head mb-100">
                    <div className="row">
                        <div className="col-lg-5">
                            <h6 className="sub-head">What clients say?</h6>
                        </div>
                        <div className="col-lg-7">
                            <h3 className="text-indent">We have got a Proven <br /> Formula for Success!
                            </h3>
                            <div className="states d-flex mt-40">
                                <div>
                                    <h6><i className="fa-solid fa-check"></i> 7k+ Customers</h6>
                                </div>
                                <div className="ml-80">
                                    <h6><i className="fa-solid fa-check"></i> 99% Satisfaction</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper process-swiper swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="item">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <Image src="assets/imgs/testim/avatar1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="sub-color">Design quality</span>
                                    </div>
                                </div>
                                <h5>“Their services aren’t cookie-cutter and are truly specific to us.”</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aaron Beck</span>
                                    <div className="stars ml-auto">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="item">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <Image src="assets/imgs/testim/avatar2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="sub-color">Design quality</span>
                                    </div>
                                </div>
                                <h5>“Their services aren’t cookie-cutter and are truly specific to us.”</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aaron Beck</span>
                                    <div className="stars ml-auto">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="item">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <Image src="assets/imgs/testim/avatar3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="sub-color">Design quality</span>
                                    </div>
                                </div>
                                <h5>“Their services aren’t cookie-cutter and are truly specific to us.”</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aaron Beck</span>
                                    <div className="stars ml-auto">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="item">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <Image src="assets/imgs/testim/avatar4.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="sub-color">Design quality</span>
                                    </div>
                                </div>
                                <h5>“Their services aren’t cookie-cutter and are truly specific to us.”</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aaron Beck</span>
                                    <div className="stars ml-auto">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="item">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <Image src="assets/imgs/testim/avatar3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="sub-color">Design quality</span>
                                    </div>
                                </div>
                                <h5>“Their services aren’t cookie-cutter and are truly specific to us.”</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aaron Beck</span>
                                    <div className="stars ml-auto">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>

        <section className="blog-sa">
            <div className="container section-padding">
                <div className="sec-head mb-100">
                    <div className="row">
                        <div className="col-lg-4">
                            <h6 className="sub-head">Latest Articles</h6>
                        </div>
                        <div className="col-lg-8">
                            <h3 className="text-indent">The place that we share everything related to design trends,
                                tips and more.
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="item md-mb50">
                            <div className="img fit-img">
                                <Image src="assets/imgs/blog/1.jpg" alt="" />
                            </div>
                            <div className="cont mt-30">
                                <h6>
                                    <Link href="../inner_pages/blog-details.html">How to Create a Brand Identity for Your Business <br /> using AI?</Link>
                                </h6>
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
                            <div className="img fit-img">
                                <Image src="assets/imgs/blog/2.jpg" alt="" />
                            </div>
                            <div className="cont mt-30">
                                <h6>
                                    <Link href="../inner_pages/blog-details.html">Common UX painpoints in Dashboard-related <br /> projects</Link>
                                </h6>
                                <div className="info d-flex align-items-center mt-20">
                                    <Link href="#0" className="tag">
                                        <span>Experience</span>
                                    </Link>
                                    <Link href="#0" className="date">
                                        <span>/ May 15, 2024</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
