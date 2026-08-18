import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Digital Amnik delivered consistent and high-quality leads for our projects. Their understanding of real estate marketing and performance strategies really helped us scale faster. Highly reliable team.",
    author: "Gaurav Vaishnav",
    role: "KGV Infra",
    image: "https://picsum.photos/seed/gaurav/100/100",
  },
  {
    quote: "We saw a noticeable improvement in our lead quality after working with Digital Amnik. Their approach is very structured and result-oriented. Great experience overall.",
    author: "Vijay Patel",
    role: "Saffron City",
    image: "https://picsum.photos/seed/vijay/100/100",
  },
  {
    quote: "Digital Amnik helped us strengthen our online presence and generate genuine inquiries. Their team is proactive and understands the real estate audience well.",
    author: "Sahaj Poddar",
    role: "Urbana Techno Park",
    image: "https://picsum.photos/seed/sahaj/100/100",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from the brands we've helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-nexus-accent mb-6 opacity-50" />
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-nexus-accent/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-nexus-accent">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
