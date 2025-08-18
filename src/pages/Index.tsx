import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedModels from "@/components/FeaturedModels";
import Heritage from "@/components/Heritage";
import Performance from "@/components/Performance";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedModels />
      <Heritage />
      <Performance />
      <Footer />
    </div>
  );
};

export default Index;
