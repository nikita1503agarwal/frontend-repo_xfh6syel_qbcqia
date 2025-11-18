import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 flex flex-col items-start justify-center">
        <p className="text-cyan-300 uppercase tracking-widest text-sm md:text-base mb-4">Commerce Media für Messen</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          From Fair to Media Platform.
        </h1>
        <p className="mt-4 text-slate-200 max-w-2xl text-lg">
          Wie Messen zum Commerce-Media-Ökosystem werden.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#kontakt" className="rounded-md bg-cyan-400/90 hover:bg-cyan-300 text-slate-900 font-medium px-5 py-3 transition">Kontakt aufnehmen</a>
          <a href="#ansatz" className="rounded-md border border-slate-600 hover:border-slate-400 text-white font-medium px-5 py-3 transition">Unser Ansatz</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
