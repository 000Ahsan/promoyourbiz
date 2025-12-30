import Link from "next/link";

export default function About() {
    return (
        <main>
            <header className="serv-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80">
                        <h1 className="sec-head"><span className="sub-head mr-30">Our Portfolio</span> Transformations That Speak Volumes</h1>
                        <div className="row justify-content-end">
                            <div className="col-lg-5">
                                <div className="text mt-30">
                                    Explore case studies showcasing how we turned brand stories into high-performing websites.
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
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Portfolio</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="works-mp section-padding pt-0">
                <div className="container">
                    <div className="row md-marg gallery">
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>Pacific Stairs & Railings</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="https://pacific-stairs.sayanisbiz.com/">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>Smart Choice Builders</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="https://smartchoicebuilders.ca/">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>313 Consultancy</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="https://313consultancy.org/">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>South Ridge Disposal Ltd.</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="https://southridgedisposal.com/">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>Vernon Stucco & Plaster Ltd.</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="#0">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 items">
                            <div className="item">
                                <div className="cont d-flex align-items-center">
                                    <div>
                                        <h5>PQ Management</h5>
                                        <span>Website</span>
                                    </div>
                                    <div className="ml-auto">
                                        <Link href="https://pqmgmt.com/">
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src="/assets/imgs/works/6.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}