import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Garantía de <span className="text-gradient-gold">7 días</span>
          </h2>
          <p className="text-secondary-foreground max-w-xl mx-auto leading-relaxed">
            Si después de leer las guías sentís que no es lo que esperabas, te devolvemos el 100% de tu dinero. 
            Sin preguntas, sin complicaciones. Tu inversión está protegida.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
