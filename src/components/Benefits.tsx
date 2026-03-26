import { motion } from "motion/react";
import {
  BarChart3,
  Globe,
  Shield,
  MessageSquare,
  Cpu,
  TrendingUp,
} from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Presencia Digital",
      desc: "Domina tu sector en internet.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Autoridad de Marca",
      desc: "Conviértete en el referente de tu industria.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Percepción Premium",
      desc: "Atrae clientes dispuestos a pagar más.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Interacción y Alcance",
      desc: "Conecta genuinamente con tu audiencia.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Contenido Estratégico",
      desc: "Cada post tiene un objetivo de negocio.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Optimización con IA",
      desc: "Resultados más rápidos y precisos.",
    },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/95 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="text-gradient">Transforman</span>
          </h2>
          <p className="text-gray-400 text-lg">
            No vendemos humo, entregamos crecimiento medible y una marca que
            destaca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
