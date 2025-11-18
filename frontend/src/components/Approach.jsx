import React from 'react';
import { ChartBar, Server, LineChart, Coins, Settings } from 'lucide-react';

const phases = [
  { icon: <Settings className="h-6 w-6 text-cyan-400" />, title: 'Analyse & Beratung', desc: 'Use-Cases, Datenlandschaft, Business-Case.' },
  { icon: <Server className="h-6 w-6 text-cyan-400" />, title: 'Infrastruktur', desc: 'ID/Consent, CRM/CDP, AdTech-Stack, Signage & Onsite.' },
  { icon: <ChartBar className="h-6 w-6 text-cyan-400" />, title: 'Media-Produkte', desc: 'Onsite, Onsite-Digital, Offsite, Retargeting, Sponsoring.' },
  { icon: <Coins className="h-6 w-6 text-cyan-400" />, title: 'Monetarisierung', desc: 'Preismodell, Packaging, Sales Enablement.' },
  { icon: <LineChart className="h-6 w-6 text-cyan-400" />, title: 'Reporting', desc: 'Attribution, Brand/Performance KPIs, Dashboards.' },
];

const Approach = () => (
  <section id="ansatz" className="bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold">Unser Ansatz</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {phases.map((p, i) => (
          <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <div className="flex items-center gap-3">{p.icon}<span className="font-medium">{p.title}</span></div>
            <p className="mt-3 text-slate-300 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Approach;
