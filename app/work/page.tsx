export default function Work() {
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
        <h1>Work</h1>
        <p className="tagline">Coverage, press, and references across my career</p>
      </div>

      {/* ── JUMP BAR ── */}
      <nav className="jump-bar">
        <div className="jump-inner">
          <span className="jump-label">Jump to</span>
          <a href="#pet-space">Pet Space</a>
          <a href="#doordash">DoorDash</a>
          <a href="#instacart">Instacart</a>
          <a href="#goldman">Goldman Sachs</a>
          <a href="#tfa">Teach for America</a>
        </div>
      </nav>

      {/* ── PRESS SECTIONS ── */}
      <main className="press-main">

        {/* PET SPACE */}
        <section className="press-group" id="pet-space">
          <div className="press-group-header">
            <p className="press-group-eyebrow">Current Work</p>
            <h2 className="press-group-title">Pet Space</h2>
            <p className="press-group-desc">
              Building DTC products and brands in the pet wellness space.
            </p>
          </div>
          <div className="press-list">
            <a href="https://alpineinvestors.com/update/antelope-acquires-bocces-bakery/" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">Alpine Investors</span>
                <span className="press-dot">·</span>
                <span className="press-date">2023</span>
              </div>
              <h3 className="press-title">Antelope Acquires Bocce's Bakery</h3>
              <p className="press-desc">Antelope expands its pet wellness portfolio with the acquisition of Bocce's Bakery, a leading natural pet treat brand.</p>
              <span className="press-link">Read article →</span>
            </a>
            <a href="https://www.prnewswire.com/news-releases/antelope-announces-exciting-acquisition-of-my-perfect-pet-to-further-expand-suite-of-pet-wellness-offerings-302001404.html" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">PR Newswire</span>
                <span className="press-dot">·</span>
                <span className="press-date">2024</span>
              </div>
              <h3 className="press-title">Antelope Acquires My Perfect Pet</h3>
              <p className="press-desc">Antelope announces the acquisition of My Perfect Pet, further expanding its suite of pet wellness offerings.</p>
              <span className="press-link">Read article →</span>
            </a>
            <a href="https://www.aol.com/pet-parents-rushing-costco-hands-191000001.html" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">AOL / HuffPost</span>
                <span className="press-dot">·</span>
                <span className="press-date">2024</span>
              </div>
              <h3 className="press-title">Pet Parents Are Rushing to Costco to Get Their Hands On This</h3>
              <p className="press-desc">Coverage of pet food products gaining traction with mainstream consumers through retail channels.</p>
              <span className="press-link">Read article →</span>
            </a>
          </div>
        </section>

        <div className="press-divider" />

        {/* DOORDASH */}
        <section className="press-group" id="doordash">
          <div className="press-group-header">
            <p className="press-group-eyebrow">Strategy & Operations</p>
            <h2 className="press-group-title">DoorDash</h2>
            <p className="press-group-desc">
              Led strategy and operations initiatives across delivery and grocery expansion.
            </p>
          </div>
          <div className="press-list">
            <a href="https://www.theverge.com/2020/8/20/21376552/doordash-grocery-delivery-amazon-instacart-compete-launch-california-midwest" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">The Verge</span>
                <span className="press-dot">·</span>
                <span className="press-date">Aug 2020</span>
              </div>
              <h3 className="press-title">DoorDash Launches Grocery Delivery to Compete with Instacart and Amazon</h3>
              <p className="press-desc">DoorDash expands into grocery delivery, launching across California and the Midwest in a direct challenge to Instacart and Amazon Fresh.</p>
              <span className="press-link">Read article →</span>
            </a>
            <a href="https://www.reddit.com/r/doordash_drivers/comments/wi4j3o/priority_for_shop_and_deliver_orders_should_i_opt/" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">Reddit — r/doordash_drivers</span>
                <span className="press-dot">·</span>
                <span className="press-date">2022</span>
              </div>
              <h3 className="press-title">Priority for Shop & Deliver Orders</h3>
              <p className="press-desc">Community discussion around the Shop & Deliver product feature and driver prioritization — a product area I worked on directly.</p>
              <span className="press-link">Read thread →</span>
            </a>
          </div>
        </section>

        <div className="press-divider" />

        {/* INSTACART */}
        <section className="press-group" id="instacart">
          <div className="press-group-header">
            <p className="press-group-eyebrow">Strategy & Operations</p>
            <h2 className="press-group-title">Instacart</h2>
            <p className="press-group-desc">
              Los Angeles market team lead during Instacart's rapid scale-up during the pandemic.
            </p>
          </div>
          <div className="press-list">
            <a href="https://www.bloomberg.com/news/features/2020-05-06/instacart-was-overwhelmed-by-coronavirus-overnight" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">Bloomberg</span>
                <span className="press-dot">·</span>
                <span className="press-date">May 2020</span>
              </div>
              <h3 className="press-title">Instacart Was Overwhelmed by Coronavirus Overnight</h3>
              <p className="press-desc">An inside look at how Instacart scrambled to handle a massive surge in demand as the pandemic transformed grocery shopping overnight.</p>
              <span className="press-link">Read article →</span>
            </a>
          </div>
        </section>

        <div className="press-divider" />

        {/* GOLDMAN SACHS */}
        <section className="press-group" id="goldman">
          <div className="press-group-header">
            <p className="press-group-eyebrow">Capital Markets</p>
            <h2 className="press-group-title">Goldman Sachs</h2>
            <p className="press-group-desc">
              Worked on the trading floor on capital markets transactions across Latin America.
            </p>
          </div>
          <div className="press-list">
            <a href="https://www.reuters.com/article/world/americas/colombian-banking-group-grupo-aval-raises-126-billion-at-ipo-idUSKCN0HI1W7/" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">Reuters</span>
                <span className="press-dot">·</span>
                <span className="press-date">2014</span>
              </div>
              <h3 className="press-title">Colombian Banking Group Grupo Aval Raises $1.26 Billion at IPO</h3>
              <p className="press-desc">Goldman Sachs co-underwrote the IPO of Grupo Aval, Colombia's largest banking group, in one of the largest Latin American capital markets transactions of the year.</p>
              <span className="press-link">Read article →</span>
            </a>
            <a href="https://www.prnewswire.com/news-releases/banco-macro-sa-announces-primary-follow-on-offering-300464802.html" target="_blank" rel="noopener noreferrer" className="press-item">
              <div className="press-item-meta">
                <span className="press-source">PR Newswire</span>
                <span className="press-dot">·</span>
                <span className="press-date">2017</span>
              </div>
              <h3 className="press-title">Banco Macro S.A. Announces Primary Follow-On Offering</h3>
              <p className="press-desc">Goldman Sachs acted as underwriter on Banco Macro's follow-on equity offering, one of Argentina's largest banking transactions.</p>
              <span className="press-link">Read article →</span>
            </a>
          </div>
        </section>

        <div className="press-divider" />

        {/* TEACH FOR AMERICA */}
        <section className="press-group" id="tfa">
          <div className="press-group-header">
            <p className="press-group-eyebrow">Education</p>
            <h2 className="press-group-title">Teach for America</h2>
            <p className="press-group-desc">
              Taught 6th grade as part of Teach for America's mission to expand educational opportunity.
            </p>
          </div>
          <div className="press-list">
            <a href="https://www.flickr.com/photos/95768996@N02/14064610231/in/photostream/" target="_blank" rel="noopener noreferrer" className="press-item">
                <div className="press-item-meta">
                    <span className="press-source">Flickr</span>
                    <span className="press-dot">·</span>
                    <span className="press-date">2014</span>
                </div>
                <h3 className="press-title">Selected Speaker at the 2014 TFA Gala</h3>
                <p className="press-desc">Honored to speak at the 2014 Teach for America Gala, celebrating the work of educators and advocates committed to expanding educational opportunity.</p>
                <span className="press-link">View photo →</span>
            </a>
           </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer>
        <span className="footer-name">Jose and Goose</span>
        <span className="footer-note">&copy; 2026 &nbsp;&middot;&nbsp; Made with intention</span>
      </footer>
    </>
  );
}