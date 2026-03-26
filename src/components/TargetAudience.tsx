import { motion } from "motion/react";
import { Users, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function TargetAudience() {
  const targets = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Emprendedores",
      desc: "Que quieren comenzar a vender en digital con una estrategia sólida desde el día uno.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Negocios Locales",
      desc: "Que necesitan presencia profesional en redes sociales para atraer más clientes.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Marcas Establecidas",
      desc: "Que buscan una identidad más fuerte, coherente y premium en internet.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creadores y Figuras",
      desc: "Que quieren atraer a su audiencia ideal con contenido estratégico y de alto valor.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              ¿Para quién es <br />
              <span className="text-gradient">ExtrategIA?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              Diseñamos soluciones para quienes no se conforman con lo básico y
              buscan dominar su nicho en el entorno digital.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://wa.me/524771290945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-primary font-bold hover:bg-gold transition-all duration-300 glow-accent"
            >
              Descubre si somos para ti
            </motion.a>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {targets.map((target, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {target.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {target.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {target.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
