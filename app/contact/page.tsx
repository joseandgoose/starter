export default function Contact() {
  return (
    <>

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