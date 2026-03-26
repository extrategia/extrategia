import { motion } from "motion/react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Estratega Principal",
      role: "Estrategia & IA",
      desc: "Experto en análisis de datos, automatización y crecimiento digital.",
      skills: ["Estrategia", "IA", "Growth"],
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Director Creativo",
      role: "Branding & Contenido",
      desc: "Especialista en identidad visual, diseño premium y narrativa de marca.",
      skills: ["Branding", "Diseño", "Copywriting"],
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Productor Audiovisual",
      role: "Video & Edición",
      desc: "Creador de contenido dinámico, edición avanzada y formatos de alto impacto.",
      skills: ["Video", "Edición", "Animación"],
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="equipo"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            El Equipo <span className="text-gradient">ExtrategIA</span>
          </h2>
          <p className="text-gray-400 text-lg">
            No somos una agencia genérica. Somos un equipo especializado,
            cercano y comprometido con tus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-3xl overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {member.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-accent transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-accent transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
