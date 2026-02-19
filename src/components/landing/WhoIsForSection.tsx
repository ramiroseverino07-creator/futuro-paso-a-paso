import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Querés aprender a invertir pero no sabés por dónde empezar",
  "Sentís que tu plata pierde valor y querés hacer algo al respecto",
  "Buscás información clara, sin tecnicismos ni promesas falsas",
  "Querés empezar con montos pequeños y crecer de a poco",
  "Valorás aprender a tu propio ritmo con material descargable",
];

const notForYou = [
  "Buscás hacerte rico de la noche a la mañana",
  "No estás dispuesto a aprender y aplicar",
  "Querés que alguien invierta por vos",
  "Creés que ya sabés todo sobre inversiones",
];

const WhoIsForSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Es para <span className="text-gradient-gold">vos</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-xl border border-border p-6"
          >
            <h3 className="font-display text-xl font-semibold mb-5 text-primary">
              ✓ Esto es para vos si...
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card rounded-xl border border-border p-6"
          >
            <h3 className="font-display text-xl font-semibold mb-5 text-destructive">
              ✗ Esto NO es para vos si...
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
