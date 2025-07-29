import { Star, Quote } from "lucide-react";
import chefImage from "@/assets/chef-testimonial.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Chef Ejecutivo",
      business: "Restaurante La Terraza",
      image: chefImage,
      rating: 5,
      text: "Flash Delicious ha transformado nuestras bebidas. El sabor natural es increíble y nuestros clientes notan la diferencia. La calidad es consistente en cada pedido.",
      highlight: "Calidad consistente"
    },
    {
      id: 2,
      name: "María González",
      position: "Propietaria",
      business: "Cafetería Aroma",
      image: chefImage,
      rating: 5,
      text: "Desde que usamos Flash Delicious, nuestras ventas de jugos han aumentado un 40%. El servicio al cliente es excepcional y la entrega siempre puntual.",
      highlight: "Aumento del 40% en ventas"
    },
    {
      id: 3,
      name: "Roberto Silva",
      position: "Gerente",
      business: "Tienda Frutas & Más",
      image: chefImage,
      rating: 5,
      text: "La relación calidad-precio es insuperable. Hemos probado muchas marcas, pero Flash Delicious es la única que mantiene el sabor auténtico de la fruta.",
      highlight: "Mejor relación calidad-precio"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-flash-green">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
            Testimonios reales de negocios que han crecido con Flash Delicious
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50 hover:border-flash-green/30 group"
            >
              {/* Quote Icon */}
              <div className="text-flash-green/20 mb-6">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-flash-yellow fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-muted-foreground font-lato leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-gradient-fresh text-white text-sm font-montserrat font-semibold px-3 py-1 rounded-full inline-block mb-6">
                {testimonial.highlight}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-montserrat font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-lato">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-flash-green font-lato font-medium">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-flash-green text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
              ¿Listo para unirte a nuestros clientes satisfechos?
            </h3>
            <p className="text-lg font-lato mb-6 opacity-90">
              Más de 500 negocios ya confían en Flash Delicious para ofrecer los mejores sabores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-flash-green font-montserrat font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                Ver más testimonios
              </button>
              <button className="bg-flash-red text-white font-montserrat font-semibold px-8 py-3 rounded-lg hover:bg-flash-red/90 transition-colors duration-300">
                ¡Quiero ser cliente!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;