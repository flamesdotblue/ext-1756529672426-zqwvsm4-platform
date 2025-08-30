import Spline from '@splinetool/react-spline';
import { Sparkles, Leaf, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-rose-50 via-transparent to-rose-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center pt-12 md:pt-20 pb-10">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium"
          >
            <Sparkles size={14} /> Freshly brewed happiness
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-rose-900"
          >
            Sip the Sweet Life
            <span className="block text-rose-600">Bubble Tea, Beautifully Crafted</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-rose-700 max-w-xl"
          >
            Hand-shaken teas with premium leaves, velvety milk, and joyful toppings. All in a playful palette that tastes as good as it looks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-colors">Explore Menu</a>
            <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-rose-200 text-rose-900 hover:bg-rose-100 transition-colors">Our Story</a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 grid grid-cols-3 max-w-md gap-4 text-sm"
          >
            <li className="flex items-center gap-2 text-rose-800"><Leaf size={16} className="text-rose-600" /> Organic tea leaves</li>
            <li className="flex items-center gap-2 text-rose-800"><Star size={16} className="text-rose-600" /> Signature flavors</li>
            <li className="flex items-center gap-2 text-rose-800"><Sparkles size={16} className="text-rose-600" /> Crafted daily</li>
          </motion.ul>
        </div>

        <div className="relative h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rose-50/90 to-transparent" />
        </div>
      </div>
    </section>
  );
}
