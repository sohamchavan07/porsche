import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const models = [
  {
    name: "911 GT3 RS",
    category: "Track Performance",
    description: "The ultimate expression of motorsport technology for the road.",
    specs: { power: "518 HP", acceleration: "3.2s", topSpeed: "184 mph" }
  },
  {
    name: "Taycan Turbo S",
    category: "Electric Performance",
    description: "Soul-stirring performance meets sustainable innovation.",
    specs: { power: "761 HP", acceleration: "2.6s", range: "227 mi" }
  },
  {
    name: "Cayenne Turbo GT",
    category: "Performance SUV",
    description: "The fastest SUV to bear the Porsche crest.",
    specs: { power: "631 HP", acceleration: "3.1s", topSpeed: "186 mph" }
  }
];

const FeaturedModels = () => {
  return (
    <section id="models" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most iconic vehicles, each representing decades of 
            engineering excellence and racing heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card key={index} className="luxury-card group cursor-pointer">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">
                      {model.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/50">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Power</p>
                      <p className="font-semibold">{model.specs.power}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">0-60 mph</p>
                      <p className="font-semibold">{model.specs.acceleration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        {model.name.includes('Taycan') ? 'Range' : 'Top Speed'}
                      </p>
                      <p className="font-semibold">
                        {model.name.includes('Taycan') ? model.specs.range : model.specs.topSpeed}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                  >
                    Explore Model
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;