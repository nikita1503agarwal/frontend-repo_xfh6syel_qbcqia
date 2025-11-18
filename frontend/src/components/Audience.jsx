import React from 'react';

const Audience = () => (
  <section id="zielgruppen" className="bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Zielgruppen</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-medium">Nicht-endemische Werbetreibende</h3>
          <p className="mt-2 text-slate-300">Marken, die thematisch zur Messe passen und über Reichweiten & Daten neue Kunden gewinnen möchten.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="font-medium">Endemische Aussteller & Partner</h3>
          <p className="mt-2 text-slate-300">Aussteller, Sponsoren und Ökosystem-Partner, die Sichtbarkeit, Leads und Sales maximieren wollen.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Audience;
