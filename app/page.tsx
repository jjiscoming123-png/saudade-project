"use client";

import Logo from "@/components/Logo";

const FRAGMENTS = [
  "The sound of a dial tone nobody uses anymore",
  "Summer evenings that felt like they'd never end",
  "A version of the internet that was just people talking",
  "The person you almost became",
  "Markets before algorithms",
  "Trust before verification",
  "A city you've only seen in photographs",
  "The decade you didn't live through but somehow miss",
];

export default function Page() {
  return (
    <div className="grain">
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-sm border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="text-[11px] italic opacity-50" style={{ fontFamily: 'var(--font-serif)' }}>saudade</span>
        </div>
        <a href="https://x.com/SaudadeCoin" target="_blank" rel="noopener noreferrer"
          className="text-[11px] font-semibold text-[var(--color-bg)] bg-[var(--color-amber)] px-4 py-1.5 rounded-full hover:bg-[var(--color-amber-dim)] transition-colors">
          Follow
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[100svh] flex items-center justify-center px-6 pt-16 relative">
        {/* Twilight glow */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-amber)]/[0.04] blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-purple-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-lg text-center relative z-10">
          <p className="text-[10px] text-[var(--color-amber)]/50 tracking-[0.4em] uppercase mb-4 anim-up d1">/sɐwˈdad(ɨ)/</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 anim-up d2 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            Missing what<br />
            <span className="text-[var(--color-amber)] italic">never was.</span>
          </h1>
          <p className="text-[var(--color-muted)] mb-10 anim-up d3 leading-relaxed max-w-sm mx-auto">
            A Portuguese word with no English translation. A longing for something
            you have lost — or perhaps something you never had at all.
          </p>

          {/* Polaroid */}
          <div className="inline-block anim-up d4">
            <div className="polaroid">
              <div className="polaroid-inner w-48 h-48" />
              <p className="polaroid-text">A place you&apos;ve never been</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAGMENTS ── */}
      <section className="py-20 md:py-28 px-6 border-t border-[var(--color-border)]">
        <div className="max-w-lg mx-auto">
          <p className="text-[10px] text-[var(--color-amber)]/40 tracking-[0.3em] uppercase mb-3">Lost Fragments</p>
          <h2 className="text-2xl font-bold mb-10" style={{ fontFamily: 'var(--font-serif)' }}>
            Things We Miss That <span className="italic text-[var(--color-amber)]">Never Existed</span>
          </h2>
          <div className="space-y-4">
            {FRAGMENTS.map((f, i) => (
              <div key={i} className="fragment">
                &ldquo;{f}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE THESIS ── */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-xl mx-auto space-y-14">
          <div className="text-center mb-12">
            <p className="text-[10px] text-[var(--color-amber)]/40 tracking-[0.3em] uppercase mb-3">The Thesis</p>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Why <span className="italic text-[var(--color-amber)]">Saudade</span>
            </h2>
          </div>
          {[
            { t: "There is no word for it in English.", d: "Every other language just says 'I miss you.' Saudade says 'I miss what was never mine.' Portuguese gave the world the only honest word for this feeling." },
            { t: "You remember a place you've never been.", d: "Scrolling through photos of a city you've never visited. Hearing a song in a language you don't speak. Feeling homesick for a decade you didn't live through. This is saudade — the nostalgia for the unlived life." },
            { t: "The golden age never existed.", d: "Every generation mourns a past that was never as good as they remember. But the ache is real even if the memory is a lie. That's the paradox." },
            { t: "Missing is the message.", d: "SAUDADE doesn't cure the longing. It names it. Sometimes naming the wound is enough. Sometimes the most powerful thing a word can do is prove you're not alone in feeling it." },
          ].map((item, i) => (
            <div key={i} className="group pl-5 border-l-2 border-[var(--color-amber)]/15 hover:border-[var(--color-amber)]/40 transition-colors">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-amber)] transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>{item.t}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 text-center border-t border-[var(--color-border)] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
            Some words exist because<br />
            <span className="text-[var(--color-amber)] italic">feelings came first.</span>
          </h2>
          <p className="text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
            You&apos;ve always felt it. Now it has a name.
          </p>
          <a href="https://x.com/SaudadeCoin" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-bg)] bg-[var(--color-amber)] px-6 py-3 rounded-full hover:bg-[var(--color-amber-dim)] transition-colors">
            <span>𝕏</span> Remember What Never Was
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[var(--color-border)] py-6 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={14} />
          <span className="text-[9px] italic opacity-30" style={{ fontFamily: 'var(--font-serif)' }}>saudade</span>
        </div>
        <p className="text-[9px] text-[var(--color-muted)]/40 italic" style={{ fontFamily: 'var(--font-serif)' }}>You miss it already, don&apos;t you?</p>
      </footer>
    </div>
  );
}
