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
            Hola, soy <span className="text-gradient-gold">Ramiro</span>
          </h2>
          <div className="space-y-4 text-secondary-foreground leading-relaxed">
            <p>
              Soy un inversor autodidacta. No vengo de una familia de dinero ni estudié finanzas en la universidad. 
              Todo lo que sé lo aprendí investigando, probando y, sobre todo, <strong className="text-foreground">cometiendo errores</strong>.
            </p>
            <p>
              Después de años aprendiendo por las malas, decidí crear el material que a mí me hubiera gustado tener 
              cuando empecé: algo <strong className="text-foreground">claro, directo y sin humo</strong>.
            </p>
            <p>
              Estas guías son el resultado de ese proceso. No te prometo hacerte millonario. Te prometo darte las 
              herramientas y el conocimiento para que <strong className="text-foreground">tomes el control de tu dinero</strong> y 
              empieces a construir tu futuro financiero con confianza.
            </p>
            <p className="text-primary font-medium italic">
              "Mi objetivo es simple: que no tengas que pasar por los mismos errores que yo cometí."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
