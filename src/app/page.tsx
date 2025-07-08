export default function Home() {
  return (
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

        <nav className="navbar navbar-expand-lg">
            <div className="container">

                <a className="logo w-[150px]" href="#">
                    <img src="assets/imgs/Logo-light.svg" alt="logo" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../inner_pages/about.html">Studio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../inner_pages/portfolio-cards.html">Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../inner_pages/blog-grid.html">News</a>
                        </li>
                    </ul>
                </div>
                <div className="topnav d-flex align-items-center">
                    <a href="../inner_pages/contact.html" className="butn butn-rounded">
                        <div className="d-flex align-items-center">
                            <span>Start Project</span>
                            <span className="icon ml-10">
                                <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                            </span>
                        </div>
                    </a>
                    <div className="menu-icon cursor-pointer">
                        <span className="icon ti-align-right"></span>
                    </div>
                </div>
            </div>
        </nav>

        <div className="hamenu">
            <div className="close-menu cursor-pointer ti-close"></div>
            <div className="container-fluid rest d-flex">
                <div className="menu-links">
                    <ul className="main-menu rest">
                        <li>
                            <div className="o-hidden">
                                <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Home">Home</span>
                                    <i></i></div>
                            </div>
                            <div className="sub-menu">
                                <ul>
                                    <li>
                                        <a href="../startup_agency/index.html" className="sub-link">Startup Agency</a>
                                    </li>
                                    <li>
                                        <a href="../creative-studio/index.html" className="sub-link">Creative Studio</a>
                                    </li>
                                    <li>
                                        <a href="../creative_agency/index.html" className="sub-link">Creative Agency</a>
                                    </li>
                                    <li>
                                        <a href="../digital-marketing/index.html" className="sub-link">Digital Marketing</a>
                                    </li>
                                    <li>
                                        <a href="../modern_portfolio/index.html" className="sub-link">Modern Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="../digital_studio/index.html" className="sub-link">Digital Studio</a>
                                    </li>
                                    <li>
                                        <a href="../modern_agency/index.html" className="sub-link">Modern Agency</a>
                                    </li>
                                    <li>
                                        <a href="../creative_agency2/index.html" className="sub-link">Creative Agency 2</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="About Us">About Us</span>
                                    <i></i></div>
                            </div>
                            <div className="sub-menu">
                                <ul>
                                    <li>
                                        <a href="../inner_pages/about.html" className="sub-link">About Us</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/services.html" className="sub-link">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/service-details.html" className="sub-link">Services Details</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/team.html" className="sub-link">Our Team</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/pricing.html" className="sub-link">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/faqs.html" className="sub-link">FAQS</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/contact.html" className="sub-link">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Portfolio">Portfolio</span>
                                    <i></i></div>
                            </div>
                            <div className="sub-menu">
                                <ul>
                                    <li>
                                        <a href="../inner_pages/portfolio-standard.html" className="sub-link">Standard</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/portfolio-gallery.html" className="sub-link">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/portfolio-cards.html" className="sub-link">Card</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/portfolio-layout2.html" className="sub-link">Grid 2 Column</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/portfolio-layout3.html" className="sub-link">Gid 3 Column</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/portfolio-layout4.html" className="sub-link">Grid 4 Column</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/project-details.html" className="sub-link">Project Details</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <div className="link cursor-pointer dmenu"><span className="fill-text" data-text="Blogs">Blogs</span>
                                    <i></i></div>
                            </div>
                            <div className="sub-menu">
                                <ul>
                                    <li>
                                        <a href="../inner_pages/blog-grid.html" className="sub-link">Blog Grid</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/blog-standard.html" className="sub-link">Blog Standard</a>
                                    </li>
                                    <li>
                                        <a href="../inner_pages/blog-details.html" className="sub-link">Blog Details</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <a href="../inner_pages/contact.html" className="link"><span className="fill-text"
                                        data-text="Contact Us">Contact Us</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="cont-info valign">
                    <div className="text-center full-width">
                        <div className="logo">
                            <img src="assets/imgs/Logo-light.svg" alt="" />
                        </div>
                        <div className="social-icon mt-40">
                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                            <a href="#"> <i className="fab fa-x-twitter"></i> </a>
                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                        </div>
                        <div className="item mt-30">
                            <h5>Surrey, British Columbia, CA</h5>
                        </div>
                        <div className="item mt-10">
                            <h5><a href="#0">info@promoyourbiz.ca</a></h5>
                            <h5 className="underline"><a href="#0">+1 840 841 25 69</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="smooth-wrapper">
            <div id="smooth-content">
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
                                                    <img src="assets/imgs/header/circle-badge.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="img fit-img radius-30 mt-50">
                                                <img src="assets/imgs/header/1.jpg" alt="" />
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
                                <img src="assets/imgs/header/2.jpg" alt="" />
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
                                        <a href="../inner_pages/about.html" className="crv-butn mt-40">
                                            <div className="d-flex">
                                                <span className="text">More About Us</span>
                                                <span className="icon">
                                                    <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                                </span>
                                            </div>
                                        </a>
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
                                        <img src="assets/imgs/brands/1.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/2.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/3.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/4.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/5.svg" alt="" />
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="item">
                                        <img src="assets/imgs/brands/1.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/2.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/3.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/4.svg" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="assets/imgs/brands/5.svg" alt="" />
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
                                            <img src="assets/imgs/works/2.jpg" alt="" />
                                            <div className="tags">
                                                <a href="#0">Website</a>
                                                <a href="#0">UI/UX</a>
                                                <a href="#0">illustration</a>
                                            </div>
                                        </div>
                                        <div className="cont mt-30">
                                            <div className="info sub-color mb-10">
                                                <span>2024</span>
                                                <span className="dot"></span>
                                                <span>WordPress</span>
                                            </div>
                                            <h6>
                                                <a href="../inner_pages/project-details.html">Smart Choice Builders</a>
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
                                            <img src="assets/imgs/works/1.jpg" alt="" />
                                            <div className="tags">
                                                <a href="#0">Development</a>
                                                <a href="#0">UI/UX</a>
                                                <a href="#0">illustration</a>
                                            </div>
                                        </div>
                                        <div className="cont mt-30">
                                            <div className="info sub-color mb-10">
                                                <span>2023</span>
                                                <span className="dot"></span>
                                                <span>WordPress</span>
                                            </div>
                                            <h6>
                                                <a href="../inner_pages/project-details.html">Metro Contracting Ltd.</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="items col-lg-6 order-md-2">
                                    <div className="item">
                                        <div className="img">
                                            <img src="assets/imgs/works/3.jpg" alt="" />
                                            <div className="tags">
                                                <a href="#0">Development</a>
                                                <a href="#0">UI/UX</a>
                                                <a href="#0">illustration</a>
                                            </div>
                                        </div>
                                        <div className="cont mt-30">
                                            <div className="info sub-color mb-10">
                                                <span>2023</span>
                                                <span className="dot"></span>
                                                <span>WordPress</span>
                                            </div>
                                            <h6>
                                                <a href="../inner_pages/project-details.html">313 Consultancy</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="items col-lg-6 order-md-2">
                                    <div className="item">
                                        <div className="img">
                                            <img src="assets/imgs/works/4.jpg" alt="" />
                                            <div className="tags">
                                                <a href="#0">Development</a>
                                                <a href="#0">UI/UX</a>
                                                <a href="#0">illustration</a>
                                            </div>
                                        </div>
                                        <div className="cont mt-30">
                                            <div className="info sub-color mb-10">
                                                <span>2023</span>
                                                <span className="dot"></span>
                                                <span>WordPress</span>
                                            </div>
                                            <h6>
                                                <a href="../inner_pages/project-details.html">South Ridge Disposal Ltd</a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="items col-lg-6 order-md-2">
                                    <a href="../inner_pages/portfolio-gallery.html" className="crv-butn mt-100">
                                        <div className="d-flex">
                                            <span className="text">View all Projects</span>
                                            <span className="icon">
                                                <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                            </span>
                                        </div>
                                    </a>
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
                                            <a href="../inner_pages/services.html" className="crv-butn mt-40">
                                                <div className="d-flex">
                                                    <span className="text">Learn More</span>
                                                    <span className="icon">
                                                        <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                                    </span>
                                                </div>
                                            </a>
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
                                                        <img src="../common/imgs/icons/crown-solid.svg" alt="" />
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
                                                        <img src="../common/imgs/icons/bezier-curve-solid.svg" alt="" />
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
                                                        <img src="../common/imgs/icons/code-solid.svg" alt="" />
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
                                                        <img src="../common/imgs/icons/chart-line-solid.svg" alt="" />
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
                                            <img src="assets/imgs/testim/avatar1.jpg" alt="" />
                                        </div>
                                        <a href="#0" className="icon">
                                            <img src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                                        </a>
                                    </div>
                                    <h3 className="mb-15">7k+ Clients</h3>
                                    <p>Approaches are prominently featured on many architect websites.</p>
                                </div>
                                <div className="play-button">
                                    <a href="https://youtu.be/AzwC6umvd1s" className="vid">
                                        <i className="fas fa-play"></i>
                                    </a>
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
                                                        <img src="assets/imgs/testim/avatar1.jpg" alt="" />
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
                                                        <img src="assets/imgs/testim/avatar2.jpg" alt="" />
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
                                                        <img src="assets/imgs/testim/avatar3.jpg" alt="" />
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
                                                        <img src="assets/imgs/testim/avatar4.jpg" alt="" />
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
                                                        <img src="assets/imgs/testim/avatar3.jpg" alt="" />
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
                                            <img src="assets/imgs/blog/1.jpg" alt="" />
                                        </div>
                                        <div className="cont mt-30">
                                            <h6>
                                                <a href="../inner_pages/blog-details.html">How to Create a Brand Identity for Your Business <br /> using AI?</a>
                                            </h6>
                                            <div className="info d-flex align-items-center mt-20">
                                                <a href="#0" className="tag">
                                                    <span>Design Trends</span>
                                                </a>
                                                <a href="#0" className="date">
                                                    <span>/ May 15, 2024</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item">
                                        <div className="img fit-img">
                                            <img src="assets/imgs/blog/2.jpg" alt="" />
                                        </div>
                                        <div className="cont mt-30">
                                            <h6>
                                                <a href="../inner_pages/blog-details.html">Common UX painpoints in Dashboard-related <br /> projects</a>
                                            </h6>
                                            <div className="info d-flex align-items-center mt-20">
                                                <a href="#0" className="tag">
                                                    <span>Experience</span>
                                                </a>
                                                <a href="#0" className="date">
                                                    <span>/ May 15, 2024</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="footer-sa pb-80">
                    <div className="container section-padding">
                        <div className="sec-head mb-80">
                            <div className="row">
                                <div className="col-lg-5">
                                    <a href="#" className="logo md-mb80">
                                        <img src="assets/imgs/Logo-light.svg" alt="" />
                                    </a>
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="text-indent">We hope to empower user and simplify their everyday lives.
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
                                        <a href="#0">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="#0">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a href="#0">
                                            <i className="fa-brands fa-dribbble"></i>
                                        </a>
                                        <a href="#0">
                                            <i className="fa-brands fa-behance"></i>
                                        </a>
                                        <a href="#0">
                                            <i className="fa-brands fa-github"></i>
                                        </a>
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
                                        <p>© 2025-26 <a href="#0">Promo Your Biz</a>. All Right Reserved</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end">
                                    <div className="links sub-color d-flex justify-content-between">
                                        <a href="#" className="active">Home</a>
                                        <a href="../inner_pages/portfolio-standard.html">Works</a>
                                        <a href="../inner_pages/about.html">Studio</a>
                                        <a href="../inner_pages/blog-standard.html">News</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  );
}
