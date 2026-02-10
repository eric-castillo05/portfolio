import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:ericcastillo005@gmail.com", text: "ericcastillo005@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "#", text: "linkedin.com/in/eric-benitez-castillo" },
  { icon: Github, label: "GitHub", href: "#", text: "github.com/eric-castillo05" },
  { icon: FileText, label: "CV", href: "#", text: "Descargar CV" },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Hablemos</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            ¿Tienes un proyecto interesante o una oportunidad? Me encantaría saber de ti.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-xl glass hover:glow-border transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-mono text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{link.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
