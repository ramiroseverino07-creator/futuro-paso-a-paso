import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const FirstSaleSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold bg-primary/10 text-primary text-xs font-medium mb-4 tracking-wide">
            PRUEBA SOCIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Primera venta realizada durante{" "}
            <span className="text-gradient-gold">nuestro lanzamiento</span>
          </h2>

          <div className="bg-gradient-card rounded-2xl border border-border p-6 sm:p-8 mb-6">
            {/* Reemplazar este bloque por la captura real de Hotmart */}
            <div className="aspect-video w-full rounded-lg border border-dashed border-border bg-background/40 flex flex-col items-center justify-center text-muted-foreground gap-2">
              <ImageIcon className="w-10 h-10 opacity-50" />
              <p className="text-xs">Captura de venta de Hotmart</p>
            </div>
          </div>

          <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Una persona ya dio el primer paso para comenzar su educación financiera con este pack.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSaleSection;
