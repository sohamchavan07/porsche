import { useState } from "react";
import heroImage from "@/assets/porsche-hero.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, Trophy, Car, Zap, Star, Award, Sparkles } from "lucide-react";

interface HeritageMilestone {
  year: number;
  title: string;
  description: string;
  category: "foundation" | "racing" | "innovation" | "design";
  icon: React.ReactNode;
  highlight: string;
  details: string[];
  imagePlaceholder: string;
  achievements: string[];
  hasImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

const heritageData: HeritageMilestone[] = [
  {
    year: 1948,
    title: "356 'No. 1' Roadster",
    description: "Porsche's first sports car, born in Austria, marks the true beginning of the brand.",
    category: "foundation",
    icon: <Car className="w-5 h-5" />,
    highlight: "The Beginning",
    details: [
      "First Porsche sports car",
      "Built in Gmünd, Austria",
      "Aluminum body construction",
      "1.1L flat-four engine"
    ],
    imagePlaceholder: "356 Roadster",
    achievements: ["First Porsche", "Austrian Heritage", "Lightweight Design"],
    hasImage: true,
    imageSrc: "/heritage/356 roadster.jpeg",
    imageAlt: "Porsche 356 'No. 1' Roadster"
  },
  {
    year: 1963,
    title: "911 Debut",
    description: "Designed by F. A. Porsche, the 911 has evolved technically while retaining its signature silhouette.",
    category: "design",
    icon: <Car className="w-5 h-5" />,
    highlight: "Icon Born",
    details: [
      "Designed by Ferry Porsche",
      "Evolutionary design philosophy",
      "Rear-engine layout",
      "Timeless silhouette"
    ],
    imagePlaceholder: "911 Classic",
    achievements: ["Timeless Design", "Evolutionary", "Iconic Silhouette"],
    hasImage: true,
    imageSrc: "/heritage/911 debute.jpeg",
    imageAlt: "Porsche 911 Debut"
  },
  {
    year: 1970,
    title: "917 Le Mans Victory",
    description: "The 917 secured Porsche's first overall win at Le Mans, cementing motorsport legacy.",
    category: "racing",
    icon: <Trophy className="w-5 h-5" />,
    highlight: "Le Mans Glory",
    details: [
      "First overall Le Mans win",
      "Flat-12 engine",
      "Revolutionary aerodynamics",
      "Motorsport dominance begins"
    ],
    imagePlaceholder: "917 Le Mans Victory",
    achievements: ["Le Mans Winner", "Motorsport Legend", "Aerodynamic Innovation"],
    hasImage: true,
    imageSrc: "/heritage/917 Le Mans Victory.jpeg",
    imageAlt: "917 Le Mans Victory"
  },
  {
    year: 1974,
    title: "911 Turbo",
    description: "Porsche's first production turbocharged car—landmark in performance and road legality.",
    category: "innovation",
    icon: <Zap className="w-5 h-5" />,
    highlight: "Turbo Revolution",
    details: [
      "First production turbo",
      "260 horsepower",
      "Road-legal performance",
      "Performance icon created"
    ],
    imagePlaceholder: "911 Turbo",
    achievements: ["Turbo Pioneer", "Performance Icon", "Road Legal"],
    hasImage: true,
    imageSrc: "/heritage/911 Turbo.jpeg",
    imageAlt: "911 Turbo"
  },
  {
    year: 1985,
    title: "959 'Wundercar'",
    description: "Breakthrough AWD, adaptive suspension, and turbo tech, with Paris–Dakar rally highlights.",
    category: "innovation",
    icon: <Zap className="w-5 h-5" />,
    highlight: "Technological Marvel",
    details: [
      "All-wheel drive system",
      "Adaptive suspension",
      "Twin-turbo technology",
      "Dakar rally success"
    ],
    imagePlaceholder: "959 Wundercar",
    achievements: ["AWD Pioneer", "Dakar Winner", "Tech Marvel"],
    hasImage: true,
    imageSrc: "/heritage/959 'Wundercar' .jpeg",
    imageAlt: "959 'Wundercar'"
  },
  {
    year: 2019,
    title: "Heritage Design Strategy",
    description: "Porsche selectively revives classic colors, patterns, and traditional interior fabrics.",
    category: "design",
    icon: <Car className="w-5 h-5" />,
    highlight: "Heritage Revival",
    details: [
      "Classic color revival",
      "Pepita tartan patterns",
      "Corduroy interiors",
      "Modern heritage fusion"
    ],
    imagePlaceholder: "Heritage Design",
    achievements: ["Classic Revival", "Pattern Heritage", "Modern Fusion"]
  },
  {
    year: 2023,
    title: "Vision 357",
    description: "A modern, celebratory reinterpretation of the original 356 for its 75th anniversary.",
    category: "design",
    icon: <Car className="w-5 h-5" />,
    highlight: "75th Anniversary",
    details: [
      "356 reinterpretation",
      "Modern technology",
      "Heritage celebration",
      "Future meets past"
    ],
    imagePlaceholder: "Vision 357",
    achievements: ["75th Anniversary", "Future Vision", "Heritage Celebration"],
    hasImage: true,
    imageSrc: "/heritage/Vision 357 .jpeg",
    imageAlt: "Vision 357"
  }
];

const Heritage = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const nextMilestone = () => {
    setActiveMilestone((prev) => (prev + 1) % heritageData.length);
  };

  const prevMilestone = () => {
    setActiveMilestone((prev) => (prev - 1 + heritageData.length) % heritageData.length);
  };

  const goToMilestone = (index: number) => {
    setActiveMilestone(index);
  };

  const currentMilestone = heritageData[activeMilestone];

  return (
    <section id="heritage" className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background/30 to-background/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--porsche-red)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Hero Intro */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-accent font-medium">Since 1948</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Heritage: Where <span className="gradient-text">Innovation</span> Meets Emotion
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A celebration of Porsche's origin, design evolution, and landmark engineering—from the first 356 roadster to rally-bred hypercars.
          </p>
        </div>

        {/* Enhanced Interactive Timeline */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Timeline & Highlights
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevMilestone}
                className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextMilestone}
                className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced Timeline Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {heritageData.map((milestone, index) => (
                <button
                  key={milestone.year}
                  onClick={() => goToMilestone(index)}
                  className={`flex flex-col items-center gap-2 min-w-[80px] transition-all duration-300 ${
                    index === activeMilestone
                      ? "text-accent scale-110"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeMilestone
                      ? "bg-accent scale-125 shadow-lg shadow-accent/50"
                      : "bg-border hover:bg-muted-foreground"
                  }`} />
                  <span className="text-sm font-medium">{milestone.year}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Active Milestone Display */}
          <Card className="luxury-card max-w-6xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-background via-secondary/5 to-background backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 shadow-lg">
                      {currentMilestone.icon}
                    </div>
                    <Badge variant="secondary" className="capitalize px-3 py-1 text-sm font-medium">
                      {currentMilestone.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                      {currentMilestone.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                      {currentMilestone.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-xl shadow-lg">
                      <span className="text-accent font-semibold">{currentMilestone.highlight}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {currentMilestone.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Achievements */}
                  <div className="pt-4">
                    <div className="flex flex-wrap gap-2">
                      {currentMilestone.achievements.map((achievement, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-3 py-1 border-accent/30 hover:bg-accent/10 transition-colors">
                          <Star className="w-3 h-3 mr-1 text-accent" />
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Image Display */}
                <div className="relative group">
                  {currentMilestone.hasImage ? (
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-background/30 rounded-2xl border border-border/50 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                      <img
                        src={currentMilestone.imageSrc ?? heroImage}
                        alt={currentMilestone.imageAlt ?? currentMilestone.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                        style={{
                          imageRendering: 'auto'
                        }}
                        onError={(e) => {
                          if (e.currentTarget.src !== heroImage) {
                            e.currentTarget.src = heroImage;
                          }
                        }}
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Image Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-sm font-medium">
                          {currentMilestone.imageAlt}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-background/30 rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden shadow-2xl">
                      <div className="text-center space-y-4 p-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center shadow-lg">
                          <Car className="w-12 h-12 text-accent/40" />
                        </div>
                        <div className="text-6xl font-bold text-accent/20">{currentMilestone.year}</div>
                        <div className="text-lg text-muted-foreground font-medium">{currentMilestone.imagePlaceholder}</div>
                        <div className="text-sm text-muted-foreground/60">Porsche Heritage</div>
                      </div>
                    </div>
                  )}
                  {/* Enhanced Year Badge */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-accent via-accent/80 to-accent/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl border-4 border-background">
                    {currentMilestone.year}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tech & Design Deep Dives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="luxury-card group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-secondary/5 to-background backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent/30 transition-colors shadow-lg">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Supercar Tech
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Highlight the 959's innovations: AWD, active aero, twin turbo technology and motorsport results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  All-Wheel Drive System
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  Adaptive Suspension
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  Twin-Turbo Technology
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="luxury-card group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-background via-secondary/5 to-background backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 group-hover:bg-accent/30 transition-colors shadow-lg">
                  <Car className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                  Design Homage
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Detail how Porsche brings back vintage interior fabrics and colors via Heritage Design packages.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  Classic Color Revival
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  Pepita Tartan Patterns
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-sm" />
                  Corduroy Interiors
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Heritage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background/50 border border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">75+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background/50 border border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">19</div>
            <div className="text-sm text-muted-foreground">Le Mans Victories</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background/50 border border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">1M+</div>
            <div className="text-sm text-muted-foreground">911s Produced</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/30 to-background/50 border border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-accent mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Innovation Legacy</div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105">
              From Heritage to Innovation
            </Button>
            <span className="text-muted-foreground text-xl">→</span>
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
              Discover Models
            </Button>
            <span className="text-muted-foreground text-xl">→</span>
            <Button variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
              Explore Strategy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
