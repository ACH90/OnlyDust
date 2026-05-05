"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header
        className={`navbar-desktop ${hidden ? 'hidden' : 'visible'}`}
      >
        <div className="navbar-logo">
          ONLYDUST
          <div>RECORDS</div>
        </div>

        <nav className="navbar-nav">
          <Link className="navbar-nav-link" href="/">
            Home
          </Link>

          <Link className="navbar-nav-link" href="/releases">
            Releases
          </Link>

          <Link className="navbar-nav-link" href="/artists">
            Artists
          </Link>

          <Link className="navbar-nav-link" href="/about">
            About
          </Link>

          <Link className="navbar-nav-link" href="/contact">
            Contact
          </Link>
        </nav>

        {/* <div>
          <button className="navbar-search-btn">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div> */}
      </header>

      <header className="navbar-mobile-top">

        <div className="navbar-mobile-logo">
          ONLYDUST RECORDS
        </div>

        <button
          onClick={() => setOpen(true)}
          className="navbar-hamburger"
        >
          ☰
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="navbar-mobile-menu">

          <div className="navbar-mobile-menu-logo">
            ONLYDUST<br />RECORDS
          </div>

          <Link onClick={() => setOpen(false)} className="navbar-mobile-link" style={{ '--i': 1 } as React.CSSProperties} href="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} className="navbar-mobile-link" style={{ '--i': 2 } as React.CSSProperties} href="/releases">
            Releases
          </Link>

          <Link onClick={() => setOpen(false)} className="navbar-mobile-link" style={{ '--i': 3 } as React.CSSProperties} href="/artists">
            Artists
          </Link>

          <Link onClick={() => setOpen(false)} className="navbar-mobile-link" style={{ '--i': 4 } as React.CSSProperties} href="/about">
            About
          </Link>

          <Link onClick={() => setOpen(false)} className="navbar-mobile-link" style={{ '--i': 5 } as React.CSSProperties} href="/contact">
            Contact
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="navbar-mobile-close"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}