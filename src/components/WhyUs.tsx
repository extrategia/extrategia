import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  const points = [
    "Creatividad impulsada por datos reales.",
    "Estrategias enfocadas en crecimiento y ventas.",
    "Uso de IA para optimizar tiempos y resultados.",
    "Contenido visualmente atractivo y persuasivo.",
    "Análisis constante para mejorar el ROI.",
  ];

  return (
    <section
      id="por-que"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel p-2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Análisis de datos e IA"
                className="rounded-2xl w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-l-accent">
                  <p className="text-lg font-medium text-white">
                    "No solo hacemos contenido bonito, creamos sistemas de
                    ventas."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir <br />
              <span className="text-gradient">ExtrategIA?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Combinamos la creatividad humana con el análisis estratégico y el
              potencial infinito de la Inteligencia Artificial. Nuestro enfoque
              no es solo ganar likes, sino construir posicionamiento sólido y
              generar ventas reales para tu negocio.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-300">{point}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/524771290945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Conoce nuestra metodología
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
