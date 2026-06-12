import { motion } from "framer-motion";
import hotmartSale from "@/assets/hotmart-sale.png.asset.json";

const FirstSaleSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold bg-primary/10 text-primary text-xs font-medium mb-4 tracking-wide">
            PRUEBA SOCIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Primeras ventas confirmadas durante{" "}
            <span className="text-gradient-gold">el primer lanzamiento</span>
          </h2>

          <div className="bg-gradient-card rounded-2xl border border-border p-3 sm:p-4 mb-6 overflow-hidden">
            <img
              src={hotmartSale.url}
              alt="Captura de la primera venta realizada en Hotmart"
              className="w-full h-auto rounded-lg block"
              loading="lazy"
            />
          </div>

          <p className="text-secondary-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Estas guías ya están llegando a personas que decidieron dar el primer paso para mejorar su educación financiera e iniciar su camino como inversores.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSaleSection;
