import { motion } from "motion/react";
import {
  LineChart,
  Video,
  Share2,
  PenTool,
  Target,
  Megaphone,
  Lightbulb,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Estrategias de Marketing",
    description:
      "Planes a medida basados en datos para escalar tu negocio digitalmente.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Producción de Video",
    description: "Edición y creación de contenido audiovisual de alto impacto.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Contenido para Redes",
    description:
      "Gestión y creación de contenido estratégico para conectar con tu audiencia.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Diseño de Marca",
    description:
      "Identidad visual premium que transmite confianza y profesionalismo.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Pautas Publicitarias",
    description: "Campañas en Meta y Google Ads optimizadas para conversión.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Asesoría Digital",
    description:
      "Consultoría experta para mejorar tu presencia y autoridad online.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Optimización con IA",
    description:
      "Automatización de procesos y mejora de campañas usando inteligencia artificial.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Posts y Publicaciones",
    description:
      "Redacción persuasiva y diseño de posts que generan interacción.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-surface relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios <span className="text-gradient">Estratégicos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Soluciones integrales diseñadas para posicionar tu marca, atraer
            clientes y multiplicar tus ventas en el entorno digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
