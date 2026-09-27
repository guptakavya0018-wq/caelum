import { motion } from 'motion/react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-16 min-h-[70vh]">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-primary-400 text-[10px] uppercase tracking-[0.3em] font-sans mb-8"
          >
            <span>Pixel Perfect. Performance Driven.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light leading-[0.9] text-dark-50 mb-8 max-w-4xl"
          >
            We Build Digital <br/><span className="italic">Destinations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-500 mb-10 max-w-lg leading-relaxed"
          >
            A high-end web development studio crafting blazing-fast, high-quality websites for ambitious clients and scaling brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-4 bg-primary-400 text-dark-950 text-[11px] uppercase tracking-widest font-bold hover:bg-primary-300 transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto text-center px-8 py-4 border border-dark-800 text-[11px] uppercase tracking-widest font-bold text-dark-50 hover:bg-dark-900 transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
        
      {/* Trusted By */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-10 border-t border-dark-900 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-[10px] uppercase tracking-widest text-dark-600 whitespace-nowrap">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-between gap-8 md:gap-16 w-full opacity-40 hover:opacity-100 transition-opacity duration-500">
            {['Acme Corp', 'GlobalBank', 'TechNova', 'Lumina', 'EchoSystems'].map((brand, i) => (
              <span key={i} className="text-xl font-display font-light text-dark-400">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
