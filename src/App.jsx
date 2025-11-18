import { useEffect } from 'react'
import Hero from './components/Hero'
import CookieBanner from './components/CookieBanner'
import { WhoWeAre, MarketShift, Approach, Benefits, Audience, References, Contact, Footer } from './components/Sections'

function App() {
  useEffect(()=>{
    document.title = 'JV Commerce Media – Messe wird Media Plattform | Commerce Media für Messen'
    const meta = document.querySelector('meta[name="description"]') || (()=>{ const m=document.createElement('meta'); m.name='description'; document.head.appendChild(m); return m })()
    meta.setAttribute('content','Wir transformieren Messen in datengetriebene Medien- & Werbeplattformen. Technologie, Daten & Vermarktung aus einer Hand.')
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <Hero />
      <WhoWeAre />
      <MarketShift />
      <Approach />
      <Benefits />
      <Audience />
      <References />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App