import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            La solución: un <span className="text-gradient-gold">sistema paso a paso</span> para principiantes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No necesitás ser experto ni tener mucha plata. Este pack te lleva de la mano desde lo más básico hasta hacer tu primera inversión real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              step: "01",
              title: "Aprendé los fundamentos",
              desc: "Organizá tus finanzas, entendé cómo funciona el dinero y eliminá creencias limitantes.",
            },
            {
              icon: Target,
              step: "02",
              title: "Desarrollá tu estrategia",
              desc: "Descubrí el interés compuesto, la diversificación y cómo pensar como un inversor inteligente.",
            },
            {
              icon: TrendingUp,
              step: "03",
              title: "Hacé tu primera inversión",
              desc: "Abrí un broker, elegí tus primeros activos y empezá a construir tu patrimonio.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold tracking-widest text-primary mb-2 block">PASO {s.step}</span>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#precio"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Quiero empezar ahora <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
