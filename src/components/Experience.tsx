import { motion } from "motion/react";
import { Building2, Footprints, Shirt, Landmark } from "lucide-react";

export function Experience() {
  const niches = [
    {
      title: "Luxury Real Estate",
      description:
        "Posicionamiento de desarrollos inmobiliarios y captación de leads calificados.",
      icon: <Building2 className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      title: "Calzado Premium",
      description:
        "Estrategias visuales y campañas para marcas de botas y calzado de alta gama.",
      icon: <Footprints className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Moda Masculina",
      description:
        "Construcción de marca y ventas online para camisas y ropa premium.",
      icon: <Shirt className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1626497764746-6dc36546b388?q=80&w=1926&auto=format&fit=crop",
    },
    {
      title: "Marketing Político",
      description:
        "Gestión de crisis, presencia en redes y estrategias para campañas políticas.",
      icon: <Landmark className="w-8 h-8" />,
      image:
        "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2059&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="experiencia"
      className="py-24 bg-surface relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/90 z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra <span className="text-gradient">Experiencia</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Versatilidad, adaptación y resultados comprobados en sectores
            altamente competitivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {niches.map((niche, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden h-[400px] cursor-pointer"
            >
              <img
                src={niche.image}
                alt={niche.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gold mb-6 border border-white/20 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  {niche.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {niche.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {niche.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
