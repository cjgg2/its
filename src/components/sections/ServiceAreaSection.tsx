import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Truck, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCabling from "@/assets/hero-cabling.jpg";

const allCities = [
  "Orlando", "Kissimmee", "Winter Park", "Clermont", 
  "Daytona Beach", "Lakeland", "Melbourne", "Sanford",
  "Tampa", "Ocala", "Deltona", "Altamonte Springs",
  "Apopka", "Oviedo", "Winter Garden", "Lake Mary"
];

export function ServiceAreaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} id="service-area" className="py-24 section-dark relative overflow-hidden">
      {/* Parallax tech image background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{ backgroundImage: `url(${heroCabling})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Radial glow from center */}
      <div className="absolute inset-0 bg-lime-glow opacity-40" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y: contentY }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Coverage Area
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving <span className="gradient-text">200+ Miles</span> Around Orlando
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From Tampa to Daytona Beach, Melbourne to Ocala — our strategically located technicians 
              deliver fast response times across Central Florida.
            </p>
          </motion.div>

          {/* Cities grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 mb-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {allCities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03, duration: 0.4 }}
                  whileHover={{ scale: 1.05, color: "hsl(76 100% 44%)" }}
                  className="flex items-center gap-2 text-muted-foreground cursor-default"
                >
                  <MapPin className="w-3 h-3 text-primary shrink-0" />
                  <span className="text-sm">{city}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">
              ...and many more cities across Central Florida
            </p>
          </motion.div>

          {/* Bottom row: Nationwide expansion + CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nationwide expansion */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/30 relative overflow-hidden"
            >
              <motion.div 
                className="absolute top-4 right-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
                  New
                </span>
              </motion.div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nationwide Expansion</h3>
                  <p className="text-muted-foreground text-sm">
                    Expanding IT field services nationwide for corporate clients. 
                    Contact us for deployment capabilities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Location check CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-card/50 border border-border flex items-center gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Your Location Covered?</h4>
                <p className="text-sm text-muted-foreground">
                  Don't see your city? We likely service your area.
                </p>
              </div>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                <Phone className="w-4 h-4 mr-2" />
                Check Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
