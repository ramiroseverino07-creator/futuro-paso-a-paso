import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Explicado paso a paso y en lenguaje simple.",
  "Diseñado para personas sin experiencia previa.",
  "Aplicable para cualquier país de Latinoamérica.",
  "Incluye ejemplos reales y conceptos prácticos.",
  "Evita errores comunes que le cuestan dinero a los principiantes.",
];

const WhyDifferentSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Por qué este pack es <span className="text-gradient-gold">diferente</span>?
          </h2>
        </motion.div>

        <div className="bg-gradient-card rounded-2xl border border-border p-6 sm:p-10 space-y-4">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-primary" />
              </div>
              <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
