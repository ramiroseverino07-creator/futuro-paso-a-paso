import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Brain, Ban } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Te da miedo perder dinero",
    desc: "Quieres invertir pero el miedo te frena. Sientes que si haces algo mal, vas a perder lo poco que tienes. Y preferís no hacer nada.",
  },
  {
    icon: Brain,
    title: "No sabes por dónde empezar",
    desc: "Has visto videos, leído artículos, escuchado consejos… pero cada uno dice algo diferente. Terminas más confundido que antes.",
  },
  {
    icon: TrendingDown,
    title: "Tu dinero pierde valor cada día",
    desc: "La inflación se come tus ahorros sin que te des cuenta. Lo que hoy puedes comprar con $100, mañana te alcanza para menos.",
  },
  {
    icon: Ban,
    title: "Crees que necesitas mucho dinero",
    desc: "Piensas que invertir es solo para personas con grandes capitales. La realidad es que puedes empezar con montos pequeños desde cualquier país.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Te sientes identificado con <span className="text-gradient-gold">alguno de estos problemas</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si no haces nada, tu situación financiera no va a cambiar. Estos son los obstáculos más comunes de quienes aún no invierten.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-gold transition-colors duration-300"
            >
              <p.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
