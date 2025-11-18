import React from 'react';

const logos = [
  { name: 'Alpha', url: '#'},
  { name: 'Beta', url: '#'},
  { name: 'Gamma', url: '#'},
  { name: 'Delta', url: '#'},
  { name: 'Epsilon', url: '#'},
];

const Partners = () => (
  <section id="referenzen" className="bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Über uns & Referenzen</h2>
      <p className="mt-4 text-slate-300 max-w-3xl">Gemeinsam verbinden wir Messe-Tech und Media-Agentur-Know-how. Wir haben Plattformen gebaut, Kampagnen skaliert und Vermarktungsteams enablet.</p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {logos.map((l) => (
          <a key={l.name} href={l.url} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-center hover:border-cyan-500 transition">
            <div className="h-10 flex items-center justify-center">
              <span className="text-slate-400 group-hover:text-cyan-300 transition">{l.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
