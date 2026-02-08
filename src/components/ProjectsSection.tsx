import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Predicción de Churn",
    description: "Modelo de ML que predice la pérdida de clientes con 94% de precisión usando XGBoost y feature engineering avanzado.",
    tags: ["Python", "XGBoost", "Pandas", "SHAP"],
    metric: "94% accuracy",
  },
  {
    title: "NLP Sentiment Analysis",
    description: "Pipeline de procesamiento de lenguaje natural para análisis de sentimientos en redes sociales en tiempo real.",
    tags: ["Transformers", "BERT", "FastAPI", "Docker"],
    metric: "50K tweets/hr",
  },
  {
    title: "Dashboard de Ventas",
    description: "Plataforma interactiva de visualización con pronósticos de series temporales y detección de anomalías.",
    tags: ["Plotly", "Prophet", "Streamlit", "SQL"],
    metric: "Real-time",
  },
  {
    title: "Segmentación de Clientes",
    description: "Sistema de clustering no supervisado para segmentar una base de +1M de clientes en grupos accionables.",
    tags: ["K-Means", "PCA", "Scikit-learn", "AWS"],
    metric: "1M+ users",
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Proyectos</span> Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Una selección de proyectos que demuestran mi enfoque en soluciones basadas en datos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-xl glass hover:glow-border transition-all duration-300"
            >
              {/* Metric badge */}
              <div className="absolute top-6 right-6 font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {project.metric}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" /> Código
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
