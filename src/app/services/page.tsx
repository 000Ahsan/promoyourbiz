import Services from "@/components/Services";

export default function ServicesPage() {
    return (
        <main>

            <header className="about-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80">
                        <h1>We're creative designers, skilled developers, and growth-driven marketers focused on building digital experiences that perform.</h1>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text mt-30">
                                    <h6>Every project starts with understanding your brand's identity and business goals. From design to development to growth strategy, we create websites, applications, and digital solutions that are built to stand out, scale, and drive real results.</h6>
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
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Services</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Services showLearnMoreButton={false} />

            <section className="intro-cst section-padding">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-3 text-center">
                            <img src="/assets/imgs/promoyourbiz-icon-yellow.png" alt="" />
                        </div>
                        <div className="col-lg-9">
                            <div className="text mb-80">
                                <h5>We are a team of passionate and crazy individuals dedicated to bringing your
                                    ideas to life. With a keen eye for aesthetics, attention to detail, and a deep
                                    understanding of design principles, we strive to deliver exceptional results
                                    that exceed your expectations.</h5>
                            </div>
                            <div className="states">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="item sm-mb30">
                                            <span>Established for</span>
                                            <div className="d-flex align-items-end">
                                                <h2>07</h2>
                                                <span className="spn-botm">Years</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="item sm-mb30">
                                            <span>Work Across</span>
                                            <div className="d-flex align-items-end">
                                                <h2>04</h2>
                                                <span className="spn-botm">Domains</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="item">
                                            <span>Over</span>
                                            <div className="d-flex align-items-end">
                                                <h2>80</h2>
                                                <span className="spn-botm">Projects</span>
                                            </div>
                                        </div>
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