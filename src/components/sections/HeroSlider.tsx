import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Shield, Cable, Monitor, Speaker } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroSecurity from "@/assets/hero-security.jpg";
import heroCabling from "@/assets/hero-cabling.jpg";
import heroSignage from "@/assets/hero-signage.jpg";
import heroAv from "@/assets/hero-av.jpg";

const slides = [
  {
    image: heroSecurity,
    icon: Shield,
    title: "Security & Surveillance",
    subtitle: "4K Cameras • IP Systems • Smart Alerts",
    description: "Protect what matters most with enterprise-grade security solutions",
  },
  {
    image: heroCabling,
    icon: Cable,
    title: "Structured Cabling",
    subtitle: "CAT6 • Fiber Optic • Complete Infrastructure",
    description: "Future-proof your network with professional cabling installation",
  },
  {
    image: heroSignage,
    icon: Monitor,
    title: "Digital Signage",
    subtitle: "Video Walls • Menu Boards • Interactive Kiosks",
    description: "Captivate your audience with stunning digital displays",
  },
  {
    image: heroAv,
    icon: Speaker,
    title: "Audio Visual",
    subtitle: "Conference Rooms • PA Systems • TV Mounting",
    description: "Transform spaces with professional AV installations",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <section className="relative min-h-screen overflow-hidden section-dark">
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      {/* Lime glow effect */}
      <div className="absolute inset-0 bg-lime-glow opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center min-h-screen">
        <div className="max-w-3xl py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <CurrentIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="text-foreground">{slides[currentSlide].title.split(" ")[0]}</span>
                <br />
                <span className="gradient-text">{slides[currentSlide].title.split(" ").slice(1).join(" ")}</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow text-lg px-8 py-6"
                >
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 border border-border hover:bg-primary/20 hover:border-primary transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/50 border border-border hover:bg-primary/20 hover:border-primary transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
