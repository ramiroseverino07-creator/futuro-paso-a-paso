import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito experiencia previa para este pack?",
    a: "No, en absoluto. Las guías están diseñadas para principiantes totales. Empezamos desde lo más básico y avanzamos paso a paso.",
  },
  {
    q: "¿Cuánto dinero necesito para empezar a invertir?",
    a: "Podés empezar con montos muy pequeños. Las guías te enseñan a invertir con lo que tengas disponible, sin necesidad de grandes capitales.",
  },
  {
    q: "¿En qué formato vienen las guías?",
    a: "Las 5 guías vienen en formato PDF de alta calidad, descargables al instante. Podés leerlas desde tu celular, tablet o computadora.",
  },
  {
    q: "¿Es un curso o material pregrabado?",
    a: "Son guías PDF descargables que podés leer a tu propio ritmo. No es un curso con horarios fijos. Podés releerlas las veces que quieras.",
  },
  {
    q: "¿Qué pasa si no me sirve?",
    a: "Tenés una garantía de satisfacción de 7 días. Si no estás conforme, te devolvemos el 100% de tu dinero sin preguntas.",
  },
  {
    q: "¿Las guías funcionan para cualquier país de Latinoamérica?",
    a: "Sí. Los conceptos y estrategias son universales. Si bien algunos ejemplos usan pesos argentinos, los principios aplican para cualquier moneda y mercado.",
  },
  {
    q: "¿Voy a aprender a usar un broker real?",
    a: "Sí. En la guía de nivel avanzado te enseñamos paso a paso cómo abrir un broker y hacer tu primera inversión real.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Preguntas <span className="text-gradient-gold">frecuentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-gradient-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-sm sm:text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://pay.hotmart.com/L103671504W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg glow-gold hover:scale-105 transition-transform duration-300"
          >
            Quiero empezar a invertir hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
