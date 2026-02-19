import { motion } from "framer-motion";
import { BookOpen, Brain, TrendingUp, Sparkles, GraduationCap } from "lucide-react";

const guides = [
  {
    icon: BookOpen,
    level: "PRINCIPIANTE",
    title: "Finanzas personales y organización del dinero",
    items: [
      "Qué es invertir y por qué es fundamental",
      "Tipos básicos de inversión: acciones, bonos, cripto",
      "Regla del 50/30/20 para organizar tu dinero",
      "Cómo crear tu fondo de emergencia",
      "Errores comunes que debés evitar",
    ],
    color: "from-emerald-500/20 to-emerald-900/10",
  },
  {
    icon: Brain,
    level: "INTERMEDIO",
    title: "Mentalidad, interés compuesto y estrategia",
    items: [
      "La importancia de tener un plan de inversión",
      "Diversificación inteligente del portafolio",
      "El poder del interés compuesto",
      "Análisis fundamental vs. técnico",
      "Gestión de riesgo y control emocional",
    ],
    color: "from-blue-500/20 to-blue-900/10",
    featured: true,
  },
  {
    icon: TrendingUp,
    level: "AVANZADO",
    title: "Cómo abrir un broker y hacer tu primera inversión",
    items: [
      "Pensar como un gestor de portafolio",
      "Evaluación de rendimiento ajustado al riesgo",
      "Rebalanceo y optimización de cartera",
      "Abrir tu primer broker paso a paso",
      "Tu primera inversión real con confianza",
    ],
    color: "from-amber-500/20 to-amber-900/10",
  },
];

const bonuses = [
  {
    icon: Sparkles,
    title: "Mentalidad del Inversor",
    desc: "Cómo pensar, actuar y decidir como un ganador. Principios, hábitos y estrategias mentales para el éxito sostenible.",
  },
  {
    icon: GraduationCap,
    title: "Educación Financiera",
    desc: "El primer paso hacia la libertad. Entendé el dinero, la inflación, y cómo los gobiernos afectan tus ahorros.",
  },
];

const IncludedSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6" id="incluido">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Qué incluye el <span className="text-gradient-gold">pack completo</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 guías PDF profesionales creadas por Ramiro Severino. Todo lo que necesitás para ir de cero a inversor inteligente.
          </p>
        </motion.div>

        {/* 3 Main Guides */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {guides.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border border-border p-6 bg-gradient-to-b ${g.color} relative ${g.featured ? "ring-1 ring-primary/40 shadow-gold" : ""}`}
            >
              {g.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MÁS POPULAR
                </span>
              )}
              <g.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-xs font-bold tracking-widest text-primary block mb-1">
                NIVEL {g.level}
              </span>
              <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-xs font-bold tracking-widest text-primary">+ BONUS INCLUIDOS</span>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-card rounded-xl border border-gold p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
