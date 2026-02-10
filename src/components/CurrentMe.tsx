import { motion } from "framer-motion";

const currentMe = [
    {
        title: "Ingeniería + Datos",
        description:
            "Estudiante de ingeniería con enfoque en desarrollo de software y ciencia de datos. Trabajo principalmente con backend, bases de datos y análisis.",
        tags: ["Java", "Python", "Spring Boot", "Flask"],
        metric: "Full-Stack",
    },
    {
        title: "Construcción de Proyectos",
        description:
            "Desarrollo proyectos reales desde cero: apps móviles, sistemas web y prototipos con enfoque en impacto social y escalabilidad.",
        tags: ["React", "React Native", "MySQL", "Docker"],
        metric: "+10 proyectos",
    },
    {
        title: "Aprendizaje Constante",
        description:
            "Me enfoco en aprender fundamentos sólidos: estructuras de datos, matemáticas, arquitectura y buenas prácticas.",
        tags: ["DSA", "POO", "Clean Code", "Git"],
        metric: "Daily learner",
    },
];

const CurrentMeSection = () => {
    return (
        <section id="yo-actual" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Yo</span> actualmente
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        En qué estoy enfocado hoy y cómo construyo mis proyectos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {currentMe.map((item, i) => (
                        <motion.article
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative p-8 rounded-xl glass hover:glow-border transition-all"
                        >
                            <div className="absolute top-6 right-6 font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {item.metric}
                            </div>

                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="font-mono text-xs px-3 py-1 rounded-md bg-secondary"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurrentMeSection;
