import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martina",
    age: 24,
    occupation: "Estudiante de Administración",
    text: "Antes no entendía nada de inversiones y me daba miedo empezar. Esto me ayudó a ordenar todo y dar el primer paso sin sentirme perdido.",
  },
  {
    name: "Camila",
    age: 32,
    occupation: "Asistente Administrativa",
    text: "Tenía mis ahorros quietos y no sabía qué hacer. Las guías son simples y van directo al punto, eso me ayudó mucho.",
  },
  {
    name: "Nicolás",
    age: 20,
    occupation: "Estudiante de Ingeniería",
    text: "Había visto mil videos pero no sabía por dónde empezar. Esto me dio una estructura clara.",
  },
  {
    name: "Santiago",
    age: 38,
    occupation: "Comerciante",
    text: "No es humo. Explica todo básico y sin vueltas. Ideal si estás empezando desde cero.",
  },
  {
    name: "Lucía",
    age: 29,
    occupation: "Emprendedora",
    text: "Pensé que invertir era solo para gente con mucho dinero, pero acá entendí que puedo empezar con poco.",
  },
  {
    name: "Valentina",
    age: 41,
    occupation: "Contadora",
    text: "Lo que más me gustó es que está todo ordenado. No te abruma, te lleva paso a paso.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lo que dicen quienes ya <span className="text-gradient-gold">empezaron</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gradient-card rounded-xl border border-border p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-secondary-foreground mb-4 leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="text-sm font-semibold">
                — {t.name}, <span className="text-muted-foreground font-normal">{t.age} años</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
