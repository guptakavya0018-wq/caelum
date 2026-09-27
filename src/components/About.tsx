import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-dark-950 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] border border-dark-800 p-2 relative">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop" 
                  alt="Digital marketing team collaborating" 
                  className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-dark-950/20"></div>
              </div>
            </div>
            {/* Floating indicator */}
            <div className="absolute -bottom-8 -right-8 bg-dark-950 border border-dark-800 p-8 max-w-xs hidden md:block">
              <div className="flex items-center gap-6">
                <div className="text-primary-400">
                  <span className="font-display font-light text-5xl">100%</span>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-dark-400 mb-1">Client Focus</p>
                  <p className="font-display italic text-dark-50">Dedicated to your project</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-primary-400 font-sans tracking-[0.3em] uppercase text-[10px] mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-light text-dark-50 mb-8 leading-[1.1]">Your Partners in <span className="text-dark-400 italic">Digital Engineering.</span></h3>
            
            <div className="space-y-6 text-lg text-dark-500 font-sans mb-12">
              <p>
                We are a collective of frontend developers and UI/UX designers passionate about one thing: building digital experiences that perform flawlessly.
              </p>
              <p>
                No cookie-cutter templates. No bloated page builders. Just clean, performant code tailored to your unique requirements as a growing business.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Target, title: 'Precision Engineering', desc: 'We begin with architecture and let performance dictate our code.' },
                { icon: Users, title: 'Collaborative Build', desc: 'Complete transparency through every sprint, review, and deployment.' },
                { icon: Zap, title: 'Modern Stack', desc: 'We leverage the latest modern frameworks to give you an unfair advantage.' },
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border border-dark-800 flex items-center justify-center text-primary-400">
                      <feature.icon strokeWidth={1} className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-display text-dark-50">{feature.title}</h4>
                    <p className="mt-2 text-dark-500 font-sans text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
