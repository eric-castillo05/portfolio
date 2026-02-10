import { motion } from "framer-motion";

const hobbies = [
    {
        title: "Programar por gusto",
        description:
            "Disfruto construir cosas fuera de la escuela: automatizaciones, ideas locas y prototipos solo por aprender.",
        tags: ["Side Projects", "APIs", "Hackathons"],
    },
    {
        title: "Aprender cosas nuevas",
        description:
            "Me gusta explorar temas fuera del stack principal: IA, grafos, optimización y sistemas distribuidos.",
        tags: ["AI", "Graph DB", "Algorithms"],
    },
    {
        title: "Compartir conocimiento",
        description:
            "Participo en clubs y equipos, ayudando a otros a entender programación y resolver problemas.",
        tags: ["Mentoring", "Clubs", "Teamwork"],
    },
];

const HobbiesSection = () => {
    return (
        <section id="hobbies" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Hobbies</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Lo que hago cuando no es obligación… pero igual programo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {hobbies.map((hobby, i) => (
                        <motion.article
                            key={hobby.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-xl glass hover:glow-border transition-all"
                        >
                            <h3 className="text-xl font-bold mb-4">{hobby.title}</h3>
                            <p className="text-muted-foreground mb-6">
                                {hobby.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {hobby.tags.map(tag => (
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

export default HobbiesSection;