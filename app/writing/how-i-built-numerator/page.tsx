export const metadata = {
  title: "How I Built Numerator — Jose and Goose",
  description: "A non-developer builds a full-stack web game with AI in four sessions",
};

export default function HowIBuiltNumerator() {
  return (
    <article className="post">
      <div className="post-back">
        <a href="/writing">← All Writing</a>
      </div>

      <div className="post-meta">
        <span>February 19, 2026</span>
        <span className="post-meta-dot">·</span>
        <span>8 min read</span>
      </div>

      <h1 className="post-title">How I Built Numerator Using Claude</h1>
      <p className="post-subtitle">
        A non-developer builds a full-stack web game from concept to deployment in four sessions
      </p>

      <div className="post-body">

        {/* ── Recipe Card ── */}
        <div className="post-recipe-meta">
          <div className="post-recipe-row">
            <span className="post-recipe-label">Yield</span>
            <span>One live multiplayer web game at{" "}
              <a href="https://www.joseandgoose.com/numerator" target="_blank" rel="noopener noreferrer">joseandgoose.com/numerator</a>
            </span>
          </div>
          <div className="post-recipe-row">
            <span className="post-recipe-label">Difficulty</span>
            <span>Intermediate (first time setting up a database and API routes)</span>
          </div>
          <div className="post-recipe-row">
            <span className="post-recipe-label">Total Cook Time</span>
            <span>~8–10 hours across 4 sessions over 2 days</span>
          </div>
        </div>

        {/* ── Ingredients ── */}
        <h2>Ingredients</h2>
        <ul>
          <li>
            <strong><a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude.ai</a></strong>{" "}
            — AI pair programmer and game designer <em>($200/yr)</em>
          </li>
          <li>
            <strong><a href="https://supabase.com" target="_blank" rel="noopener noreferrer">Supabase</a></strong>{" "}
            — PostgreSQL database for storing every guess globally <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a></strong>{" "}
            — hosting platform and auto-deploy pipeline <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></strong>{" "}
            — code repository, Vercel auto-deploys from it <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a></strong>{" "}
            — the React framework running the site and API routes <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">VS Code</a></strong>{" "}
            — code editor for making changes locally <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js / npm</a></strong>{" "}
            — runs the dev server and manages packages <em>(free)</em>
          </li>
          <li>
            <strong>Terminal</strong>{" "}
            — where you type commands to navigate, install, and deploy <em>(free)</em>
          </li>
          <li>
            <strong><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank" rel="noopener noreferrer">HTML Canvas</a></strong>{" "}
            — renders the shareable result card as a downloadable PNG <em>(free)</em>
          </li>
        </ul>

        {/* ── Session 1 ── */}
        <h2>Session 1: Game Design and Prototype</h2>
        <p className="post-session-meta">Evening, Day 1 — ~3 hours</p>
        <p className="post-pace">
          <em>Pace: Deliberate. Lots of back-and-forth on game logic, then fast execution.</em>
        </p>

        <p>
          The idea started with a game theory puzzle: guess a number between 0 and 100 that
          equals 50% of the average of everyone&apos;s guesses. I described the full concept
          to <strong>Claude</strong> in one message — outcome tiers, streak mechanics,
          a 300-guess cycle, and a shareable result card. Claude asked seven clarifying
          questions before writing a single line of code:
        </p>

        <ul>
          <li>Caught a typo in the spec — I&apos;d written &quot;30% correct answer&quot; instead of 50%, which would have broken the entire game</li>
          <li>Clarified that &quot;in a row&quot; means consecutive perfect matches checked against the <em>new</em> average (which shifts with every guess)</li>
          <li>Confirmed guesses persist across all visitors as a shared global pool, not per session</li>
          <li>Asked whether the &quot;within 5&quot; retry path could lead into the streak win — answer: no, only a first-round perfect match starts the legendary path</li>
        </ul>

        <p>
          Once the spec was locked, <strong>Claude</strong> generated a fully interactive
          React prototype — playable directly in the <strong>browser</strong>. The first version
          had the complete game loop:
        </p>

        <ul>
          <li>Intro screen with participant count and cycle progress indicator</li>
          <li>Number input with a 2.5-second flywheel calculating animation</li>
          <li>Five outcome paths — perfect match, within 5 (3 retries), within 10, far away, and not enough data</li>
          <li>Arcade-style <strong>GAME OVER</strong> screen with &quot;INSERT COIN&quot; blink effect</li>
          <li>Legendary <strong>CHAMPION</strong> win screen with falling sparkle particles for 3 perfect matches in a row</li>
          <li>Canvas-rendered share card (Wordle-style blocks, stats, downloadable PNG via <strong>HTML Canvas</strong>)</li>
        </ul>

        <p>
          Then came the tuning. Over five rounds of feedback I adjusted colors (swapped orange
          to the site&apos;s signature <code style={{
            background: "#F3D104",
            color: "#0a0a0f",
            padding: "2px 6px",
            borderRadius: 3,
            fontWeight: 700,
            fontSize: 12,
          }}>#F3D104</code> in <strong>Claude</strong>), rewrote outcome messages, improved text
          readability against the dark background, and fixed a bug where the correct answer
          wasn&apos;t recalculating between rounds.
        </p>

        <div className="post-tip">
          <span className="post-tip-label">AI tip</span>
          <p>
            Spend the time getting the spec right before any code gets written. <strong>Claude</strong> asked
            seven clarifying questions — one caught a typo (30% vs 50%) that would have broken
            the entire game. A 10-minute conversation saved hours of rework.
          </p>
        </div>

        {/* ── Session 2 ── */}
        <h2>Session 2: Database and Deployment</h2>
        <p className="post-session-meta">Late Night, Day 1 — ~3 hours</p>
        <p className="post-pace">
          <em>Pace: Moderate. Database setup was new territory, but deployment was one click.</em>
        </p>

        <p>
          The prototype worked in the browser, but it needed a real database so guesses would
          persist across all visitors. I chose <strong>Supabase</strong> (PostgreSQL) for the
          free tier and because <strong>Claude</strong> said I&apos;d be able to query player
          behavior data later. The database setup was all done in the <strong>Supabase</strong> dashboard:
        </p>

        <ul>
          <li>Created a free <strong>Supabase</strong> project named <code>numerator</code> — chose a region and set a database password</li>
          <li>Pasted <strong>Claude</strong>&apos;s SQL into the <strong>Supabase</strong> SQL Editor — created two tables (<code>guesses</code> for every guess ever made, <code>cycle_state</code> for tracking the 300-guess rotation)</li>
          <li>The same SQL block created Row Level Security policies (anyone can read and insert, nobody can tamper) and two server-side functions (<code>submit_guess</code> and <code>get_game_state</code>)</li>
          <li>Copied the <strong>Project URL</strong> and <strong>anon public key</strong> from <strong>Supabase</strong> Settings → API</li>
        </ul>

        <p>
          Then came the <strong>Next.js</strong> integration. <strong>Claude</strong> generated
          the project files — a <strong>Supabase</strong> client library, two API routes, and
          the full game component. The standalone version deployed to <strong>Vercel</strong> in
          three steps:
        </p>

        <ul>
          <li>Ran <code>npm install</code> in <strong>Terminal</strong> to install dependencies, then <code>npm run dev</code> to test locally at <code>localhost:3000</code></li>
          <li>Pushed to <strong>GitHub</strong> with <code>git init</code>, <code>git add .</code>, <code>git commit</code>, and <code>git push</code> in <strong>Terminal</strong></li>
          <li>Imported the repo on <strong>Vercel</strong>, added the two <strong>Supabase</strong> environment variables, clicked <strong>Deploy</strong> — live at <code>numerator-three.vercel.app</code> in under a minute</li>
        </ul>

        <div className="post-visual">
          <div className="post-terminal">
            <div className="post-terminal-bar">
              <span className="post-terminal-dot post-terminal-dot--red"></span>
              <span className="post-terminal-dot post-terminal-dot--yellow"></span>
              <span className="post-terminal-dot post-terminal-dot--green"></span>
              <span className="post-terminal-bar-title">Terminal — zsh</span>
            </div>
            <div className="post-terminal-body">
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                numerator % <span className="post-terminal-cmd">git push -u origin main</span>
              </div>
              <div className="post-terminal-dim">Enumerating objects: 15, done.</div>
              <div className="post-terminal-dim">Writing objects: 100% (15/15), done.</div>
              <br />
              <div className="post-terminal-dim">To https://github.com/joseandgoose/numerator.git</div>
              <div className="post-terminal-success"> * [new branch]      main → main</div>
            </div>
          </div>
          <p className="post-visual-caption">
            One push to <strong>GitHub</strong> → <strong>Vercel</strong> auto-deployed → game live in under a minute.
          </p>
        </div>

        <div className="post-tip">
          <span className="post-tip-label">AI tip</span>
          <p>
            <strong>Supabase</strong>&apos;s SQL Editor is your best friend. <strong>Claude</strong> generated
            the entire schema, security policies, and server functions as one SQL block. Paste, run,
            done — no database configuration UI to learn.
          </p>
        </div>

        {/* ── Session 3 ── */}
        <h2>Session 3: Integrating into JoseAndGoose.com</h2>
        <p className="post-session-meta">Day 2 — ~2–3 hours</p>
        <p className="post-pace">
          <em>Pace: Bumpy. A hidden Git issue turned a simple copy into a debugging puzzle.</em>
        </p>

        <p>
          The standalone game worked, but I wanted it at <code>joseandgoose.com/numerator</code>{" "}
          instead of a separate <strong>Vercel</strong> project. Since both are <strong>Next.js</strong> on{" "}
          <strong>Vercel</strong>, the plan was simple: copy the game files into the existing
          site, add environment variables, push. The integration steps:
        </p>

        <ul>
          <li>Ran <code>npm install @supabase/supabase-js</code> in <strong>Terminal</strong> to add the <strong>Supabase</strong> package to the existing site</li>
          <li>Created <code>lib/supabase.ts</code>, <code>app/api/guess/route.ts</code>, and <code>app/api/state/route.ts</code> using <code>cat</code> commands in <strong>Terminal</strong></li>
          <li>Downloaded the game component <code>page.tsx</code> from <strong>Claude</strong> and moved it into <code>app/numerator/</code> using <strong>Finder</strong></li>
          <li>Created <code>.env.local</code> with the <strong>Supabase</strong> credentials in <strong>Terminal</strong></li>
          <li>Tested locally with <code>npm run dev</code> — game loaded at <code>localhost:3000/numerator</code></li>
        </ul>

        <p>
          Pushed to <strong>GitHub</strong>, <strong>Vercel</strong> deployed — and the page
          returned a <strong>404</strong>. The build log showed every route except{" "}
          <code>/numerator</code>, plus a warning: &quot;Failed to fetch git submodules.&quot;
        </p>

        <ul>
          <li>Ran <code>git ls-files app/numerator/</code> in <strong>Terminal</strong> — it returned <code>app/numerator</code> (a directory reference) instead of <code>app/numerator/page.tsx</code> (the actual file)</li>
          <li>Root cause: when the standalone numerator project (which had its own <code>.git</code> folder) was dragged into the site, <strong>Git</strong> tracked it as a <strong>submodule</strong> — invisible to <strong>Vercel</strong></li>
          <li>Fixed with <code>git rm --cached app/numerator</code> then <code>git add app/numerator/page.tsx</code> in <strong>Terminal</strong> to track it as a proper file</li>
          <li>Pushed again — <strong>Vercel</strong> rebuilt, <code>joseandgoose.com/numerator</code> loaded</li>
        </ul>

        <div className="post-visual">
          <div className="post-terminal">
            <div className="post-terminal-bar">
              <span className="post-terminal-dot post-terminal-dot--red"></span>
              <span className="post-terminal-dot post-terminal-dot--yellow"></span>
              <span className="post-terminal-dot post-terminal-dot--green"></span>
              <span className="post-terminal-bar-title">Terminal — The Fix</span>
            </div>
            <div className="post-terminal-body">
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                joseandgoose-site-main % <span className="post-terminal-cmd">git rm --cached app/numerator</span>
              </div>
              <div className="post-terminal-dim">rm &apos;app/numerator&apos;</div>
              <br />
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                joseandgoose-site-main % <span className="post-terminal-cmd">git add app/numerator/page.tsx</span>
              </div>
              <br />
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                joseandgoose-site-main % <span className="post-terminal-cmd">git push</span>
              </div>
              <div className="post-terminal-dim">b46fb38..ddd853b</div>
              <div className="post-terminal-success">  main → main</div>
            </div>
          </div>
          <p className="post-visual-caption">
            Removed the submodule ghost, re-added the actual file, pushed — <strong>Vercel</strong> built <code>/numerator</code> this time.
          </p>
        </div>

        <div className="post-tip">
          <span className="post-tip-label">AI tip</span>
          <p>
            If <strong>Vercel</strong> says &quot;Failed to fetch git submodules&quot; and your page 404s
            even though the files are in <strong>VS Code</strong> — run <code>git ls-files</code> on the
            folder in <strong>Terminal</strong>. If it returns a directory name instead of file paths,
            you have a submodule ghost. Fix it with <code>git rm --cached</code> then <code>git add</code> the
            actual files.
          </p>
        </div>

        {/* ── Session 4 ── */}
        <h2>Session 4: Navigation and Mobile</h2>
        <p className="post-session-meta">Day 2 — ~2 hours</p>
        <p className="post-pace">
          <em>Pace: Fast design iteration, then a surprise dev environment bug at the finish line.</em>
        </p>

        <p>
          With the game live, nobody could find it — there was no link in the site navigation.
          I wanted a yellow &quot;Play Numerator&quot; button in the top-right nav. <strong>Claude</strong>{" "}
          generated an HTML mockup I could preview before touching any code:
        </p>

        <ul>
          <li>Previewed the button mockup in the <strong>browser</strong> — a yellow <code style={{ background: "#F3D104", color: "#0a0a0f", padding: "1px 5px", borderRadius: 3, fontWeight: 700, fontSize: 12 }}>#F3D104</code> pill-shaped button next to Contact</li>
          <li>Three rounds of feedback in <strong>Claude</strong> — centered the text, tightened the padding, reduced the font 25% until the button felt right</li>
          <li>Discovered the nav was hardcoded in every single page file — seven <code>.tsx</code> files with the same HTML block in <strong>VS Code</strong></li>
          <li>Used <strong>VS Code</strong>&apos;s Find and Replace across files (<code>Cmd + Shift + H</code>) to add the button to one page, but only 1 of 7 files committed</li>
        </ul>

        <p>
          Rather than paste the button into all seven files and create a maintenance nightmare,{" "}
          <strong>Claude</strong> built a shared <code>Nav.tsx</code> component. One file that
          renders everywhere — including a hamburger menu for mobile, which the site never had:
        </p>

        <ul>
          <li>Created <code>app/Nav.tsx</code> as a shared &quot;use client&quot; component with desktop nav links, the yellow button, and a hamburger toggle</li>
          <li>Updated <code>app/layout.tsx</code> in <strong>VS Code</strong> to import and render <code>&lt;Nav /&gt;</code> before the page content</li>
          <li>Added hamburger animation CSS (three spans that rotate into an X) and mobile dropdown styles to <code>globals.css</code></li>
          <li>Deleted the old <code>&lt;header&gt;</code> blocks from all seven page files in <strong>VS Code</strong></li>
        </ul>

        <p>
          The last surprise was a dev environment bug. Running <code>npm run dev</code> in{" "}
          <strong>Terminal</strong> flooded the screen with infinite &quot;Can&apos;t resolve tailwindcss&quot; errors:
        </p>

        <ul>
          <li>The <strong>Next.js</strong> startup warning said &quot;multiple lockfiles detected&quot; — it found a stale <code>package-lock.json</code> in the home directory from an earlier project</li>
          <li><strong>Next.js</strong> inferred the wrong workspace root and looked for <strong>Tailwind</strong> in <code>/Users/josedelgado/Desktop</code> instead of the project folder</li>
          <li>Fixed by running <code>rm -rf node_modules .next</code> then <code>npm install</code> in <strong>Terminal</strong> for a clean reinstall</li>
          <li>Dev server started cleanly — nav with hamburger confirmed at <code>localhost:3000</code> in the <strong>browser</strong></li>
        </ul>

        <div className="post-visual">
          <div className="post-terminal">
            <div className="post-terminal-bar">
              <span className="post-terminal-dot post-terminal-dot--red"></span>
              <span className="post-terminal-dot post-terminal-dot--yellow"></span>
              <span className="post-terminal-dot post-terminal-dot--green"></span>
              <span className="post-terminal-bar-title">Terminal — zsh</span>
            </div>
            <div className="post-terminal-body">
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                joseandgoose-site-main % <span className="post-terminal-cmd">rm -rf node_modules .next && npm install</span>
              </div>
              <div className="post-terminal-dim">added 369 packages, and audited 370 packages in 23s</div>
              <br />
              <div>
                <span className="post-terminal-prompt">josedelgado@MacBook-Air</span>{" "}
                joseandgoose-site-main % <span className="post-terminal-cmd">npm run dev</span>
              </div>
              <div className="post-terminal-dim">&gt; next dev</div>
              <div>▲ Next.js 16.1.6 (Turbopack)</div>
              <div>- Local: http://localhost:3000</div>
              <div className="post-terminal-success">✓ Ready in 992ms</div>
            </div>
          </div>
          <p className="post-visual-caption">
            Clean install fixed the tailwind lockfile conflict — no more infinite error loops.
          </p>
        </div>

        <div className="post-tip">
          <span className="post-tip-label">AI tip</span>
          <p>
            If your <strong>Next.js</strong> dev server floods errors about missing packages,
            check the startup warning for &quot;multiple lockfiles detected.&quot; A stale{" "}
            <code>package-lock.json</code> in a parent directory can hijack your entire workspace
            in <strong>Terminal</strong>. Delete it and run a clean <code>npm install</code>.
          </p>
        </div>

        {/* ── Final Output ── */}
        <h2>Final Output</h2>

        <p>
          A live multiplayer game theory puzzle at{" "}
          <a href="https://www.joseandgoose.com/numerator" target="_blank" rel="noopener noreferrer">
            joseandgoose.com/numerator
          </a>{" "}
          with a <strong>PostgreSQL</strong> database storing every guess across all visitors,
          a 300-guess cycle that resets the running average, five distinct outcome paths,
          a legendary win screen for 3 perfect matches in a row, a canvas-rendered shareable
          result card, responsive mobile navigation with a hamburger menu, and auto-deployment
          from <strong>GitHub</strong> — built in about 8–10 hours by someone with no prior
          backend development experience, guided entirely by <strong>Claude</strong>.
        </p>

        <h3>What went fast</h3>
        <ul>
          <li><strong>Game prototyping in Claude.ai</strong> (full playable loop generated from a text description in minutes)</li>
          <li><strong>Supabase database setup</strong> (one SQL block pasted into the dashboard — tables, security, and functions created instantly)</li>
          <li><strong>Vercel deployment</strong> (one <code>git push</code> in <strong>Terminal</strong> → live URL in under a minute, every time)</li>
          <li><strong>Design iteration</strong> (<strong>Claude</strong> generated HTML mockups for the nav button — preview in <strong>browser</strong>, adjust, approve, then build)</li>
        </ul>

        <h3>What needed patience</h3>
        <ul>
          <li><strong>Git submodule ghost</strong> (dragging a project folder with its own <code>.git</code> into another repo created an invisible tracking error — a 45-minute debugging detour in <strong>Terminal</strong>)</li>
          <li><strong>Tailwind lockfile conflict</strong> (a stale <code>package-lock.json</code> in a parent directory caused infinite error loops — solved by deleting the file and a clean <code>npm install</code>)</li>
          <li><strong>Hardcoded nav across 7 files</strong> (a maintenance problem discovered in <strong>VS Code</strong> that forced the creation of a shared <code>Nav.tsx</code> component — the right fix, but more work upfront)</li>
          <li><strong>Game logic tuning</strong> (five rounds of feedback in <strong>Claude</strong> on outcome messages, colors, text readability, and a recalculation bug)</li>
        </ul>

        <p>
          The biggest lesson? Building a game isn&apos;t one skill — it&apos;s a dozen small
          ones stacked vertically. Game design. Database architecture. API routes. Git debugging.
          CSS responsive design. <strong>Claude</strong> handled the code. I handled the decisions.
          And the correct answer is still 50% of whatever everyone else is thinking.
        </p>

        <div className="post-back post-back--bottom">
          <a href="/writing">← Back to all writing</a>
        </div>
      </div>
    </article>
  );
}