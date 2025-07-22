'use client';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">

            <a className="logo w-[150px]" href="/">
                <img src="assets/imgs/Logo-light.svg" alt="logo" />
            </a>

            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Portfolio</a>
                    </li>
                </ul>
            </div>
            <div className="topnav d-flex align-items-center">
                <a href="/contact" className="butn butn-rounded">
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
  );
}