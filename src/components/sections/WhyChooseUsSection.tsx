import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building, Clock, Shield, Headphones } from "lucide-react";
import heroSecurity from "@/assets/hero-security.jpg";

const advantages = [
  {
    icon: Building,
    title: "Everything Under One Roof",
    description: "Security, cabling, signage, AV & IT — no need to juggle multiple vendors.",
  },
  {
    icon: Clock,
    title: "Save Time & Money",
    description: "One team coordinates your entire project from start to finish.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed technicians with comprehensive insurance coverage.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct communication with your project team, always.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 200, suffix: "+", label: "Miles Coverage" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
}

export function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.3, 0.1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.95]);

  return (
    <section ref={sectionRef} id="why-us" className="py-24 section-dark relative overflow-hidden">
      {/* Parallax tech image background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          style={{ scale: imageScale }}
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSecurity})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
      </motion.div>

      {/* Animated grid pattern */}
      <motion.div 
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 grid-pattern" 
      />
      
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-lime-glow opacity-30" />

      {/* Animated grid pattern */}
      <motion.div 
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 grid-pattern" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your All-In-One Tech{" "}
            <span className="gradient-text">Installation Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            The Most Complete Installation & Field Service Team in Central Florida
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike most competitors that specialize in just one area, we deliver{" "}
            <span className="text-primary font-semibold">security, cabling, signage, AV & IT</span>{" "}
            all under one roof — saving you time, money, and headaches.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="text-center p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-colors group"
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <advantage.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats counters with animated background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20"
        >
          {/* Background glow */}
          <div className="absolute inset-0 rounded-3xl bg-lime-glow opacity-30" />
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
