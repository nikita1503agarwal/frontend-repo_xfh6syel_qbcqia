import { useEffect, useState } from 'react'

export default function CookieBanner(){
  const [visible, setVisible] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(()=>{
    const stored = localStorage.getItem('consent')
    if(!stored){
      setTimeout(()=>setVisible(true), 800)
    }
  },[])

  async function send(action, consent){
    const session_id = localStorage.getItem('session_id') || crypto.randomUUID()
    localStorage.setItem('session_id', session_id)
    await fetch(`${baseUrl}/consent`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ session_id, action, consent, category:'all', source:'cookie-banner'}) })
    localStorage.setItem('consent', JSON.stringify({action, consent, ts: Date.now()}))
    setVisible(false)
  }

  if(!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="max-w-6xl mx-auto m-4 p-4 rounded-xl bg-slate-800 border border-slate-700 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <p className="text-blue-100 text-sm md:text-base flex-1">Wir verwenden Cookies für Analyse und Marketing. Mit Ihrer Zustimmung helfen Sie, unsere Angebote zu verbessern.</p>
          <div className="flex gap-2">
            <button onClick={()=>send('reject', false)} className="px-4 py-2 rounded-lg border border-slate-600 text-blue-100 hover:bg-slate-700">Ablehnen</button>
            <button onClick={()=>send('accept', true)} className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400">Akzeptieren</button>
          </div>
        </div>
      </div>
    </div>
  )
}
