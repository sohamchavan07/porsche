import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isTaycanOpen, setIsTaycanOpen] = useState(false);
  const [isCayenneOpen, setIsCayenneOpen] = useState(false);
  const [isMacanOpen, setIsMacanOpen] = useState(false);
  const [isPanameraOpen, setIsPanameraOpen] = useState(false);
  const [isAboutPorscheOpen, setIsAboutPorscheOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isMotorsportOpen, setIsMotorsportOpen] = useState(false);

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">PORSCHE</h3>
            <p className="text-muted-foreground">
              Experience the pinnacle of automotive engineering and racing heritage.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Models</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsImageOpen(true)}
                    >
                      911
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/heritage/911.jpeg" 
                        alt="Porsche 911" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche 911</h3>
                        <p className="text-sm">The iconic sports car that defines performance</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isTaycanOpen} onOpenChange={setIsTaycanOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsTaycanOpen(true)}
                    >
                      Taycan
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/heritage/Taycan.jpeg" 
                        alt="Porsche Taycan" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche Taycan</h3>
                        <p className="text-sm">The future of electric performance</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isCayenneOpen} onOpenChange={setIsCayenneOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsCayenneOpen(true)}
                    >
                      Cayenne
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/heritage/Cayenne.jpeg" 
                        alt="Porsche Cayenne" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche Cayenne</h3>
                        <p className="text-sm">Luxury SUV with performance DNA</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              
              <li>
                <Dialog open={isMacanOpen} onOpenChange={setIsMacanOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsMacanOpen(true)}
                    >
                      Macan
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/heritage/Macan.jpeg" 
                        alt="Porsche Macan" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche Macan</h3>
                        <p className="text-sm">The compact SUV with sports car soul</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
 
              <li>
                <Dialog open={isPanameraOpen} onOpenChange={setIsPanameraOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsPanameraOpen(true)}
                    >
                      Panamera
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="relative">
                      <img 
                        src="/heritage/Panamera.jpeg" 
                        alt="Porsche Panamera" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche Panamera</h3>
                        <p className="text-sm">Luxury sports sedan with coupe elegance</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
               
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Dialog open={isAboutPorscheOpen} onOpenChange={setIsAboutPorscheOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsAboutPorscheOpen(true)}
                    >
                      About Porsche
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">About Porsche</h3>
                        <p className="text-lg text-muted-foreground">
                          Engineering excellence since 1948
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Our Heritage</h4>
                          <p className="text-muted-foreground">
                            Founded by Ferdinand Porsche, our company has been at the forefront of automotive innovation for over 75 years. From the iconic 356 to the revolutionary Taycan, we've consistently pushed the boundaries of what's possible.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Racing DNA</h4>
                          <p className="text-muted-foreground">
                            Our success on the track has directly influenced our road cars. With countless victories at Le Mans, Formula 1, and other prestigious events, racing is in our blood.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Innovation</h4>
                          <p className="text-muted-foreground">
                            From the first hybrid supercar (918 Spyder) to the all-electric Taycan, we're committed to sustainable performance without compromising the driving experience that makes a Porsche unique.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Craftsmanship</h4>
                          <p className="text-muted-foreground">
                            Every Porsche is hand-assembled with meticulous attention to detail. Our engineers and craftsmen work together to create vehicles that are both works of art and engineering marvels.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          "There is no substitute" - This philosophy drives everything we do, from concept to creation.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isCareersOpen} onOpenChange={setIsCareersOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsCareersOpen(true)}
                    >
                      Careers
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">Careers at Porsche</h3>
                        <p className="text-lg text-muted-foreground">
                          Join our team of passionate engineers, designers, and innovators.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Why Porsche?</h4>
                          <p className="text-muted-foreground">
                            At Porsche, we believe in pushing boundaries and creating the future. Our diverse team is dedicated to excellence and innovation.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Open Positions</h4>
                          <p className="text-muted-foreground">
                            We're always looking for talented individuals to join our team. Check out our current openings.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Benefits</h4>
                          <p className="text-muted-foreground">
                            We offer competitive compensation, comprehensive benefits, and opportunities for professional growth.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Culture</h4>
                          <p className="text-muted-foreground">
                            Our company culture is built on collaboration, creativity, and a shared passion for automotive excellence.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          Apply now to become part of the Porsche family.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isNewsOpen} onOpenChange={setIsNewsOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsNewsOpen(true)}
                    >
                      News
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">Porsche News</h3>
                        <p className="text-lg text-muted-foreground">
                          Stay updated with the latest Porsche news, events, and innovations.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Latest Stories</h4>
                          <p className="text-muted-foreground">
                            Read about the latest Porsche models, motorsport achievements, and company milestones.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Press Releases</h4>
                          <p className="text-muted-foreground">
                            Official statements and announcements from Porsche.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Events</h4>
                          <p className="text-muted-foreground">
                            Upcoming Porsche events, exhibitions, and automotive shows.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Innovations</h4>
                          <p className="text-muted-foreground">
                            Discover the latest technological advancements and future concepts.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          Subscribe to our newsletter for the latest updates.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog open={isMotorsportOpen} onOpenChange={setIsMotorsportOpen}>
                  <DialogTrigger asChild>
                    <button 
                      className="hover:text-foreground transition-colors text-left w-full"
                      onClick={() => setIsMotorsportOpen(true)}
                    >
                      Motorsport
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold gradient-text mb-4">Porsche Motorsport</h3>
                        <p className="text-lg text-muted-foreground">
                          Experience the thrill of racing on the world's most iconic circuits.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Le Mans</h4>
                          <p className="text-muted-foreground">
                            The 24 Hours of Le Mans is the pinnacle of endurance racing. Porsche has a rich history of success.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Formula 1</h4>
                          <p className="text-muted-foreground">
                            Porsche is a full-fledged constructor in Formula 1, competing against the best in the world.
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold">Porsche Supercup</h4>
                          <p className="text-muted-foreground">
                            The Porsche Supercup is a globally recognized GT racing series.
                          </p>
                          
                          <h4 className="text-xl font-semibold">Porsche GT3 Cup Challenge</h4>
                          <p className="text-muted-foreground">
                            The Porsche GT3 Cup Challenge is a popular racing series for amateur drivers.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          Visit our Motorsport website for more information.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
       <p>
            &copy; 2025 CaseStudy Porsche. Educational purpose Made by{" "}
            <a
              href="https://www.sohamchavan.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soham Chavan website"
              className="text-red-600 hover:text-red-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              SOHAM
            </a>
            .
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;