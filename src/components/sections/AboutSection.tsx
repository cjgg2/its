import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Projects Completed" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
  { icon: CheckCircle2, value: "24/7", label: "Support Available" },
];

const highlights = [
  "Licensed and insured professionals",
  "Transparent pricing with detailed quotes",
  "Nationwide field service coverage",
  "Proactive maintenance and support",
];

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About InCtrl</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              Your Technology Integration Partner
            </h2>
            <p className="text-muted-foreground mb-6">
              InCtrl Technology Solutions specializes in designing and deploying integrated technology systems 
              that help businesses operate more securely, communicate more effectively, and engage customers 
              in innovative ways.
            </p>
            <p className="text-muted-foreground mb-8">
              From security camera installations to complete AV buildouts, our certified technicians 
              deliver professional results backed by ongoing support. We take pride in clean installations, 
              reliable performance, and responsive service.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center group hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
