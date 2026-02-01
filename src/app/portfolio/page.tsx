import Testimonials from "@/components/Testimonials";
import portfolioData from "@/data/portfolio";
import Link from "next/link";

export default function Portfolio() {
    return (
        <main>
            <header className="about-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80">
                        <h1>This is where strategy meets execution.</h1>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text mt-30">
                                    <h6>Each project you see here reflects our approach: strong branding, clean design, solid development, and growth-driven thinking. We partner with businesses to create digital experiences that aren't just visually impressive, but built to perform, scale, and deliver measurable impact.</h6>
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
                        {portfolioData.map((item, index) => (
                            <div className="col-lg-4 items" key={index}>
                                <div className="item">
                                    <div className="cont d-flex gap-5 align-items-center">
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="ml-auto">
                                            <Link href={item.link}>
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        {item.tags.map((tag, index) => (
                                            <span className="text-sm rounded-full px-3 py-1 bg-main text-dark" key={index}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Testimonials />
        </main>
    );
}