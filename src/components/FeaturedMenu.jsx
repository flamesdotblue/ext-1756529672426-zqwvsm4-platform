import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  {
    title: 'Classic Milk Tea',
    desc: 'Robust black tea, silky milk, chewy pearls.',
    color: 'from-rose-100 to-rose-50',
    price: '$5.50',
    badge: 'Best Seller',
  },
  {
    title: 'Taro Bliss',
    desc: 'Creamy taro with a nutty finish and pearls.',
    color: 'from-fuchsia-100 to-pink-50',
    price: '$5.95',
    badge: 'Staff Pick',
  },
  {
    title: 'Strawberry Matcha',
    desc: 'Earthy matcha layered with real strawberry.',
    color: 'from-emerald-100 to-rose-50',
    price: '$6.25',
    badge: 'New',
  },
];

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-rose-900">Featured Sips</h2>
            <p className="text-rose-700 mt-1">Colorful, creamy, and crafted to delight.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-rose-700 hover:text-rose-900">See full menu →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${item.color} p-5 border border-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/80 backdrop-blur px-2 py-1 text-xs text-rose-700 border border-rose-100">
                <Star size={14} className="text-rose-600" /> {item.badge}
              </div>

              <div className="aspect-[4/3] rounded-xl bg-white/70 border border-rose-100 shadow-inner flex items-center justify-center">
                <div className="text-6xl select-none">
                  {i === 0 && '🧋'}
                  {i === 1 && '🫶'}
                  {i === 2 && '🍓'}
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-rose-900">{item.title}</h3>
              <p className="text-sm text-rose-700 mt-1">{item.desc}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-rose-900">{item.price}</span>
                <button className="inline-flex items-center px-3 py-2 rounded-lg bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition-colors">Add to cart</button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-rose-200 text-rose-900 hover:bg-rose-100 transition-colors">Browse all drinks</a>
        </div>
      </div>
    </section>
  );
}
