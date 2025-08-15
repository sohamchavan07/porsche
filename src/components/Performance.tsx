const Performance = () => {
  const stats = [
    { value: "75+", label: "Years of Excellence", description: "Racing Heritage" },
    { value: "30,000+", label: "Race Victories", description: "Worldwide Success" },
    { value: "320", label: "Engineering Records", description: "Innovation Milestones" },
    { value: "1M+", label: "Sports Cars", description: "Delivered Globally" }
  ];

  return (
    <section id="performance" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Performance <span className="gradient-text">by Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every statistic tells a story of relentless pursuit of perfection, 
            from the racetrack to the road.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="luxury-card p-8 h-full">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="luxury-card p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Racing DNA</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Born on the racetrack, perfected on the road. Every Porsche carries the genetic 
            code of our motorsport success, from Le Mans victories to Formula E championships. 
            This racing heritage doesn't just inspire our cars—it defines them.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Le Mans Winner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Formula E Champion</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>WEC Manufacturer Champion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;