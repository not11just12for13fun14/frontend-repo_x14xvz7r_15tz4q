import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Features from './components/Features';
import Flow from './components/Flow';

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} ReNova — Repair. Reimagine. Recreate.</p>
        <div className="text-white/60 text-sm">Built with love for a circular future.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',_'Geist',_'Manrope',_sans-serif]">
      <HeaderNav />
      <main>
        <Hero />
        <Features />
        <Flow />
      </main>
      <Footer />
    </div>
  );
}
