import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín L.",
    age: 28,
    text: "Siempre quise invertir pero no sabía por dónde arrancar. Con estas guías entendí todo en una semana y ya hice mi primera inversión. Increíble lo claro que está explicado.",
  },
  {
    name: "Camila R.",
    age: 24,
    text: "Pensaba que invertir era solo para gente con mucha plata. Ramiro me demostró lo contrario. Arranqué con poco y ya estoy viendo resultados.",
  },
  {
    name: "Santiago M.",
    age: 35,
    text: "Lo mejor es que no te vende humo. Es honesto, directo y te explica paso a paso. Las guías de mentalidad fueron un antes y un después para mí.",
  },
  {
    name: "Valentina G.",
    age: 31,
    text: "El nivel avanzado me ayudó a abrir mi broker y entender cómo armar un portafolio diversificado. Muy agradecida con este material.",
  },
  {
    name: "Nicolás P.",
    age: 22,
    text: "Tengo 22 años y gracias a estas guías empecé a invertir antes que cualquiera de mis amigos. El interés compuesto va a hacer la diferencia a largo plazo.",
  },
  {
    name: "Lucía F.",
    age: 29,
    text: "La guía de educación financiera me abrió los ojos. Entendí por qué mi plata perdía valor y qué podía hacer al respecto. 100% recomendado.",
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
                {t.name} <span className="text-muted-foreground font-normal">· {t.age} años</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
