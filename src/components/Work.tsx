import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Aura Lifestyle',
    category: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop',
    description: 'A high-converting, headless e-commerce experience built for a premium lifestyle brand. Engineered with a focus on mobile performance and seamless checkout workflows.',
    tags: ['React', 'Next.js', 'Shopify Plus'],
  },
  {
    title: 'Finova Tech',
    category: 'Corporate Website',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
    description: 'A sleek, performant marketing site for an emerging fintech startup. Designed to instill trust through sophisticated animations and clear communication of complex financial products.',
    tags: ['WebGL', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Lumina Architecture',
    category: 'Portfolio Showcase',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop',
    description: 'A minimalist, image-heavy portfolio for an award-winning architecture firm. Optimized for blazing-fast load times despite high-resolution masonry grid assets.',
    tags: ['TypeScript', 'Vite', 'CMS Integration'],
  },
  {
    title: 'Caelum Analytics Dashboard',
    category: 'SaaS Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop',
    description: 'A complex data visualization dashboard for an enterprise client. Features real-time state management and highly customized charting libraries within a clean, intuitive interface.',
    tags: ['React', 'D3.js', 'WebSocket'],
  },
  {
    title: 'Verde Wellness',
    category: 'Boutique Booking Platform',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop',
    description: 'A sophisticated booking platform and editorial site for a luxury wellness brand. Implemented custom scheduling logic and a headless CMS for seamless content updates.',
    tags: ['Next.js', 'Stripe API', 'Sanity CMS'],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-dark-950 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-primary-400 font-sans tracking-[0.3em] uppercase text-[10px] mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-dark-50 leading-[1.1]">
              Recent Digital <span className="text-dark-400 italic">Destinations.</span>
            </h3>
          </div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-3/5">
                <div className="aspect-[4/3] border border-dark-800 p-2 relative group overflow-hidden">
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5">
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-dark-400 mb-4">{project.category}</p>
                <h4 className="text-3xl font-display text-dark-50 mb-6">{project.title}</h4>
                <p className="text-dark-500 font-sans leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 border border-dark-800 text-[10px] uppercase tracking-widest text-dark-400 font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#contact" className="inline-flex items-center text-[11px] uppercase tracking-widest text-primary-400 font-bold hover:text-primary-300 transition-colors">
                  View Project Details <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
