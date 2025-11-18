import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import MarketShift from './components/MarketShift';
import Approach from './components/Approach';
import Benefits from './components/Benefits';
import Audience from './components/Audience';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('consent');
    if (!consent) setVisible(true);
  }, []);
  const backend = import.meta.env.VITE_BACKEND_URL || '';
  async function accept(consent) {
    localStorage.setItem('consent', consent ? 'true' : 'false');
    setVisible(false);
    try {
      await fetch(`${backend}/consent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: crypto.randomUUID(), consent, details: { source: 'banner' } })
      });
    } catch {}
  }
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-6xl m-4 rounded-xl border border-slate-700 bg-slate-900/95 backdrop-blur p-4 text-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-sm md:text-base">Wir verwenden Cookies & ähnliche Technologien für Analyse und Medienprodukte. Stimmen Sie zu?</p>
        <div className="flex gap-2">
          <button onClick={() => accept(false)} className="rounded-md border border-slate-600 px-4 py-2">Ablehnen</button>
          <button onClick={() => accept(true)} className="rounded-md bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-medium px-4 py-2">Akzeptieren</button>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  useEffect(() => {
    document.title = 'Commerce Media JV – Messe wird Media Plattform | Commerce Media für Messen';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Wir transformieren Messen in datengetriebene Medien- & Werbeplattformen. Technologie, Daten & Vermarktung aus einer Hand.');
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <WhoWeAre />
      <MarketShift />
      <Approach />
      <Benefits />
      <Audience />
      <Partners />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default App;
