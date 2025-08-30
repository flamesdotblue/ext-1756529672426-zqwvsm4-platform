import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-rose-100 text-rose-600 group-hover:bg-rose-200 transition-colors">
            <Coffee size={18} />
          </span>
          <span className="font-semibold tracking-tight text-rose-900">Peach & Pearl Tea</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#menu" className="text-rose-700 hover:text-rose-900 transition-colors">Menu</a>
          <a href="#about" className="text-rose-700 hover:text-rose-900 transition-colors">About</a>
          <a href="#contact" className="text-rose-700 hover:text-rose-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-rose-200 text-rose-900 hover:bg-rose-100 transition-colors">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-colors">Order Now</button>
        </div>
      </div>
    </header>
  );
}
