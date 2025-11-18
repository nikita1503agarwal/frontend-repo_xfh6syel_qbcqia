import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function subscribe(e) {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch(`${backend}/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      });
      const json = await res.json();
      setMsg(json?.message || 'Danke für die Anmeldung!');
      setEmail('');
    } catch {
      setMsg('Leider ist ein Fehler aufgetreten.');
    }
  }

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-slate-100 font-semibold">Commerce Media JV</h3>
          <p className="mt-2">Messe wird Media Plattform.</p>
          <div className="mt-4">
            <form onSubmit={subscribe} className="flex gap-2">
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Newsletter E-Mail" className="flex-1 rounded-md border border-slate-700 bg-slate-900 p-2 outline-none focus:border-cyan-400" required />
              <button className="rounded-md bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-medium px-4">Anmelden</button>
            </form>
            {msg && <p className="mt-2 text-slate-300">{msg}</p>}
          </div>
        </div>
        <div>
          <h4 className="text-slate-200 font-medium">Rechtliches</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-cyan-300">Impressum</a></li>
            <li><a href="#" className="hover:text-cyan-300">Datenschutz</a></li>
            <li><a href="#" className="hover:text-cyan-300">Cookie Hinweis</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-200 font-medium">Kontakt</h4>
          <ul className="mt-2 space-y-1">
            <li>E-Mail: hello@example.com</li>
            <li>Telefon: +49 30 123456</li>
            <li><a href="#kontakt" className="hover:text-cyan-300">Kontaktformular</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">© {new Date().getFullYear()} Commerce Media JV</div>
    </footer>
  );
};

export default Footer;
