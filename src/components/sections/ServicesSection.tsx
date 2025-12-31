import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Cable, 
  Monitor, 
  Speaker, 
  Wrench,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Security Systems",
    description: "Comprehensive security solutions including CCTV, access control, and intrusion detection systems to protect your assets.",
    href: "/services#security",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    description: "Professional network infrastructure design and installation for voice, data, and video communications.",
    href: "/services#cabling",
  },
  {
    icon: Monitor,
    title: "Digital Signage",
    description: "Dynamic digital display solutions for corporate communications, wayfinding, and customer engagement.",
    href: "/services#signage",
  },
  {
    icon: Speaker,
    title: "Audio Visual",
    description: "Complete AV integration for conference rooms, auditoriums, and collaborative workspaces.",
    href: "/services#av",
  },
  {
    icon: Wrench,
    title: "IT Field Services",
    description: "On-site technical support, equipment installation, and maintenance services nationwide.",
    href: "/services#field",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Technology Integration Solutions
          </h2>
          <p className="text-muted-foreground">
            From security systems to structured cabling, we deliver professional technology solutions that empower your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link to={service.href}>
                <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
