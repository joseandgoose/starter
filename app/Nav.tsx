"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="nav-wrap">
        <a href="/" className="site-name">Jose and Goose</a>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/writing">Writing</a></li>
          <li><a href="/contact">Contact</a></li>
          <li>
            <a
              href="/numerator"
              style={{
                background: '#F3D104',
                color: '#0a0a0f',
                padding: '6px 10px',
                borderRadius: '5px',
                fontWeight: 700,
                fontSize: '8px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                textAlign: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                textDecoration: 'none',
              }}
            >
              Play Numerator
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li><a href="/about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/work" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="/writing" onClick={() => setMenuOpen(false)}>Writing</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="/numerator"
                className="mobile-play-btn"
                onClick={() => setMenuOpen(false)}
              >
                Play Numerator
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
