import React from 'react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 overflow-y-auto p-6 md:p-12 absolute">
      <section className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">CosmoExplorer</h1>
            <p className="mt-3 text-lg text-slate-300 max-w-xl">
              Explore, learn, and share: an interactive map of the universe of books and ideas — designed for curious readers and creative communities.
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
              CosmoExplorer was created to give readers a space where enthusiasts can navigate, play and learn new things about astronomy
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
              <li>• Check infos about the planets in the solar syste</li>
              <li>• play a funny trivia game.</li>
            </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-5 bg-slate-800/30">
              <p className="font-medium">Stefano — Founder, Frontend web developer</p>
              <p className="text-slate-300 text-sm mt-1">UI design and architecture.</p>
            </div>
            {/* <div className="rounded-xl p-5 bg-slate-800/30">
              <p className="font-medium">Backend Team</p>
              <p className="text-slate-300 text-sm mt-1">API, data persistence, and recommendation system.</p>
            </div>
            <div className="rounded-xl p-5 bg-slate-800/30">
              <p className="font-medium">Mentors & Community</p>
              <p className="text-slate-300 text-sm mt-1">Collaborations with curators and experienced readers.</p> */}
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
          © {new Date().getFullYear()} CosmoExplorer — Built with curiosity.
        </footer>
      </section>
    </main>
  )
}


// import Image from "next/image"
// export default function About(){

//     return(
//         <main className="flex flex-col">
//             <h1 className="text-7xl">About COSMOEXPLORER</h1>
//             <h2 className="text-4xl">The website</h2>
//             <p className="text-xl">Cosmoexplorer is a brand new way to explore the space from home trough an interactive experience</p>

//             <h2 className="text-4xl">The idea</h2>
//             <p className="text-xl">the idea was originally born from the passion about astronomy and soon has come a tangible way to intrigue passionate and students. </p>

//             <h2 className="text-4xl">funcionality</h2>
//             <p className="text-xl">Cosmoexplorer includes a gallery with all the latest pictures from NASA, a 3D rappresentations of the solar system with Data csrds and a trivia Quiz</p>

            {/* <h2 className="text-4xl">About the Author</h2>
            <div className="flex">
                <Image
                src={'/images/author.jpg'}
                width={500}
                height={500}
                className=""
                alt="author image"/>
                <p className="text-xl">Stefano Borghi is a creative web  developer  </p>
            </div> */}
       

        // <p>1. Hero Section
        // Titolo Accattivante: Un’introduzione breve e chiara alla web app, ad esempio "Dietro le quinte di [Nome della Web App]".
        // Sottotitolo: 1-2 frasi che descrivano lo scopo della web app, ad esempio "Aiutiamo le persone a gestire il loro tempo in modo efficace" o "La tua libreria digitale sempre a portata di clic".
        // Pulsante di Azione (CTA): Per incoraggiare gli utenti a iscriversi, saperne di più o esplorare le funzionalità. Esempio: "Scopri di più" o "Inizia ora".
        // 2. Problema e Soluzione
        // Titolo: “Perché nasce [Nome della Web App]”.
        // Descrizione del Problema: Un breve paragrafo che spieghi la difficoltà o l'esigenza che ha ispirato la creazione dell'app.
        // La Soluzione: Spiega come la web app risolve questo problema. Potresti usare un mix di testo e icone per evidenziare i principali vantaggi.
        // 3. Funzionalità Principali
        // Titolo: "Cosa puoi fare con [Nome della Web App]".
        // Icone o Illustrazioni: Ogni funzionalità principale (come gestione del tempo, report personalizzati, condivisione con il team) può avere un’icona con una breve descrizione.
        // Descrizione Breve: Sotto ogni icona, una frase che spiega come funziona o a cosa serve la feature.
        // </p>


//planets
// "Mercury (planet)" (https://skfb.ly/6yuRD) by SebastianSosnowski is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Venus v1.1" (https://skfb.ly/LpyX) by uperesito is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Earth" (https://skfb.ly/6TwGG) by Akshat is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Mars" (https://skfb.ly/6Uynr) by AirStudios is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Jupiter" (https://skfb.ly/6wOJX) by SebastianSosnowski is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Saturn" (https://skfb.ly/ptqWB) by Space is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Uranus" (https://skfb.ly/6TwIN) by Akshat is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

// "Neptune" (https://skfb.ly/o6rvs) by AllThingsSpace is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
