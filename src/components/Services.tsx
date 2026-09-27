import { motion } from 'motion/react';
import { LayoutTemplate, Code2, Smartphone, Zap, Database, Search } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Bespoke, high-end interfaces designed to elevate your brand and engage your audience.',
    icon: LayoutTemplate,
  },
  {
    title: 'Frontend Development',
    description: 'Blazing-fast, responsive interactive experiences built with modern React frameworks.',
    icon: Code2,
  },
  {
    title: 'Mobile Optimization',
    description: 'Flawless experiences across all devices, ensuring maximum reach and usability.',
    icon: Smartphone,
  },
  {
    title: 'Performance Tuning',
    description: 'Rigorous optimization for sub-second load times and exceptional Core Web Vitals.',
    icon: Zap,
  },
  {
    title: 'CMS Integration',
    description: 'Seamless content management setups using headless architecture and modern APIs.',
    icon: Database,
  },
  {
    title: 'Technical SEO',
    description: 'Built-in semantic structure, schema markup, and advanced indexing optimization.',
    icon: Search,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-dark-950 relative border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary-400 font-sans tracking-[0.3em] uppercase text-[10px] mb-4">Core Ecosystem</h2>
          <h3 className="text-5xl font-display font-light text-dark-50 mb-6">Digital Ecosystems<br/><span className="text-dark-400 italic">Built to Scale.</span></h3>
          <p className="text-lg text-dark-500 font-sans max-w-xl leading-relaxed">
            We don't use templates. We engineer robust, custom websites that provide a flawless user experience from the first interaction to final conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l border-dark-800 pl-8 hover:border-primary-400 transition-colors group"
            >
              <div className="text-primary-400 mb-6 origin-left transform group-hover:scale-110 transition-transform">
                <service.icon strokeWidth={1} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-light text-dark-50 mb-3">{service.title}</h4>
              <p className="text-dark-500 font-sans text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
