'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container">

            <Link className="logo w-[150px]" href="/">
                <img src="/assets/imgs/Logo-light.svg" width={150} height={150} alt="logo" />
            </Link>

            <div className="navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/services' ? 'active' : ''}`} href="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`} href="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className="topnav d-flex align-items-center">
                <Link href="/contact" className="butn butn-rounded">
                    <div className="d-flex align-items-center">
                        <span>Start Project</span>
                        <span className="icon ml-10">
                            <img src="/common/imgs/icons/arrow-top-right.svg" alt="" />
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