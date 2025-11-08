import { motion } from 'framer-motion';
import { Upload, Wand2, Handshake, Wrench } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload or Scan',
    desc: 'Share a photo or describe your unused or broken item.',
  },
  {
    icon: Wand2,
    title: 'Get Smart Ideas',
    desc: 'AI suggests repair paths, upcycle concepts, and donation options.',
  },
  {
    icon: Handshake,
    title: 'Choose Your Path',
    desc: 'DIY, collaborate with makers, or book a verified fixer.',
  },
  {
    icon: Wrench,
    title: 'Create & Share',
    desc: 'Show your transformation and earn EcoPoints and badges.',
  },
];

export default function Flow() {
  return (
    <section id="flow" className="relative py-24 bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white">From waste to wonder in four steps</h2>
            <p className="mt-4 text-white/70">A smooth, guided journey with futuristic motion and tactile feedback.</p>

            <div className="mt-10 flex flex-col gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-12 w-12 rounded-xl bg-white/10 text-white grid place-items-center flex-none">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="text-white/70">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-amber-400/10" />
            <video
              className="relative z-10 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="https://cdn.coverr.co/videos/coverr-recycling-plastic-8467/1080p.mp4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
