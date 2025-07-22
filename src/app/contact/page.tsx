import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <header className="contact-hed section-padding pb-0">
                <div className="container">
                    <div className="caption mb-80 text-center">
                        <h1>Get In Touch</h1>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="google-map">
                        <iframe id="gmap_canvas"
                            src="https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed">
                        </iframe>
                    </div>
                </div>
            </header>

            <section className="contact-pg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 valign">
                            <div className="full-width md-mb80">
                                <div className="sec-head md-mb80">
                                    <h2 className="text-u">
                                        Lets make your <br /> brand <span className="fw-200">
                                            brilliant!</span>
                                    </h2>
                                    <p className="mt-20 mb-20">If you would like to work with us or just want to get in
                                        touch, we would love to hear from you!</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="morinfo mt-30">
                                                <h6 className="mb-15">Address</h6>
                                                <p>Surrey, BC, Canada</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="morinfo mt-30">
                                                <h6 className="mb-15">Email</h6>
                                                <p>info@promoyourbiz.ca</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="phone fz-30 fw-600 mt-30 underline main-color">
                                        <Link href="#0">+1-877-246-0914</Link>
                                    </div>
                                </div>
                                <ul className="rest social-text d-flex mt-60 fz-16">
                                    <li className="mr-30">
                                        <Link href="#0" className="hover-this"><span className="hover-anim">Facebook</span></Link>
                                    </li>
                                    <li className="mr-30">
                                        <Link href="#0" className="hover-this"><span className="hover-anim">Twitter</span></Link>
                                    </li>
                                    <li className="mr-30">
                                        <Link href="#0" className="hover-this"><span className="hover-anim">LinkedIn</span></Link>
                                    </li>
                                    <li>
                                        <Link href="#0" className="hover-this"><span
                                                className="hover-anim">Instagram</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1 valign">
                            <div className="full-width">
                                <div className="sec-head mb-50">
                                    <h6 className="sub-head">Send a <span className="fw-200">message</span></h6>
                                </div>
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
                                                        <span>Lets Talking</span>
                                                        <span className="icon ml-10">
                                                            <Image src="../common/imgs/icons/arrow-top-right.svg"
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