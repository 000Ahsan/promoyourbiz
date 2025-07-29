import Link from "next/link";

export default function About() {
    return (
        <main>
            <header className="work-hed">
                <div className="container section-padding">
                    <div className="caption text-center">
                        <h1>What We Delivered!</h1>
                        <div className="path mt-15">
                            <span>
                                <Link href="#">Home</Link>
                            </span>
                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                            <span className="main-color">Portfolio</span>
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