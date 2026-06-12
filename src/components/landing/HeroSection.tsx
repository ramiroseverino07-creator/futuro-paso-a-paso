import { motion } from "framer-motion";
import { Shield, Zap, Lock, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold bg-primary/10 text-primary text-sm font-medium mb-6 tracking-wide">
            CONSTRUYENDO CAPITAL
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cómo empezar a invertir en Colombia aunque tengas poco dinero paso a paso
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Un pack pensado para principiantes que quieren aprender a invertir desde cero, de forma simple, práctica y sin tecnicismos.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs sm:text-sm text-secondary-foreground mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Más de 300 personas visitaron esta página durante nuestro primer lanzamiento.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="https://pay.hotmart.com/L103671504W"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg glow-gold hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center"
            >
              Quiero empezar a invertir hoy
            </a>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            Acceso inmediato · Pago único · Garantía 7 días · Válido en toda LATAM
          </p>

          <p className="text-xs text-primary/80 italic mb-6">
            Contenido aplicable para Colombia y toda Latinoamérica
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2 justify-center">
              <Zap className="w-4 h-4 text-primary" /> Acceso instantáneo
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Lock className="w-4 h-4 text-primary" /> Pago seguro
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Shield className="w-4 h-4 text-primary" /> Garantía 7 días
            </span>
            <span className="flex items-center gap-2 justify-center">
              <Globe className="w-4 h-4 text-primary" /> Disponible hoy
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
