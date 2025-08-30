import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-10 border-t border-rose-100 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-rose-900">Peach & Pearl Tea</h3>
            <p className="mt-2 text-rose-700 text-sm">Brewed fresh daily in the heart of your neighborhood. Stop by for a sip of pure joy.</p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-900">Visit us</h4>
            <p className="mt-2 text-rose-700 text-sm">123 Blossom Ave, Suite B<br />Sunnyvale, CA 94086</p>
            <p className="mt-2 text-rose-700 text-sm">Open daily 10am – 9pm</p>
          </div>
          <div>
            <h4 className="font-semibold text-rose-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors text-rose-700"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors text-rose-700"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors text-rose-700"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-rose-100 text-xs text-rose-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Peach & Pearl Tea. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-rose-800">Privacy</a>
            <a href="#" className="hover:text-rose-800">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
