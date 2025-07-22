'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">

            <Link className="logo w-[150px]" href="/">
                <Image src="assets/imgs/Logo-light.svg" alt="logo" />
            </Link>

            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className="topnav d-flex align-items-center">
                <Link href="/contact" className="butn butn-rounded">
                    <div className="d-flex align-items-center">
                        <span>Start Project</span>
                        <span className="icon ml-10">
                            <Image src="../common/imgs/icons/arrow-top-right.svg" alt="" />
                        </span>
                    </div>
                </Link>
                <div className="menu-icon cursor-pointer">
                    <span className="icon ti-align-right"></span>
                </div>
            </div>
        </div>
    </nav>
  );
}