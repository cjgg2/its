import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { Shield, Cable, Monitor, Speaker, Wrench, ExternalLink } from "lucide-react";

type Category = "all" | "security" | "cabling" | "signage" | "av" | "it";

const categories = [
  { id: "all" as Category, label: "All Projects", icon: null },
  { id: "security" as Category, label: "Security", icon: Shield },
  { id: "cabling" as Category, label: "Cabling", icon: Cable },
  { id: "signage" as Category, label: "Signage", icon: Monitor },
  { id: "av" as Category, label: "Audio Visual", icon: Speaker },
  { id: "it" as Category, label: "IT Services", icon: Wrench },
];

const projects = [
  {
    id: 1,
    title: "Retail Store Security System",
    category: "security" as Category,
    description: "Complete 16-camera 4K surveillance system with remote monitoring",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Corporate Network Infrastructure",
    category: "cabling" as Category,
    description: "CAT6a structured cabling for 200+ workstations",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Restaurant Digital Menu Boards",
    category: "signage" as Category,
    description: "4-screen digital menu system with content management",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Conference Room AV Setup",
    category: "av" as Category,
    description: "Full video conferencing system with 85\" display",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Warehouse Surveillance",
    category: "security" as Category,
    description: "32-camera system with license plate recognition",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Data Center Cabling",
    category: "cabling" as Category,
    description: "Fiber optic backbone with complete cable management",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Shopping Mall Video Wall",
    category: "signage" as Category,
    description: "12-panel video wall with dynamic content",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17a?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Hotel PA System",
    category: "av" as Category,
    description: "Multi-zone audio system covering 150+ rooms",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "Nationwide Device Rollout",
    category: "it" as Category,
    description: "500+ POS terminal deployments across 12 states",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 section-medium relative overflow-hidden">
      {/* Parallax tech image background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.05]"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </motion.div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Top border accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality and scope of our technology installations
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors"
            >
              {/* Image with zoom effect */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-3 capitalize">
                  {project.category}
                </span>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* View project link */}
                <motion.div 
                  className="mt-4 flex items-center gap-2 text-primary"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of our work or discuss your project?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
