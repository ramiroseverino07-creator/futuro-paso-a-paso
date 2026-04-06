import { motion } from "framer-motion";
import { Check, Zap, Shield, Download, Globe } from "lucide-react";

const included = [
  "Guía Principiante – Finanzas personales",
  "Guía Intermedio – Estrategia e interés compuesto",
  "Guía Avanzado – Broker y primera inversión",
  "Bonus: Mentalidad del Inversionista",
  "Bonus: Educación Financiera",
  "Acceso inmediato y descarga instantánea",
  "Garantía de satisfacción de 7 días",
];

const PriceSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30" id="precio">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Invierte en tu <span className="text-gradient-gold">educación financiera</span>
          </h2>
          <p className="text-muted-foreground">
            Un pago único. Acceso de por vida. Sin suscripciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl border border-gold p-8 shadow-gold text-center"
        >
          <span className="inline-block text-primary font-semibold text-sm mb-3 animate-pulse">
            ⏳ Precio promocional por tiempo limitado
          </span>

          <span className="text-sm text-muted-foreground line-through block mb-1">
            Valor real: $19 USD
          </span>
          <div className="mb-1">
            <span className="text-5xl sm:text-6xl font-bold font-display text-gradient-gold">$10</span>
          </div>
          <span className="text-muted-foreground text-sm block mb-2">USD · Pago único</span>

          <span className="text-primary/80 text-xs block mb-2 italic">
            Puedes pagar en tu moneda local (COP, MXN, PEN y más).
          </span>

          <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-8">
            🔥 PRECIO DE LANZAMIENTO
          </span>

          <ul className="text-left space-y-3 mb-8">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://pay.hotmart.com/L103671504W"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-gold text-primary-foreground font-bold text-lg py-4 rounded-lg glow-gold hover:scale-[1.02] transition-transform duration-300 text-center mb-6"
          >
            Comprar ahora
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 justify-center">
              <Zap className="w-3.5 h-3.5 text-primary" /> Acceso instantáneo
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <Download className="w-3.5 h-3.5 text-primary" /> Descarga inmediata
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <Shield className="w-3.5 h-3.5 text-primary" /> Pago 100% seguro
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <Globe className="w-3.5 h-3.5 text-primary" /> Válido en toda LATAM
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceSection;
