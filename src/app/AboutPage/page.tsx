import React from 'react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 overflow-y-auto p-6 md:p-12 absolute">
      <section className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">CosmoExplorer</h1>
            <p className="mt-3 text-3xl text-slate-300 max-w-xl">
              Explore, learn and play
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-4 text-sm">
            <strong className="block">Status:</strong>
            <span className="text-slate-300">In development — early access version</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <article className="col-span-1 md:col-span-2 bg-gradient-to-b from-slate-800/40 to-transparent rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-3"> Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              CosmoExplorer was created to give enthusiasts a space to navigate, play and explore space from home.
            </p>

        
          </article>

          <aside className="p-6 rounded-2xl bg-slate-800/30">
            <h3 className="text-xl font-medium mb-2">Core Values</h3>
            <div className="text-slate-300 space-y-2 text-sm">
              <p><strong>Discovery:</strong> bringing the unexpected to light.</p>
            
              <p><strong>Accessibility:</strong> simple interfaces, rich content.</p>
            </div>
          </aside>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What You Can Do on CosmoExplorer</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Visualize a gallery of images and videos from NASA.</li>
              <li>• Check infos about the planets in the solar system</li>
              <li>• play a funny trivia game.</li>
            </ul>
        </section>

        <section className="mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-5 bg-slate-800/30">
              <p className="font-medium">Stefano Borghi — Owner & web developer</p>
              
            </div>
     
            </div>
          
        </section>

        <section className="rounded-2xl p-8 bg-gradient-to-r from-slate-900/60 to-slate-800/30 border border-slate-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Join the Mission</h3>
              <p className="text-slate-300 text-sm mt-1">If you're interested in testing, contributing, or collaborating, I’d love to hear from you — let’s build something together.</p>
            </div>

            <div className="flex gap-3">
            
              <a href="mailto: sborghi92@gmail.com" className="inline-flex items-center px-4 py-2 rounded-2xl border border-slate-700 text-slate-200">Contact me</a>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} CosmoExplorer
        </footer>
      </section>
    </main>
  )
}
