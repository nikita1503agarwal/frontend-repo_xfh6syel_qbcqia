import React from 'react';
import { Sparkles, Database, Workflow, PlugZap, Target } from 'lucide-react';

const Benefits = () => (
  <section id="vorteile" className="bg-slate-950 text-slate-100">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Vorteile für Messeveranstalter</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-cyan-400 mt-1"/>Neues Erlösmodell abseits der Standvermietung.</li>
            <li className="flex items-start gap-3"><Database className="h-5 w-5 text-cyan-400 mt-1"/>Datenintegration über CRM/CDP und Consent.</li>
            <li className="flex items-start gap-3"><Workflow className="h-5 w-5 text-cyan-400 mt-1"/>Synergien zwischen Onsite, Digital und Vermarktung.</li>
            <li className="flex items-start gap-3"><PlugZap className="h-5 w-5 text-cyan-400 mt-1"/>Nahtlose Prozesse und Automatisierung.</li>
            <li className="flex items-start gap-3"><Target className="h-5 w-5 text-cyan-400 mt-1"/>Messbare Wirkung und Attribution.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Vorteile für Aussteller & Werbetreibende</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex items-start gap-3"><Sparkles className="h-5 w-5 text-cyan-400 mt-1"/>Neue Medienprodukte und Zielgruppen-Zugänge.</li>
            <li className="flex items-start gap-3"><Workflow className="h-5 w-5 text-cyan-400 mt-1"/>Digitale Reichweite onsite/offsite/retargeting.</li>
            <li className="flex items-start gap-3"><Database className="h-5 w-5 text-cyan-400 mt-1"/>Datenbasierte Erfolgsmessung und Insights.</li>
            <li className="flex items-start gap-3"><PlugZap className="h-5 w-5 text-cyan-400 mt-1"/>Contextual & Intent-basierte Platzierungen.</li>
            <li className="flex items-start gap-3"><Target className="h-5 w-5 text-cyan-400 mt-1"/>Transparente KPIs und Reporting.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Benefits;
