"use client";

import { ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader/SiteHeader";

const signals = [
  { name: "AI Infrastructure", value: "+8.42%", points: "4,8 20,7 38,10 55,5 74,6 92,2 112,4 132,1" },
  { name: "Semiconductors", value: "+5.18%", points: "4,10 22,8 39,9 56,6 74,8 92,4 111,5 132,3" },
  { name: "Digital Finance", value: "+3.74%", points: "4,11 21,10 39,7 56,9 75,6 93,7 111,3 132,4" },
];

const projects = [
  { title: "ATLAS", type: "Financial intelligence platform", stack: "Next.js / TypeScript / PostgreSQL", metric: "2.4B+ data points", tone: "blue" },
  { title: "VECTOR", type: "Real-time data infrastructure", stack: "Node.js / WebSockets / AWS", metric: "84ms response time", tone: "violet" },
  { title: "ORBIT", type: "AI research platform", stack: "Python / LLMs / Vector Search", metric: "99.98% system uptime", tone: "slate" },
];

const faqs = [
  ["Is NOVA a real trading platform?", "No. NOVA is a fictional market-intelligence product concept created as the visual world for this developer portfolio."],
  ["Are the market numbers real?", "No. The figures shown in this demo are illustrative UI content rather than live financial data."],
  ["What does the developer build?", "Full-stack digital products across interfaces, APIs, data systems, infrastructure and AI-powered workflows."],
];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (el.getBoundingClientRect().bottom <= 0) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.12 });
    observer.observe(el); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>{children}</div>;
}

function MiniChart({ points }: { points: string }) {
  return <svg className="mini-chart" viewBox="0 0 136 14" preserveAspectRatio="none" aria-hidden="true"><polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.2" vectorEffect="non-scaling-stroke" /></svg>;
}

function MarketChart() {
  return <svg className="market-chart" viewBox="0 0 800 300" preserveAspectRatio="none" role="img" aria-label="Illustrative market index chart">
    {[55, 105, 155, 205, 255].map(y => <line key={y} x1="0" x2="800" y1={y} y2={y} />)}
    <polyline points="0,222 42,208 78,220 120,185 164,198 204,164 245,177 286,145 328,152 370,116 414,135 452,101 496,116 535,78 580,93 620,58 664,75 708,42 754,62 800,30" />
  </svg>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    const html = document.documentElement;
    const frame = requestAnimationFrame(() => html.classList.add("is-ready"));
    return () => cancelAnimationFrame(frame);
  }, []);

  return <>
    <SiteHeader />
    <main>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-top">
            <Reveal><div className="eyebrow">GLOBAL MARKET OVERVIEW</div><h1>Markets, understood <em>differently.</em></h1><p className="hero-lead">A market intelligence concept built around movement, momentum and the systems behind modern financial data.</p></Reveal>
            <Reveal delay={80} className="hero-meta"><span>MARKET STATUS</span><strong><i /> LIVE</strong><small>Illustrative data · 09:42 UTC</small></Reveal>
          </div>
          <Reveal delay={120} className="market-panel">
            <div className="market-head"><div><span>GLOBAL INDEX</span><strong>6,842.21</strong><b>+2.84%</b></div><div className="market-range"><button className="active">1D</button><button>1W</button><button>1M</button><button>6M</button><button>1Y</button></div></div>
            <MarketChart />
            <div className="axis"><span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span></div>
          </Reveal>
          <div className="market-strip">{[["NASDAQ", "18,492.31", "+1.82%"], ["S&P 500", "5,842.21", "+1.14%"], ["BTC / USD", "104,821", "+3.42%"], ["GOLD", "2,941.20", "−0.31%"]].map(([a, b, c]) => <Reveal key={a}><div className="quote"><span>{a}</span><strong>{b}</strong><b>{c}</b></div></Reveal>)}</div>
        </div>
      </section>

      <section className="section" id="markets"><div className="container two-col"><Reveal><h2>Signals worth <em>watching.</em></h2></Reveal><Reveal delay={80}><p className="section-lead">A quieter view of market movement. Less noise, more context — presented as a system rather than a dashboard full of widgets.</p></Reveal></div>
        <div className="container signal-list">{signals.map((s, i) => <Reveal key={s.name} delay={i * 70}><article className="signal-row"><span>{s.name}</span><MiniChart points={s.points} /><strong>{s.value}</strong></article></Reveal>)}</div>
      </section>

      <section className="section system-section" id="systems"><div className="container two-col"><Reveal><h2>Behind every signal <em>is a system.</em></h2></Reveal><Reveal delay={80}><p className="section-lead">The interface is only the visible layer. Data ingestion, processing, APIs and intelligent analysis work underneath it.</p></Reveal></div>
        <Reveal className="container system-diagram"><div className="system-node"><span>01</span><strong>MARKET DATA</strong><small>Streaming inputs</small></div><div className="system-line" /><div className="system-node"><span>02</span><strong>PROCESSING</strong><small>Normalization</small></div><div className="system-line" /><div className="system-node"><span>03</span><strong>ANALYSIS</strong><small>Models & rules</small></div><div className="system-line" /><div className="system-node"><span>04</span><strong>INTELLIGENCE</strong><small>Useful output</small></div></Reveal>
      </section>

      <section className="editorial"><div className="container editorial-grid"><Reveal className="editorial-image"><div className="image-placeholder"><span>NOVA / RESEARCH FLOOR</span><div className="orb" /></div></Reveal><Reveal delay={80}><div><h2>From raw data <em>to useful information.</em></h2><p>Technology becomes valuable when complexity disappears from the user's view. NOVA uses data as the material and clarity as the outcome.</p></div></Reveal></div></section>

      <section className="section projects"><div className="container"><Reveal className="section-head"><h2>Systems I've <em>built.</em></h2><p>Three fictional products that demonstrate the kind of full-stack work this portfolio is designed to showcase.</p></Reveal><div className="project-list">{projects.map((p, i) => <Reveal key={p.title} delay={i * 70}><article className={`project ${p.tone}`}><div className="project-visual"><div className="project-window"><div className="window-top"><span /><span /><span /></div><div className="window-lines"><i /><i /><i /><i /></div><div className="window-chart"><MiniChart points="0,13 20,10 38,12 55,7 72,9 90,3 108,6 128,1" /></div></div></div><div className="project-info"><span>{p.title}</span><h3>{p.type}</h3><p>{p.stack}</p><strong>{p.metric}</strong><a href="#contact">View project <ArrowRight size={15} /></a></div></article></Reveal>)}</div></div></section>

      <section className="section data-section"><div className="container"><Reveal className="section-head"><h2>Built for <em>complexity.</em><br />Designed for clarity.</h2></Reveal><div className="metrics">{[["2.4B+", "DATA POINTS"], ["84ms", "RESPONSE TIME"], ["1,284", "ACTIVE SIGNALS"], ["99.98%", "SYSTEM UPTIME"]].map(([v, l], i) => <Reveal key={l} delay={i * 70}><div><strong>{v}</strong><span>{l}</span></div></Reveal>)}</div></div></section>

      <section className="section analyst"><div className="container analyst-grid"><Reveal><div className="eyebrow">AI MARKET ANALYST</div><h2>Ask the system.</h2><p className="section-lead">A small interaction that demonstrates how an intelligent layer can sit naturally inside a data product.</p></Reveal><Reveal delay={80}><div className="analyst-box"><label htmlFor="question">YOUR QUESTION</label><div className="question">Why is semiconductor momentum increasing?<button aria-label="Submit question"><ChevronRight size={17} /></button></div><div className="analysis"><span>AI ANALYSIS</span><p>Demand expectations remain elevated while infrastructure investment continues to expand across the sector.</p></div></div></Reveal></div></section>

      <section className="section stack-section"><div className="container"><Reveal className="section-head"><h2>Built from the <em>ground up.</em></h2></Reveal><div className="stack-grid">{[["INTERFACE", "Next.js", "TypeScript", "React"], ["DATA", "PostgreSQL", "Redis", "WebSockets"], ["INTELLIGENCE", "Python", "LLMs", "Vector Search"], ["INFRASTRUCTURE", "AWS", "Docker", "CI / CD"]].map((group, i) => <Reveal key={group[0]} delay={i * 70}><div><span>{group[0]}</span>{group.slice(1).map(x => <strong key={x}>{x}</strong>)}</div></Reveal>)}</div></div></section>

      <section className="section builder" id="builder"><div className="container builder-grid"><Reveal><div className="portrait-placeholder"><span>BUILDER / 2026</span><div className="portrait-shape" /></div></Reveal><Reveal delay={80}><div><h2>Designed and built by a <em>full-stack engineer.</em></h2><p className="section-lead">I build digital products where data, interfaces and intelligent systems meet — from first architecture to the details users actually touch.</p><a className="text-link" href="#contact">See the work <ArrowRight size={15} /></a></div></Reveal></div></section>

      <section className="section faq"><div className="container faq-grid"><Reveal><h2>The important <em>details.</em></h2><p className="section-lead">A few notes about the concept and the portfolio behind it.</p></Reveal><Reveal delay={80}><div>{faqs.map(([q, a], i) => { const open = openFaq === i; return <div className={`faq-item ${open ? "open" : ""}`} key={q}><button className="faq-question" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)}><span>{q}</span>{open ? <Minus size={17} /> : <Plus size={17} />}</button><div className="faq-answer"><p>{a}</p></div></div> })}</div></Reveal></div></section>

      <section className="contact" id="contact"><div className="container contact-inner"><Reveal><h2>Have something <em>worth building?</em></h2><p>Let's turn a complex idea into a clear, useful product.</p></Reveal><Reveal delay={80}><a className="contact-link" href="mailto:hello@example.com">hello@example.com <ArrowRight size={18} /></a></Reveal></div></section>
    </main>

    <footer className="site-footer">
  <div className="container">
    <div className="footer-main">
      <div className="footer-brand">
        <a href="#" className="footer-logo" aria-label="NOVA — home">
          NOVA
        </a>

        <p className="footer-description">
          Market intelligence concept.
        </p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#markets">Markets</a>
        <a href="#intelligence">Intelligence</a>
        <a href="#systems">Systems</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>

    <div className="footer-disclosure">
      <p>
        This website is a fictional concept created for demonstration purposes.
        Market data, products and content shown on this website are illustrative.
        Visuals were generated using generative AI.
      </p>

      <p>
        Designed &amp; built by <strong>KBUI</strong>.
      </p>
    </div>

    <div className="footer-bottom">
      <span>© 2026 KBUI</span>
      <span>Concept project</span>
    </div>
  </div>
</footer>
  </>;
}
