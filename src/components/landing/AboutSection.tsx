import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-card rounded-2xl border border-border p-8 sm:p-12"
        >
          <span className="text-xs font-bold tracking-widest text-primary block mb-4">SOBRE EL CREADOR</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
            Hola, soy <span className="text-gradient-gold">Ramiro</span>.
          </h2>
          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              Cuando empecé a invertir, <strong className="text-foreground">no tenía idea por dónde arrancar</strong>.
              Veía videos, leía cosas, pero todo era confuso y contradictorio.
            </p>
            <p>
              Probé por mi cuenta… y <strong className="text-foreground">cometí errores</strong>.
              Perdí tiempo, tomé malas decisiones y me di cuenta de algo:
            </p>
            <ul className="space-y-1 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span>No necesitaba más información</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span><strong className="text-foreground">Necesitaba un sistema claro</strong></span>
              </li>
            </ul>
            <p>
              Con el tiempo, fui simplificando todo y armé un enfoque basado en: <strong className="text-foreground">largo plazo</strong>, <strong className="text-foreground">gestión de riesgo</strong> y <strong className="text-foreground">decisiones simples y conscientes</strong>.
            </p>
            <p>
              Este pack es exactamente eso. No es teoría complicada ni promesas irreales. Es lo que me hubiera gustado tener cuando empecé.
            </p>
            <p className="text-primary font-medium italic">
              "Mi objetivo es simple: que no pierdas tiempo ni dinero cometiendo los mismos errores que yo."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
