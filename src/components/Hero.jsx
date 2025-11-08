import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white/80 text-xs border border-white/15">
            <span>Repair. Reimagine. Recreate.</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            ReNova — a circular future powered by collaboration, creativity, and AI.
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Upload an item and instantly get repair options, creative upcycle ideas, and donation routes.
            Team up with makers, learn new skills, and track your sustainability impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">
              Explore Features
            </a>
            <a href="#flow" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
