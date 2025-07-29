import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import orangeImage from "@/assets/product-orange.jpg";
import limeImage from "@/assets/product-lime.jpg";
import strawberryImage from "@/assets/product-strawberry.jpg";
import mangoImage from "@/assets/product-mango.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Concentrado de Naranja",
      description: "Sabor cítrico intenso y refrescante. Perfecto para jugos, postres y bebidas calientes.",
      image: orangeImage,
      price: "Desde $45",
      features: ["100% Natural", "Sin conservantes", "Alto rendimiento"],
      color: "orange"
    },
    {
      id: 2,
      name: "Concentrado de Limón",
      description: "Acidez perfecta y aroma natural. Ideal para limonadas, tés y preparaciones culinarias.",
      image: limeImage,
      price: "Desde $42",
      features: ["Ácido natural", "Larga duración", "Fácil dosificación"],
      color: "green"
    },
    {
      id: 3,
      name: "Concentrado de Fresa",
      description: "Dulzura equilibrada y color vibrante. Excelente para batidos, helados y decoraciones.",
      image: strawberryImage,
      price: "Desde $48",
      features: ["Color intenso", "Sabor auténtico", "Versatilidad"],
      color: "red"
    },
    {
      id: 4,
      name: "Concentrado de Mango",
      description: "Sabor tropical y cremosidad natural. Perfecto para smoothies y bebidas exóticas.",
      image: mangoImage,
      price: "Desde $50",
      features: ["Tropical auténtico", "Textura cremosa", "Premium quality"],
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return 'from-orange-500/10 to-orange-500/5 border-orange-200 hover:border-orange-300';
      case 'green':
        return 'from-green-500/10 to-green-500/5 border-green-200 hover:border-green-300';
      case 'red':
        return 'from-red-500/10 to-red-500/5 border-red-200 hover:border-red-300';
      case 'yellow':
        return 'from-yellow-500/10 to-yellow-500/5 border-yellow-200 hover:border-yellow-300';
      default:
        return 'from-flash-green/10 to-flash-green/5 border-border hover:border-flash-green/30';
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Nuestra gama de <span className="text-flash-green">productos naturales</span>
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
            Concentrados líquidos de frutas seleccionadas, perfectos para dar vida a tus preparaciones
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-gradient-to-b ${getColorClasses(product.color)} border rounded-2xl p-6 hover:shadow-hover transition-all duration-300 group`}
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Star className="h-4 w-4 text-flash-yellow fill-current" />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-lato leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-flash-green rounded-full"></div>
                      <span className="text-muted-foreground font-lato">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-2xl font-montserrat font-bold text-flash-green">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground font-lato ml-1">/L</span>
                  </div>
                  <Button variant="outline" size="sm" className="border-flash-green text-flash-green hover:bg-flash-green hover:text-white">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Pedir
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-fresh text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              ¿Necesitas sabores personalizados?
            </h3>
            <p className="text-lg font-lato mb-6 opacity-90">
              Desarrollamos concentrados únicos según las necesidades de tu negocio
            </p>
            <Button variant="secondary" size="lg">
              Solicitar cotización personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;