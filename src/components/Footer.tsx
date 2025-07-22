'use client';

export default function Footer() {
  return (
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
                        <h3 className="text-indent">Empowering brands and simplifying digital experiences through strategic design, clean code, and smart marketing.
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
  );
}