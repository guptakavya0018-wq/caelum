import { ArrowUp } from 'lucide-react';
import logo from '../assets/images/caelum_logo_1780860647861.png';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 pt-20 pb-10 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Caelum Web Studio Logo" className="w-8 h-8 object-contain rounded-sm" />
              <span className="font-display italic tracking-tight text-dark-50 text-2xl">
                Caelum<span className="text-primary-400">.</span>
              </span>
            </a>
            <p className="text-dark-500 leading-relaxed mb-6 font-sans text-sm">
              A high-end web development studio dedicated to building performant custom websites and digital destinations.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-dark-400 mb-6 font-sans">Services</h4>
            <ul className="space-y-4">
              {['Custom Web Design', 'Frontend Development', 'E-commerce Solutions', 'CMS Integration', 'Web App Engineering'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-dark-500 hover:text-dark-50 transition-colors font-sans">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-dark-400 mb-6 font-sans">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Work', 'Services', 'Engineering Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-dark-500 hover:text-dark-50 transition-colors font-sans">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest text-dark-400 mb-6 font-sans">Newsletter</h4>
            <p className="text-dark-500 mb-4 font-sans text-sm">Get the latest web development insights delivered to your inbox.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-dark-950 border border-dark-800 px-4 py-3 text-dark-50 placeholder-dark-600 focus:outline-none focus:border-primary-400 font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-400 text-dark-950 font-bold transition-colors whitespace-nowrap text-[10px] uppercase tracking-widest hover:bg-primary-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-dark-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-600 text-xs font-sans uppercase tracking-widest">
            © {new Date().getFullYear()} Caelum Web Studio
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dark-600 hover:text-dark-50 text-xs transition-colors font-sans uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-dark-600 hover:text-dark-50 text-xs transition-colors font-sans uppercase tracking-widest">Terms</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 border border-dark-800 bg-dark-950 flex items-center justify-center text-dark-400 hover:text-dark-50 hover:bg-dark-900 transition-colors"
          >
            <ArrowUp strokeWidth={1.5} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
