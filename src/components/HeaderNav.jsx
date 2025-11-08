import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Vision', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Flow', href: '#flow' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 grid place-items-center shadow-lg shadow-violet-500/30">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">ReNova</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#features"
              className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90 transition"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-white/10"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2 rounded-lg bg-white text-black font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
