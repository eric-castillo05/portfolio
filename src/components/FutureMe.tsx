import { motion } from "framer-motion";

const futureMe = [
    {
        title: "Ingeniero de Software Senior",
        description:
            "Quiero diseñar sistemas robustos, escalables y con impacto real en personas y empresas.",
        metric: "Backend / Data",
    },
    {
        title: "Especialista en Datos",
        description:
            "Aplicar ciencia de datos y ML para resolver problemas reales, no solo entrenar modelos.",
        metric: "ML aplicado",
    },
    {
        title: "Líder Técnico",
        description:
            "Guiar equipos, tomar decisiones de arquitectura y ayudar a otros a crecer.",
        metric: "Tech Lead",
    },
];

const FutureMeSection = () => {
    return (
        <section id="yo-futuro" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Yo</span> en el futuro
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Hacia dónde quiero llevar mi carrera.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {futureMe.map((item, i) => (
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
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureMeSection;