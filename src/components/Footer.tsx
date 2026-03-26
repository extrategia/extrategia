import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-display font-bold tracking-tight text-white">
                Extrateg<span className="text-accent">IA</span>
              </span>
            </a>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
              Agencia de marketing digital especializada en estrategia,
              contenido premium e inteligencia artificial para escalar marcas.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/extrategiamx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/14X1tM8JqXL/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#por-que"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Por qué Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Equipo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/524771290945"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +52 477 129 0945
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:contacto@extrategia.mx"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contacto@extrategia.mx
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ExtrategIA. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
