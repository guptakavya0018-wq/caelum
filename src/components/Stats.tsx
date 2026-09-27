import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Performance Score', value: '95+', sub: 'Average Lighthouse score' },
  { label: 'Avg. Load Time', value: '<1.0s', sub: 'Blazing fast load speeds' },
  { label: 'Responsive', value: '100%', sub: 'Flawless across all devices' },
  { label: 'Client Focus', value: '100%', sub: 'Dedicated individual partner' },
];

export default function Stats() {
  return (
    <section id="results" className="py-32 bg-dark-950 border-t border-dark-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-primary-400 text-[10px] tracking-[0.3em] font-sans uppercase mb-4">Performance</h2>
            <h3 className="text-4xl md:text-6xl font-display font-light text-dark-50 mb-6 leading-[1.1]">
              Uncompromising <br/><span className="text-dark-400 italic">Financial Outcomes.</span>
            </h3>
            <p className="text-lg text-dark-500 font-sans mb-10 max-w-lg leading-relaxed">
              We focus entirely on quality and metrics that compound. Not vanity metrics, but real technical outcomes: fast load times, accessible code, and highly-converting experiences.
            </p>
            
            <a href="#contact" className="inline-flex items-center text-[11px] uppercase tracking-widest text-primary-400 font-bold hover:text-primary-300 transition-colors">
              View Detailed Metrics <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-dark-800 pt-6"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-dark-500 font-sans mb-3">{stat.label}</div>
                <div className="text-5xl md:text-6xl font-display font-light text-dark-50 mb-2">{stat.value}</div>
                <div className="text-sm text-dark-600 font-sans">{stat.sub}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
