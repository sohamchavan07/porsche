import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold gradient-text">PORSCHE</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#models" className="text-foreground/80 hover:text-foreground transition-colors">Models</a>
              <a href="#performance" className="text-foreground/80 hover:text-foreground transition-colors">Performance</a>
              <a href="#heritage" className="text-foreground/80 hover:text-foreground transition-colors">Heritage</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">Configure</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;