import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BACKEND_URL || '';

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch(`${backend}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          company: data.company || undefined,
        })
      });
      const json = await res.json();
      setStatus(json?.message || (json?.success ? 'Danke! Wir melden uns.' : 'Fehler.'));
      e.currentTarget.reset();
    } catch (e) {
      setStatus('Leider ist ein Fehler aufgetreten.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>
        <p className="mt-2 text-slate-300">Schreiben Sie uns. Wir melden uns zeitnah.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className="rounded-md border border-slate-700 bg-slate-900 p-3 outline-none focus:border-cyan-400" />
          <input name="email" type="email" required placeholder="E-Mail" className="rounded-md border border-slate-700 bg-slate-900 p-3 outline-none focus:border-cyan-400" />
          <input name="company" placeholder="Unternehmen (optional)" className="md:col-span-2 rounded-md border border-slate-700 bg-slate-900 p-3 outline-none focus:border-cyan-400" />
          <textarea name="message" required placeholder="Nachricht" rows={5} className="md:col-span-2 rounded-md border border-slate-700 bg-slate-900 p-3 outline-none focus:border-cyan-400" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="rounded-md bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-medium px-5 py-3 transition disabled:opacity-60">{loading ? 'Senden…' : 'Nachricht senden'}</button>
            {status && <span className="text-slate-300">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
