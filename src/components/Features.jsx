import { motion } from 'framer-motion';
import { Cpu, Camera, Users, Sparkles, Globe2, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'AI Upcycle Advisor',
    desc: 'Personalized repair and repurpose suggestions from your image or text.',
  },
  {
    icon: Camera,
    title: 'Material Scanner',
    desc: 'Detects fabric, plastic, or metal to guide the best reuse method.',
  },
  {
    icon: Users,
    title: 'Maker Match',
    desc: 'Connect with local fixers and global creators to co-build projects.',
  },
  {
    icon: Sparkles,
    title: 'AI Co‑Creator',
    desc: 'Generate concept mockups and creative ideas for upcycles.',
  },
  {
    icon: Gamepad2,
    title: 'ReNova Quest',
    desc: 'Missions, badges, and EcoPoints to keep you motivated.',
  },
  {
    icon: Globe2,
    title: 'Impact Dashboard',
    desc: 'Track CO₂, water, and waste saved in real-time.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">Intelligent tools, human creativity</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            A fusion of AI guidance and community collaboration — designed for a circular economy.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 hover:border-white/20 hover:from-white/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
