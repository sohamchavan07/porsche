import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isTaycanOpen, setIsTaycanOpen] = useState(false);

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
                        src="/heritage/911 Turbo.jpeg" 
                        alt="Porsche 911 Turbo" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche 911 Turbo</h3>
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
                        src="/heritage/Vision 357 .jpeg" 
                        alt="Porsche Vision 357" 
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold">Porsche Vision 357</h3>
                        <p className="text-sm">The future of electric performance</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cayenne</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Macan</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Panamera</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Porsche</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Motorsport</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 CaseStudy Porsche. All rights reserved.</p>
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