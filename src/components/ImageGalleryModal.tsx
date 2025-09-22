import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const porscheImages = [
  { src: "/heritage/356 roadster.jpeg", alt: "Porsche 356 Roadster", name: "356 Roadster" },
  { src: "/heritage/911.jpeg", alt: "Porsche 911", name: "911" },
  { src: "/heritage/911 debute.jpeg", alt: "Porsche 911 Debut", name: "911 Debut" },
  { src: "/heritage/911 Turbo.jpeg", alt: "Porsche 911 Turbo", name: "911 Turbo" },
  { src: "/heritage/917 Le Mans Victory.jpeg", alt: "Porsche 917 Le Mans Victory", name: "917 Le Mans Victory" },
  { src: "/heritage/959 'Wundercar' .jpeg", alt: "Porsche 959 Wundercar", name: "959 Wundercar" },
  { src: "/heritage/Cayenne.jpeg", alt: "Porsche Cayenne", name: "Cayenne" },
  { src: "/heritage/Macan.jpeg", alt: "Porsche Macan", name: "Macan" },
  { src: "/heritage/Panamera.jpeg", alt: "Porsche Panamera", name: "Panamera" },
  { src: "/heritage/Taycan.jpeg", alt: "Porsche Taycan", name: "Taycan" },
  { src: "/heritage/Vision 357 .jpeg", alt: "Porsche Vision 357", name: "Vision 357" },
];

const ImageGalleryModal = ({ isOpen, onClose }: ImageGalleryModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-6">
            Explore Porsche Heritage
          </DialogTitle>
         
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {porscheImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg">{image.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-size image modal */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
             
              </DialogHeader>
              <div className="flex justify-center">
                <img
                  src={selectedImage}
                  alt="Porsche Model"
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryModal;