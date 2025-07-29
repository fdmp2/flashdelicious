import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Concentrados Flash Delicious"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flash-green/10 to-flash-yellow/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-flash-green">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-lato font-medium">100% Natural</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
                <span className="text-flash-green">Sabor</span>{" "}
                <span className="text-flash-red">auténtico</span>
                <br />
                <span className="text-foreground">en cada gota</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-lato leading-relaxed max-w-2xl">
                Concentrados líquidos de frutas naturales para tu negocio. 
                Sin conservantes, con el sabor más fresco y precios que te harán crecer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Ver Productos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="xl" className="border-flash-green text-flash-green hover:bg-flash-green hover:text-white">
                Solicitar Muestra
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold text-flash-green">100%</div>
                <div className="text-sm text-muted-foreground font-lato">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold text-flash-red">500+</div>
                <div className="text-sm text-muted-foreground font-lato">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold text-flash-yellow">24h</div>
                <div className="text-sm text-muted-foreground font-lato">Entrega</div>
              </div>
            </div>
          </div>

          {/* Image/Animation */}
          <div className="relative lg:order-last animate-float">
            <div className="relative">
              <img
                src={heroImage}
                alt="Productos Flash Delicious"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-hover"
              />
              <div className="absolute -top-4 -right-4 bg-flash-yellow text-flash-black rounded-full p-4 animate-pulse-soft">
                <Star className="h-8 w-8 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;