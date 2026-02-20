import Link from "next/link";

const posts = [
    {
    slug: "how-i-built-numerator",
    title: "How I Built Numerator Using Claude",
    subtitle: "A non-developer builds a full-stack web game from concept to deployment in four sessions",
    date: "February 19, 2026",
    readTime: "8 min read",
  },
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
