import { motion } from "framer-motion";
import { BookOpen, Brain, TrendingUp, Sparkles, GraduationCap } from "lucide-react";

const guides = [
  {
    icon: BookOpen,
    level: "PRINCIPIANTE",
    title: "Ordena tu dinero y entiende cómo funciona invertir",
    items: [
      "Entiende qué es invertir y por qué es clave para tu futuro",
      "Conoce los tipos de inversión sin confundirte",
      "Organiza tu dinero para que te alcance y sobre",
      "Crea tu fondo de emergencia antes de invertir",
      "Evita los errores que hacen perder dinero a principiantes",
    ],
    color: "from-emerald-500/20 to-emerald-900/10",
  },
  {
    icon: Brain,
    level: "INTERMEDIO",
    title: "Aprende cómo hacer crecer tu dinero aunque empieces con poco",
    items: [
      "Arma un plan de inversión simple y realista",
      "Diversifica sin complicarte la vida",
      "Entiende el interés compuesto y cómo te beneficia",
      "Aprende a analizar antes de invertir",
      "Controla tus emociones para no tomar malas decisiones",
    ],
    color: "from-blue-500/20 to-blue-900/10",
    featured: true,
  },
  {
    icon: TrendingUp,
    level: "AVANZADO",
    title: "Abre tu primer broker y haz tu primera inversión real",
    items: [
      "Piensa como un inversionista con experiencia",
      "Entiende cómo evaluar si tu inversión va bien",
      "Ajusta tu portafolio sin depender de nadie",
      "Abre tu primer broker paso a paso sin confundirte",
      "Haz tu primera inversión real con confianza",
    ],
    color: "from-amber-500/20 to-amber-900/10",
  },
];

const bonuses = [
  {
    icon: Sparkles,
    title: "Mentalidad del Inversionista",
    desc: "Cómo pensar y actuar para tomar buenas decisiones con tu dinero. Principios y hábitos que te van a acompañar siempre.",
  },
  {
    icon: GraduationCap,
    title: "Educación Financiera",
    desc: "El primer paso hacia la libertad financiera. Entiende cómo funciona el dinero, la inflación y cómo proteger tus ahorros.",
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
            5 guías PDF pensadas para que pases de no saber nada a invertir con claridad y confianza.
          </p>
        </motion.div>

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
