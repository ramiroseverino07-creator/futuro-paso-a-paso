import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, Brain, Ban } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Tu dinero pierde valor cada día",
    desc: "La inflación destruye tus ahorros. Lo que hoy compras con $100, mañana solo te alcanza para la mitad. En Latinoamérica esto es una realidad constante.",
  },
  {
    icon: AlertTriangle,
    title: "Tienes miedo de perder dinero",
    desc: "La falta de conocimiento te paraliza. Sientes que invertir es arriesgado y prefieres no hacer nada.",
  },
  {
    icon: Brain,
    title: "Demasiada información confusa",
    desc: "Videos, cursos, gurús... todos te dicen algo distinto. No sabes por dónde empezar ni en quién confiar.",
  },
  {
    icon: Ban,
    title: '"Invertir es solo para ricos"',
    desc: "Crees que necesitas mucho capital para empezar. La realidad es que puedes arrancar con montos pequeños desde cualquier país.",
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
            Si no haces nada, tu dinero seguirá perdiendo valor. Estos son los problemas más comunes que enfrentan las personas que aún no invierten.
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
