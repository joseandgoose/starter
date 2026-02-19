export default function Contact() {
  return (
    <>
      {/* ── NAV ── */}
      <header>
        <div className="nav-wrap">
          <a href="/" className="site-name">Jose and Goose</a>
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
      <div className="page-header">
        <h1>Contact</h1>
        <p className="tagline">Get in touch</p>
      </div>

      {/* ── CONTACT SECTION ── */}
<section className="contact-section">
  <div className="contact-form-wrap">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSe7T6jt5oPR4SUB8LttjUgMbfuKIsKvR3mSgd3We_Pps62OsQ/viewform?embedded=true"
      width="100%"
      height="752"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
  </div>
</section>

      {/* ── FOOTER ── */}
      <footer>
        <span className="footer-name">Jose and Goose</span>
        <span className="footer-note">&copy; 2026 &nbsp;&middot;&nbsp; Made with intention</span>
      </footer>
    </>
  );
}