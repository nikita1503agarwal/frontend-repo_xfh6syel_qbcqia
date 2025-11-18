import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-36">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
          From Fair to Media Platform.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl">
          Wie Messen zum Commerce-Media-Ökosystem werden.
        </p>
      </div>
      <div className="absolute inset-0 bg-slate-900/60" />
    </section>
  )
}
