import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl md:text-3xl font-montserrat font-bold">
                <span className="bg-flash-green text-white px-3 py-1 rounded-md transform -skew-x-12">
                  FLASH
                </span>
                <span className="text-flash-red italic ml-2">
                  Delicious
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-lato leading-relaxed mb-6 max-w-md">
              Concentrados líquidos de frutas naturales que dan vida a tus preparaciones. 
              Desde 2008, comprometidos con la calidad y el sabor auténtico.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-flash-green hover:bg-flash-green/80 p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-flash-red hover:bg-flash-red/80 p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-flash-yellow hover:bg-flash-yellow/80 text-black p-3 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-flash-green mt-0.5 flex-shrink-0" />
                <div className="font-lato">
                  <p className="text-gray-300">Av. Principal 123</p>
                  <p className="text-gray-300">Ciudad, Estado 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-flash-green flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-gray-300 hover:text-white font-lato transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-flash-green flex-shrink-0" />
                <a 
                  href="mailto:info@flashdelicious.com" 
                  className="text-gray-300 hover:text-white font-lato transition-colors duration-300"
                >
                  info@flashdelicious.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-6">Enlaces</h3>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Nosotros
              </a>
              <a href="#products" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Productos
              </a>
              <a href="#benefits" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Beneficios
              </a>
              <a href="#testimonials" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Testimonios
              </a>
              <a href="#" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="block text-gray-300 hover:text-white font-lato transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-lato text-sm">
              © 2024 Flash Delicious. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 font-lato text-sm">Horario de atención:</span>
              <span className="text-gray-300 font-lato text-sm">Lun - Vie: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;