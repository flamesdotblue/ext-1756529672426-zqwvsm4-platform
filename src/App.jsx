import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
