import { Leaf, Shield, MapPin, DollarSign, Clock, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Ingredientes Naturales",
      description: "Elaborados únicamente con frutas frescas seleccionadas, sin aditivos artificiales ni conservantes químicos.",
      color: "flash-green"
    },
    {
      icon: Shield,
      title: "Sin Conservantes Químicos",
      description: "Proceso natural de conservación que mantiene todas las propiedades y el sabor auténtico de la fruta.",
      color: "flash-red"
    },
    {
      icon: DollarSign,
      title: "Precios Competitivos",
      description: "Ofrecemos la mejor relación calidad-precio del mercado, con descuentos especiales por volumen.",
      color: "flash-yellow"
    },
    {
      icon: MapPin,
      title: "Producción Local",
      description: "Apoyamos a productores locales y garantizamos frescura mediante cadenas de suministro cortas.",
      color: "flash-green"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Servicio de entrega express en 24-48 horas. Disponibilidad inmediata de nuestros productos estrella.",
      color: "flash-red"
    },
    {
      icon: Award,
      title: "Certificación de Calidad",
      description: "Productos certificados con estándares internacionales de seguridad alimentaria y calidad.",
      color: "flash-yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'flash-green':
        return 'text-flash-green bg-flash-green/10 border-flash-green/20';
      case 'flash-red':
        return 'text-flash-red bg-flash-red/10 border-flash-red/20';
      case 'flash-yellow':
        return 'text-flash-yellow bg-flash-yellow/10 border-flash-yellow/20';
      default:
        return 'text-flash-green bg-flash-green/10 border-flash-green/20';
    }
  };

  return (
    <section id="benefits" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            ¿Por qué elegir <span className="text-flash-red">Flash Delicious</span>?
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
            Beneficios que marcan la diferencia para tu negocio y tus clientes
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group border border-border/50 hover:border-flash-green/30"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${getColorClasses(benefit.color)} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-8 w-8" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-bold text-foreground group-hover:text-flash-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-lato leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-flash-green mb-2">
              500+
            </div>
            <div className="text-sm text-muted-foreground font-lato">
              Clientes satisfechos
            </div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-flash-red mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground font-lato">
              Años de experiencia
            </div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-flash-yellow mb-2">
              24h
            </div>
            <div className="text-sm text-muted-foreground font-lato">
              Tiempo de entrega
            </div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-soft">
            <div className="text-3xl md:text-4xl font-montserrat font-bold text-flash-green mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground font-lato">
              Satisfacción garantizada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;