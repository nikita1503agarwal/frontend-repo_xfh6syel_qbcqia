import React from 'react';

const WhoWeAre = () => (
  <section id="wer-wir-sind" className="bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Wer wir sind</h2>
      <p className="mt-4 text-slate-300 leading-relaxed">
        Wir sind ein Joint Venture aus Messe-Technologie und Media-Expertise. Unser Team vereint Plattformbau,
        Datenkompetenz und Vermarktung – für Messen, die als Medien- und Datenplattform wachsen.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-medium text-slate-100">Mission</h3>
          <p className="mt-2 text-slate-300">Messen in nachhaltige Medien-Ökosysteme transformieren – datenbasiert und performance-orientiert.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-medium text-slate-100">Werte</h3>
          <p className="mt-2 text-slate-300">Partnerschaftlich, transparent, wirkungsorientiert. Technologie ist Mittel zum Zweck: Wirkung.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-medium text-slate-100">Expertise</h3>
          <p className="mt-2 text-slate-300">Commerce Media, AdTech, CRM/CDP, Digital Signage, Identity, Analytics & Attribution.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
