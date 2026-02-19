import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martina R.",
    age: 24,
    occupation: "Estudiante",
    text: "Siempre pensé que invertir era algo inalcanzable para mí. Estas guías me dieron la claridad que necesitaba para dar el primer paso sin miedo.",
  },
  {
    name: "Camila D.",
    age: 35,
    occupation: "Administrativa",
    text: "Me ayudó a entender qué hacer con mis ahorros en vez de dejarlos perder valor. Ahora tengo un plan claro y me siento mucho más segura.",
  },
  {
    name: "Santiago M.",
    age: 40,
    occupation: "Empleado",
    text: "Lo mejor es que no te vende humo. Te explica paso a paso, con honestidad. Arranqué desde cero y hoy entiendo cómo funciona el mercado.",
  },
  {
    name: "Lucía F.",
    age: 29,
    occupation: "Emprendedora",
    text: "Necesitaba aprender a hacer rendir mi dinero. Las guías son directas, fáciles de seguir y me dieron confianza para empezar a invertir.",
  },
  {
    name: "Nicolás P.",
    age: 20,
    occupation: "Estudiante",
    text: "Tengo 20 años y gracias a este material empecé antes que cualquiera de mis amigos. El interés compuesto va a hacer la diferencia.",
  },
  {
    name: "Valentina G.",
    age: 60,
    occupation: "Jubilada",
    text: "Pensaba que ya era tarde para aprender sobre inversiones. Ramiro explica todo tan claro que pude entenderlo y aplicarlo a mi situación.",
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
                {t.name} <span className="text-muted-foreground font-normal">· {t.age} años · {t.occupation}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
