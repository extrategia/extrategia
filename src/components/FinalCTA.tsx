import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-accent/20 rounded-full blur-[200px] mix-blend-screen z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight relative z-10">
            Convierte tu marca en una <br className="hidden md:block" />
            <span className="text-gradient">presencia digital que venda.</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
            El momento de escalar es ahora. Deja de perder clientes por una mala
            estrategia digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="https://wa.me/524771290945?text=Hola%20ExtrategIA,%20estoy%20listo%20para%20escalar%20mi%20marca."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-accent text-primary font-bold text-xl hover:bg-gold transition-all duration-300 glow-accent hover:glow-gold flex items-center justify-center gap-3 group"
            >
              <MessageCircle className="w-6 h-6" />
              Contáctanos por WhatsApp
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400 font-medium tracking-wide uppercase relative z-10">
            Cupos limitados para nuevos clientes este mes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
