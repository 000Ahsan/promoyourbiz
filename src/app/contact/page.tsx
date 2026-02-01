import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <header className="about-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80">
                        <h1>Let’s Build Something That Works!</h1>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text mt-30">
                                    <h6>Tell us about your business, your goals, and the challenges you're facing. We partner with businesses to create digital experiences that don't just look good — they're built to perform, scale, and drive real results.</h6>
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
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                                <div className="item">
                                    <h2><span>Contact Us</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div>
                        <iframe id="gmap_canvas" className="radius-15" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167148.98204710177!2d-122.96584527357693!3d49.11128540742465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dc034d3fa75b%3A0xd28b4898abd598e0!2sSurrey%2C%20BC%2C%20Canada!5e0!3m2!1sen!2s!4v1769959082700!5m2!1sen!2s" width="100%" height="550" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </header>

            <section className="contact-pg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 valign">
                            <div className="full-width md-mb80">
                                <div className="sec-head md-mb80">
                                    <h2>
                                        Lets make your brand brilliant!
                                    </h2>
                                    <h6 className="mt-20 mb-20">Whether you're ready to start or simply curious, we'd love to hear about your project.</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="full-width mt-50">
                                <form id="contact-form" method="post" action="contact.php">

                                    <div className="messages"></div>

                                    <div className="controls row">

                                        <div className="col-lg-6">
                                            <div className="form-group mb-30">
                                                <input id="form_name" type="text" name="name" placeholder="Name"
                                                    required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group mb-30">
                                                <input id="form_email" type="email" name="email" placeholder="Email"
                                                    required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group mb-30">
                                                <input id="form_subject" type="text" name="subject"
                                                    placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea id="form_message" name="message" placeholder="Message"
                                                    rows={4} required></textarea>
                                            </div>
                                            <div className="mt-30">
                                                <button type="submit" className="butn butn-md butn-bord butn-rounded">
                                                    <div className="d-flex align-items-center">
                                                        <span>Send Message</span>
                                                        <span className="icon ml-10">
                                                            <img src="../common/imgs/icons/arrow-top-right.svg"
                                                                alt="" />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}