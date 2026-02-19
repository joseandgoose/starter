import Link from "next/link";

const posts = [
  {
    slug: "gemini-grades",
    title: "Gemini Grades the Website Build Difficulty",
    subtitle: "Google\u2019s AI evaluates how hard it actually was to build joseandgoose.com from scratch",
    date: "February 17, 2026",
    readTime: "4 min read",
  },
  {
    slug: "how-i-built-this",
    title: "How I Built JoseAndGoose.com Using Claude",
    subtitle: "A non-developer builds a website from scratch with AI in three sessions",
    date: "February 17, 2026",
    readTime: "6 min read",
  },
];

export default function Writing() {
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
            <li><a href="/numerator" style={{background:'#F3D104',color:'#0a0a0f',padding:'6px 10px',borderRadius:'5px',fontWeight:700,fontSize:'8px',letterSpacing:'1.2px',textTransform:'uppercase',textAlign:'center',display:'inline-flex',alignItems:'center',justifyContent:'center',whiteSpace:'nowrap',lineHeight:1,textDecoration:'none',transition:'transform 0.15s, box-shadow 0.15s'}}>Play Numerator</a></li>
          </ul>
        </div>
      </header>

      {/* ── PAGE TITLE BLOCK ── */}
      <div className="page-header">
        <h1>Writing</h1>
        <p className="tagline">Ideas at the intersection of product, strategy, and building things</p>
      </div>

      {/* ── POST LIST ── */}
      <section className="writing-list">
        {posts.map((post) => (
          <Link href={`/writing/${post.slug}`} key={post.slug} className="writing-card">
            <div className="writing-card-meta">
              <span className="writing-card-date">{post.date}</span>
              <span className="writing-card-dot">·</span>
              <span className="writing-card-read">{post.readTime}</span>
            </div>
            <h2 className="writing-card-title">{post.title}</h2>
            <p className="writing-card-subtitle">{post.subtitle}</p>
            <span className="writing-card-link">Read post →</span>
          </Link>
        ))}
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <span className="footer-name">Jose and Goose</span>
        <span className="footer-note">&copy; 2026 &nbsp;&middot;&nbsp; Made with intention</span>
      </footer>
    </>
  );
}
