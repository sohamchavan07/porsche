import { Button } from "@/components/ui/button";
import heroImage from "@/assets/porsche-hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Porsche 911 GT3 RS" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-left max-w-4xl">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            Drive the
            <span className="block gradient-text">Dream</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Experience the perfect fusion of performance, luxury, and innovation. 
            Every Porsche is engineered to deliver pure driving passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Explore Models
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/10 px-8 py-6 text-lg">
              Book Test Drive
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;