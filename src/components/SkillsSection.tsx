import { motion } from "framer-motion";
import { Brain, BarChart3, Database, Code2, LineChart, Cpu, Cloud, GitBranch, Trophy } from "lucide-react";

const skills = [
  { icon: Brain, label: "Machine Learning", tools: "TensorFlow, PyTorch, Scikit-learn" },
  { icon: BarChart3, label: "Visualización", tools: "Matplotlib, Plotly, Tableau" },
  { icon: Database, label: "Big Data", tools: "Spark, Hadoop, SQL" },
  { icon: Code2, label: "Programación", tools: "Python, C++, R" },
  { icon: Cpu, label: "Deep Learning", tools: "CNNs, RNNs, Transformers" },
  { icon: Cloud, label: "Cloud & DevOps", tools: "AWS, Docker, Kubernetes, Terraform" },
  { icon: GitBranch, label: "CI/CD", tools: "GitHub Actions, Jenkins, ArgoCD" },
  { icon: LineChart, label: "Monitoreo", tools: "Prometheus, Grafana, ELK Stack" },
  { icon: Trophy, label: "ICPC / Competitiva", tools: "Algoritmos, Estructuras de Datos, C++" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Habilidades</span> & Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Herramientas y tecnologías que domino para extraer valor de los datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl glass hover:glow-border transition-all duration-300"
            >
              <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-1">{skill.label}</h3>
              <p className="font-mono text-sm text-muted-foreground">{skill.tools}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
