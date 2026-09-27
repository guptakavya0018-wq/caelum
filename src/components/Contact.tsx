import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:guptakavya796@gmail.com?subject=${subject}&body=${body}`;
    
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-dark-950 border-t border-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mb-20">
          <h2 className="text-primary-400 font-sans tracking-[0.3em] uppercase text-[10px] mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-display font-light text-dark-50 mb-6">Ready to Build <span className="text-dark-400 italic">Your Platform?</span></h3>
          <p className="text-lg text-dark-500 font-sans leading-relaxed">
            Let's discuss your technical requirements and map out a roadmap to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <div className="border border-dark-800 p-10 h-full bg-dark-950">
              <h4 className="text-2xl font-display text-dark-50 mb-10">Contact Information</h4>
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-dark-800 flex items-center justify-center text-primary-400">
                      <Mail strokeWidth={1} className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="text-[10px] font-sans uppercase tracking-widest text-dark-500 mb-2">Email Me</p>
                    <a href="mailto:guptakavya796@gmail.com" className="text-lg font-display text-dark-50 hover:text-primary-400 transition-colors">guptakavya796@gmail.com</a>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-sans uppercase tracking-[0.2em] text-dark-400 mb-3">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-dark-950 border border-dark-800 text-dark-50 focus:border-primary-400 transition-colors outline-none font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-sans uppercase tracking-[0.2em] text-dark-400 mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 bg-dark-950 border border-dark-800 text-dark-50 focus:border-primary-400 transition-colors outline-none font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-[10px] font-sans uppercase tracking-[0.2em] text-dark-400 mb-3">Company / Website</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-5 py-4 bg-dark-950 border border-dark-800 text-dark-50 focus:border-primary-400 transition-colors outline-none font-sans"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-sans uppercase tracking-[0.2em] text-dark-400 mb-3">How can we help you?</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-4 bg-dark-950 border border-dark-800 text-dark-50 focus:border-primary-400 transition-colors outline-none resize-none font-sans"
                  placeholder="Tell us about your project goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-dark-950 text-[11px] uppercase tracking-widest font-bold hover:bg-primary-300 transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
