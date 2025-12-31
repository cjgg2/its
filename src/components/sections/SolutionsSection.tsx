import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Cable, Monitor, Speaker, Wrench } from "lucide-react";
import heroSignage from "@/assets/hero-signage.jpg";

const solutions = [
  {
    icon: Shield,
    title: "Security & Surveillance",
    features: [
      "4K cameras, IP systems, NVRs",
      "Smart alerts & remote access",
      "Home, retail, office & warehouse solutions",
      "Advanced motion detection & analytics",
    ],
  },
  {
    icon: Monitor,
    title: "Digital Signage & Displays",
    features: [
      "Menu boards",
      "Interactive kiosks",
      "Large-format displays",
      "Video walls",
    ],
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    features: [
      "CAT5e, CAT6, CAT6a",
      "Fiber optic installation & testing",
      "Rack mounting, patch panels, labeling",
      "Complete network infrastructure",
    ],
  },
  {
    icon: Speaker,
    title: "Audio Visual",
    features: [
      "Conference rooms",
      "Commercial speaker systems",
      "PA systems",
      "TV mounting & projector setups",
    ],
  },
  {
    icon: Wrench,
    title: "IT Field Services",
    features: [
      "On-site tech support",
      "Nationwide dispatch",
      "Device deployment",
      "Troubleshooting & maintenance",
    ],
  },
];

export function SolutionsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={sectionRef} id="solutions" className="py-24 section-medium relative overflow-hidden">
      {/* Parallax tech image background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: `url(${heroSignage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        
        {/* Secondary floating layer */}
        <motion.div 
          style={{ y: floatY }}
          className="absolute -right-20 top-1/4 w-[600px] h-[600px] opacity-[0.04] blur-sm"
        >
          <div 
            className="w-full h-full bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${heroSignage})` }}
          />
        </motion.div>
      </motion.div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Featured Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Technology{" "}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your needs
          </p>
        </motion.div>

        {/* Solutions grid with staggered scroll animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors ${
                index === 4 ? "lg:col-span-1 lg:col-start-2" : ""
              }`}
            >
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              {/* Icon */}
              <motion.div 
                className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <solution.icon className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {solution.title}
              </h3>

              {/* Features list */}
              <ul className="relative z-10 space-y-3">
                {solution.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
