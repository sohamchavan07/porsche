import { Button } from "@/components/ui/button";

const Footer = () => {
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
              <li><a href="#" className="hover:text-foreground transition-colors">911</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Taycan</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cayenne</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Macan</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Panamera</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Porsche Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Porsche Approved</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accessories</a></li>
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
          <p>&copy; 2024 Porsche. All rights reserved.</p>
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