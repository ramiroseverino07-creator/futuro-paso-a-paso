import { motion } from "framer-motion";
import { Eye, ShieldCheck, AlertCircle, Coins, Clock } from "lucide-react";

const benefits = [
  { icon: Eye, title: "Claridad total", desc: "Vas a entender exactamente cómo funciona el mundo de las inversiones, sin tecnicismos innecesarios." },
  { icon: ShieldCheck, title: "Confianza real", desc: "Tomá decisiones financieras con seguridad, sabiendo qué estás haciendo y por qué." },
  { icon: AlertCircle, title: "Evitá errores costosos", desc: "Aprendé de los errores que otros ya cometieron para no repetirlos con tu dinero." },
  { icon: Coins, title: "Empezá con poco", desc: "No necesitás grandes montos. Aprendé a invertir con lo que tenés disponible hoy." },
  { icon: Clock, title: "A tu propio ritmo", desc: "Material descargable que podés releer cuando quieras, sin presiones ni deadlines." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Lo que vas a <span className="text-gradient-gold">lograr</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
