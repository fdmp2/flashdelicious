import { Heart, Target, Eye } from "lucide-react";
import fruitSplashImage from "@/assets/fruit-splash.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={fruitSplashImage}
              alt="Frutas frescas Flash Delicious"
              className="w-full rounded-2xl shadow-hover"
            />
            <div className="absolute -bottom-6 -right-6 bg-flash-green text-white p-6 rounded-2xl shadow-soft">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold">15+</div>
                <div className="text-sm font-lato">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                Nuestra historia comenzó con una{" "}
                <span className="text-flash-red">pasión por lo natural</span>
              </h2>
              <p className="text-lg text-muted-foreground font-lato leading-relaxed mb-6">
                Flash Delicious nació del sueño de crear concentrados de frutas que mantuvieran 
                el sabor auténtico y los beneficios naturales. Desde 2008, trabajamos con 
                productores locales para ofrecer a restaurantes, cafeterías y tiendas los 
                mejores concentrados del mercado.
              </p>
              <p className="text-lg text-muted-foreground font-lato leading-relaxed">
                Cada gota refleja nuestro compromiso con la calidad, la frescura y la 
                confianza que nuestros clientes depositan en nosotros día a día.
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-flash-red/10 to-transparent hover:shadow-soft transition-all duration-300">
                <div className="bg-flash-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Misión</h3>
                <p className="text-sm text-muted-foreground font-lato">
                  Brindar concentrados de frutas naturales que eleven la experiencia de sabor en cada negocio
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-flash-green/10 to-transparent hover:shadow-soft transition-all duration-300">
                <div className="bg-flash-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Visión</h3>
                <p className="text-sm text-muted-foreground font-lato">
                  Ser la marca líder en concentrados naturales, reconocida por calidad y confianza
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-flash-yellow/10 to-transparent hover:shadow-soft transition-all duration-300">
                <div className="bg-flash-yellow text-flash-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-montserrat font-semibold text-foreground mb-2">Valores</h3>
                <p className="text-sm text-muted-foreground font-lato">
                  Naturalidad, calidad, confianza y compromiso con nuestros clientes y el medio ambiente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;