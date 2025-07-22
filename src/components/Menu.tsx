'use client';

export default function Menu() {
    return (
        <div className="hamenu">
            <div className="close-menu cursor-pointer ti-close"></div>
            <div className="container-fluid rest d-flex">
                <div className="menu-links">
                    <ul className="main-menu rest">
                        <li>
                            <div className="o-hidden">
                                <a href="/" className="link"><span className="fill-text"
                                        data-text="Home">Home</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <a href="/about" className="link"><span className="fill-text"
                                        data-text="About">About</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <a href="/services" className="link"><span className="fill-text"
                                        data-text="Services">Services</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <a href="/portfolio" className="link"><span className="fill-text"
                                        data-text="Portfolio">Portfolio</span></a>
                            </div>
                        </li>
                        <li>
                            <div className="o-hidden">
                                <a href="/contact" className="link"><span className="fill-text"
                                        data-text="Start Project">Start Project</span></a>
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
    );
}