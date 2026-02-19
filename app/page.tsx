export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <header>
        <div className="nav-wrap">
          <a href="#" className="site-name">Jose and Goose</a>
          <ul className="nav-links">
            <li><a href="/about">About</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/writing">Writing</a></li>
            <li><a href="/contact">Contact</a></li>         
            <li><a href="/numerator" style={{background:'#F3D104',color:'#0a0a0f',padding:'6px 10px',borderRadius:'5px',fontWeight:700,fontSize:'11px',letterSpacing:'1.2px',textTransform:'uppercase',textAlign:'center',display:'inline-flex',alignItems:'center',justifyContent:'center',whiteSpace:'nowrap',lineHeight:1,textDecoration:'none',transition:'transform 0.15s, box-shadow 0.15s'}}>Play Numerator</a></li>
             </ul>
        </div>
      </header>

      {/* ── PAGE TITLE BLOCK ── */}
      <div className="page-header" id="about">
        <h1>Jose is the human</h1>
        <p className="tagline">And Goose is the schnauz</p>
      </div>

      {/* ── JUMP BAR ── */}
      <nav className="jump-bar">
        <div className="jump-inner">
          <span className="jump-label">Jump to</span>
          <a href="/about">Who We Are</a>
          <a href="/work">Our Work</a>
          <a href="/writing">Writing</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      {/* ── HERO BANNER ── */}
      <section className="hero">

        {/* LEFT: green text panel */}
        <div className="hero-text">
          <p className="hero-eyebrow">Product &amp; Strategy</p>
          <h2 className="hero-title">
            finance background, product focus<br />
            <em>using AI to build</em><br />
          
          </h2>
          <p className="hero-body">
            Rooted in curiosity, shaped by exploration.
          </p>
          <a href="/work" className="hero-cta">Explore Our Work</a>
        </div>

        {/* RIGHT: image panel — replace placeholder with your photo */}
        <div className="hero-img">
          <img src="/hero.jpeg" alt="Jose and Goose" />
        </div>
      </section>

      {/* ── FOUR TILES ── */}
      <section className="tiles" id="work">
        <div className="tiles-grid">

          {/* Tile 1 — swap vis-dark with your image */}
          <article className="tile">
            <div className="tile-visual"><img src="/title1.jpg" alt="Product Design" /></div>
            <p className="tile-category">Experience</p>
            <h3 className="tile-name">Education, Finance, Strategy, and Product</h3>
            <p className="tile-desc">Range of experiences and learning.</p>
            <div className="tile-actions">
              <a href="/work" className="btn btn-outline">Experience</a>
            </div>
          </article>

          {/* Tile 2 */}
          <article className="tile">
            <div className="tile-visual"><img src="/title2.jpg" alt="Writing" /></div>
            <p className="tile-category">Writing</p>
            <h3 className="tile-name">Projects and Research</h3>
            <p className="tile-desc">See what we're working on!</p>
            <div className="tile-actions">
              <a href="/writing" className="btn btn-fill">Read Essays</a>
              {/* <a href="#" className="btn btn-outline">Subscribe</a> */}
            </div>
          </article>

          {/* Tile 3 */}
          <article className="tile">
            <div className="tile-visual"><img src="/title3.jpg" alt="Talks" /></div>
            <p className="tile-category">Get in touch</p>
            <h3 className="tile-name">Contact</h3>
            <p className="tile-desc">What questions do you have?</p>
            <div className="tile-actions">
              <a href="/contact" className="btn btn-outline">Contact</a>
            </div>
          </article>

          {/* Tile 4 */}
          <article className="tile">
            <div className="tile-visual"><img src="/title4.jpg" alt="About" /></div>
            <p className="tile-category">About</p>
            <h3 className="tile-name">Who We Are</h3>
            <p className="tile-desc">Where we started.</p>
            <div className="tile-actions">
              <a href="/about" className="btn btn-fill">Our Story</a>
            </div>
          </article>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="footer">
        <span className="footer-name">Jose and Goose</span>
        <span className="footer-note">&copy; 2026 &nbsp;&middot;&nbsp; Made with intention</span>
      </footer>
    </>
  );
}