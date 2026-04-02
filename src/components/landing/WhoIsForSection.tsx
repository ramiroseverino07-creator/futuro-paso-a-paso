import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forYou = [
  "Quieres aprender a invertir pero no sabes por dónde empezar",
  "Sientes que tu dinero pierde valor y quieres hacer algo al respecto",
  "Buscas información clara, sin tecnicismos ni promesas falsas",
  "Quieres empezar con montos pequeños y crecer de a poco",
  "Valoras aprender a tu propio ritmo con material descargable",
];

const notForYou = [
  "Buscas hacerte rico de la noche a la mañana",
  "No estás dispuesto a aprender y aplicar",
  "Quieres que alguien invierta por ti",
  "Crees que ya sabes todo sobre inversiones",
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
            ¿Es para <span className="text-gradient-gold">ti</span>?
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
              ✓ Esto es para ti si...
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
              ✗ Esto NO es para ti si...
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
