import { Button } from "@/components/ui/button";
import heroImage from "@/assets/porsche-hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Porsche 911 GT3 RS" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left max-w-4xl">
        <div className="space-y-6 max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight animate-slide-up">
            Drive the
            <span className="block gradient-text">Dream</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed animate-slide-up delay-200">
            Experience the perfect fusion of performance, luxury, and innovation. 
            Every Porsche is engineered to deliver pure driving passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Explore Models
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
