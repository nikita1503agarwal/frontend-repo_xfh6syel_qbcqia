import { CheckCircle2, Building2, Rocket, BarChart3, Network, Users, Handshake, Target, Database, Megaphone } from 'lucide-react'

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        {subtitle && <p className="mt-2 text-blue-200/80 max-w-3xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

export function WhoWeAre() {
  return (
    <Section id="wer-wir-sind" title="Wer wir sind" subtitle="Joint Venture aus Messe-Technologie und Media-Agentur – vereint Technologie, Datenkompetenz und Vermarktung.">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Building2, title: 'Mission', text: 'Wir transformieren Messen zu Medien- & Datenplattformen.' },
          { icon: Handshake, title: 'Werte', text: 'Partnerschaftlich, transparent, wirkungsorientiert.' },
          { icon: Rocket, title: 'Expertise', text: 'AdTech, CRM/CDP, Digital Signage, Commerce Media.' },
        ].map((item, i) => (
          <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
            <item.icon className="w-8 h-8 text-cyan-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-blue-200/80">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function MarketShift() {
  return (
    <Section id="beobachtung" title="Was wir beobachten" subtitle="Vom Verkauf von Standflächen zur Monetarisierung von Reichweite, Daten und Touchpoints – onsite, digital und offsite.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Der Wandel</h3>
          <p className="mt-2 text-blue-200/80">Messe goes Media. Datengetriebene Produkte und Vermarktung erschließen neue Erlöspfade und verlängern die Messe in digitale Kanäle.</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Chancen</h3>
          <p className="mt-2 text-blue-200/80">First-Party-Daten, ID-Graphen, Signage und CRM/CDP schaffen adressierbare Audiences für Aussteller und Marken.</p>
        </div>
      </div>
    </Section>
  )
}

export function Approach() {
  const items = [
    { icon: Target, title: 'Analyse & Beratung', text: 'Audit, Business-Case, Roadmap.' },
    { icon: Database, title: 'Infrastruktur', text: 'ID/Consent, CRM/CDP, AdTech, Signage.' },
    { icon: Megaphone, title: 'Media-Produkte', text: 'Onsite, Digital, Offsite, Retargeting.' },
    { icon: BarChart3, title: 'Monetarisierung & Reporting', text: 'Vermarktung, Attribution, KPIs.' },
  ]
  return (
    <Section id="ansatz" title="Unser Ansatz" subtitle="Pragmatisch in klaren Phasen – von der Analyse bis zur Attribution.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:translate-y-[-2px] transition-transform">
            <it.icon className="w-8 h-8 text-cyan-400" />
            <h3 className="mt-4 text-white font-semibold">{it.title}</h3>
            <p className="mt-2 text-blue-200/80">{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Benefits() {
  const org = [
    'Neues Erlösmodell',
    'Datenintegration & ID-Graph',
    'Nahtlose Prozesse',
    'Attribution & Reporting',
  ]
  const exhibitors = [
    'Neue Medienprodukte',
    'Digitale Reichweite über die Messe hinaus',
    'Onsite/Offsite/Retargeting',
    'Datenbasierte Erfolgsmessung',
  ]
  return (
    <Section id="vorteile" title="Vorteile">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Für Messeveranstalter</h3>
          <ul className="mt-3 space-y-2">
            {org.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-blue-100"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5" />{b}</li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Für Aussteller & Werbetreibende</h3>
          <ul className="mt-3 space-y-2">
            {exhibitors.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-blue-100"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5" />{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Audience() {
  return (
    <Section id="zielgruppen" title="Zielgruppen">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Nicht-endemische Werbetreibende</h3>
          <p className="mt-2 text-blue-200/80">Erreichen Sie kaufaffine Audiences entlang der gesamten Messe-Journey – digital verlängert.</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white font-semibold">Endemische Aussteller & Partner</h3>
          <p className="mt-2 text-blue-200/80">Aktivieren Sie Zielgruppen mit präzisen, datenbasierten Medienprodukten – onsite und offsite.</p>
        </div>
      </div>
    </Section>
  )
}

export function References() {
  const logos = ['acme','globex','initech','umbrella','hooli','stark']
  return (
    <Section id="referenzen" title="Über uns & Referenzen" subtitle="Gemeinsam von Messe-Tech und Media-Agentur – mit Projekterfahrung in B2B & B2C.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {logos.map((l, i) => (
          <div key={i} className="aspect-[3/2] bg-slate-800/60 border border-slate-700 rounded-xl flex items-center justify-center text-blue-200/70 hover:border-cyan-400/40 transition-colors">
            <span className="text-sm uppercase tracking-wide">{l}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      company: form.company.value || undefined,
      source: 'contact-section'
    }
    const res = await fetch(`${baseUrl}/contact`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) })
    if (res.ok) {
      alert('Danke! Wir melden uns zeitnah.')
      form.reset()
    } else {
      const err = await res.json().catch(()=>({detail:'Fehler'}))
      alert('Fehler: ' + (err.detail || 'Unbekannt'))
    }
  }

  return (
    <Section id="kontakt" title="Kontakt" subtitle="Lassen Sie uns über Potenziale sprechen.">
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <input name="name" required minLength={2} placeholder="Name" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <input name="email" required type="email" placeholder="E-Mail" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <input name="company" placeholder="Unternehmen (optional)" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <textarea name="message" required minLength={10} placeholder="Ihre Nachricht" rows="5" className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg px-5 py-3 w-max">Senden</button>
      </form>
      <p className="mt-6 text-blue-200/80">Oder per E-Mail: <a href="mailto:hello@example.com" className="text-cyan-400 underline">hello@example.com</a></p>
    </Section>
  )
}

export function Footer() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  async function subscribe(e){
    e.preventDefault()
    const email = e.currentTarget.email.value
    const res = await fetch(`${baseUrl}/newsletter`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({email, source:'footer'}) })
    if (res.ok) alert('Danke fürs Abonnieren!')
  }
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-blue-200/80">© {new Date().getFullYear()} JV Commerce Media</p>
          <div className="mt-2 text-blue-200/60 flex gap-4">
            <a href="#" className="hover:text-cyan-400">Impressum</a>
            <a href="#" className="hover:text-cyan-400">Datenschutz</a>
            <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          </div>
        </div>
        <form onSubmit={subscribe} className="flex gap-2">
          <input name="email" type="email" required placeholder="Ihre E-Mail" className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg px-5 py-3">Newsletter</button>
        </form>
      </div>
    </footer>
  )
}
