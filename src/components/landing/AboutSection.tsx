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
              Soy un inversor autodidacta con años de experiencia invirtiendo en <strong className="text-foreground">acciones y criptomonedas</strong>. No vengo de una familia de dinero ni estudié finanzas en la universidad. Todo lo que sé lo aprendí investigando, probando y, sobre todo, <strong className="text-foreground">cometiendo errores</strong>.
            </p>
            <p>
              A lo largo del tiempo desarrollé un <strong className="text-foreground">sistema simple</strong>, enfocado en el largo plazo, la gestión de riesgo y la toma de decisiones inteligentes. Mi objetivo es que puedas empezar a invertir con <strong className="text-foreground">claridad y confianza</strong>, evitando los errores que le cuestan dinero a la mayoría de las personas.
            </p>
            <p>
              Estas guías son el resultado de <strong className="text-foreground">años de aprendizaje real en el mercado</strong>.
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
