'use client';

export default function Testimonials() {
    return (
        <section className="testimonials-dm section-padding pb-0">
            <div className="container">
                <div className="sec-head mb-30">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="mb-40">What clients say?</h2>
                            <h6>
                                We have got a Proven Formula for Success! Because we don't just build websites, we build businesses.
                            </h6>
                        </div>
                        <div className="col-lg-12">
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
                            <div className="item h-100 d-flex flex-column">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <img src="/assets/imgs/testim/avatar4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h5 className="flex-grow-1">Working with this team transformed our online presence. Their process unveiled our true voice, and our site now speaks directly to our ideal clients</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Sam Smith, Founder of HotSpot Cafe</span>
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
                            <div className="item h-100 d-flex flex-column">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <img src="/assets/imgs/testim/avatar2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h5 className="flex-grow-1">The storytelling framework connected us with customers who share our vision. We have never felt more aligned with our digital identity</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Aron Whites, CEO of Meridian Homes</span>
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
                            <div className="item h-100 d-flex flex-column">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <img src="/assets/imgs/testim/avatar1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h5 className="flex-grow-1">I love the way they approach every project with a focus on understanding the client's business goals and objectives.</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Jordan Lee, Founder of EcoBlend</span>
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
                            <div className="item h-100 d-flex flex-column">
                                <div className="d-flex mb-30">
                                    <div className="img">
                                        <div className="fit-img">
                                            <img src="/assets/imgs/testim/avatar3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h5 className="flex-grow-1">The team at Promo Your Biz is exceptional. They took the time to understand our business and delivered a website that exceeded our expectations.</h5>
                                <div className="d-flex mt-30">
                                    <span className="sub-color">Tom Lane, Founder of Lane & Sons</span>
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
    );
}