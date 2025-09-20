import React, { useState } from "react";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [activePost, setActivePost] = useState(null);

  const posts = [
    { id: 1, title: "Úvod do blogu", date: "20. září 2025",
      excerpt: "Toto je moderní, černý a elegantní blog. Klikněte na příspěvek a čtěte dál." },
    { id: 2, title: "Kratší úvaha o historii", date: "18. září 2025",
      excerpt: "Krátký text, který odkazuje na historické prvky měst a památek. Styl je minimální a přehledný." },
    { id: 3, title: "Jak vytvořit minimalistický design", date: "15. září 2025",
      excerpt: "Tipy, jak dosáhnout čistého designu s tmavým motivem a jednoduchou typografií." }
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased font-sans">
      {!loaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <button
            onClick={() => setLoaded(true)}
            aria-label="Otevřít blog"
            className="group flex items-center justify-center w-40 h-40 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg viewBox="0 0 64 64" className="w-24 h-24 transition-transform transform group-hover:scale-105">
              <rect width="64" height="64" fill="none" />
              <g fill="none" stroke="white" strokeWidth="2">
                <path d="M32 10 v44" strokeLinecap="round" />
                <path d="M10 32 h44" strokeLinecap="round" />
                <g><path d="M48 14 v8" /><path d="M44 18 h8" /></g>
                <g><path d="M48 46 v8" /><path d="M44 50 h8" /></g>
                <g><path d="M16 14 v8" /><path d="M12 18 h8" /></g>
                <g><path d="M16 46 v8" /><path d="M12 50 h8" /></g>
              </g>
            </svg>
          </button>
          <span className="sr-only">Klikněte na kříž pro vstup</span>
        </div>
      )}

      <main className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <header className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold tracking-tight">Černý Blog</h1>
            <nav aria-label="Hlavní navigace">
              <ul className="flex gap-4 text-sm opacity-80">
                <li><a href="#" onClick={e => {e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}>Domů</a></li>
                <li><a href="#posts" onClick={e => {e.preventDefault(); document.getElementById('posts')?.scrollIntoView({behavior:'smooth'})}}>Příspěvky</a></li>
                <li><a href="#about" onClick={e => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}}>O nás</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-6 pb-8">
          <div className="rounded-2xl border border-white/6 p-8">
            <h2 className="text-xl font-medium mb-2">Vítejte</h2>
            <p className="text-sm opacity-80">
              Tento blog je navržený tak, aby byl minimalistický, elegantní a snadno čitelný. Vše je v češtině.
            </p>
          </div>
        </section>

        <section id="posts" className="max-w-4xl mx-auto px-6 pb-12">
          <h3 className="text-2xl font-semibold mb-6">Příspěvky</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <article key={p.id}
                className="rounded-xl border border-white/6 p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActivePost(p)}>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <div className="text-xs opacity-70 mb-3">{p.date}</div>
                <p className="text-sm opacity-80">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="max-w-4xl mx-auto px-6 pb-16">
          <h4 className="text-xl font-medium mb-2">O blogu</h4>
          <p className="text-sm opacity-80">
            Minimalistický blog s tmavým motivem a důrazem na čitelnost. Využijte ho jako osobní deník, portfolio nebo prostor pro úvahy.
          </p>
        </section>

        <footer className="max-w-4xl mx-auto px-6 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} — Elegantní černý blog
        </footer>
      </main>

      {activePost && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-6">
          <article className="max-w-2xl bg-[#050505] border border-white/6 rounded-2xl p-6">
            <button onClick={() => setActivePost(null)} className="mb-4 text-sm underline opacity-80">Zavřít</button>
            <h2 className="text-2xl font-semibold mb-2">{activePost.title}</h2>
            <div className="text-xs opacity-70 mb-4">{activePost.date}</div>
            <p className="text-sm opacity-80">{activePost.excerpt} — obsah příspěvku by zde pokračoval.</p>
          </article>
        </div>
      )}
    </div>
  );
}
