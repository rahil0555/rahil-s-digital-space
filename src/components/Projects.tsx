import { ExternalLink, Github, Sparkles } from "lucide-react";

type ProjectStatus = "live" | "progress" | "concept";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: ProjectStatus;
  statusLabel: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Tutor Platform",
    description: "An intelligent tutoring system that adapts to each student's learning style. Uses AI to provide personalized lessons, instant feedback, and progress tracking.",
    tech: ["React", "Python", "OpenAI", "PostgreSQL"],
    status: "progress",
    statusLabel: "In Development",
    featured: true,
  },
  {
    title: "EdTech SaaS Dashboard",
    description: "Analytics and management platform for educational institutions. Real-time insights, student performance tracking, and AI-powered recommendations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    status: "progress",
    statusLabel: "Building",
    github: "#",
  },
  {
    title: "Fashion AI (Outfit Rating & Styling Assistant)",
    description: "An AI-powered fashion analysis system where users upload a photo of their outfit.\nThe system evaluates the outfit based on color harmony, fit, trends, and overall styling, then provides a rating along with actionable suggestions to improve the look.",
    tech: ["React", "Python", "Computer Vision", "OpenAI", "ML"],
    status: "concept",
    statusLabel: "Concept",
  },
  {
    title: "Perfume Vending Machine (IoT-based)",
    description: "An automated perfume vending machine that dispenses a single perfume spray when a user inserts ₹10.\nThe system uses embedded hardware to control spray quantity, handle payments, and ensure consistent delivery per transaction.",
    tech: ["ESP8266", "IoT", "Embedded Systems", "Servo", "Sensors"],
    status: "progress",
    statusLabel: "in progress",
    demo: "#",
    github: "#",
  },
  {
    title: "Zap Mail (Secure & Encrypted Email System)",
    description: "A privacy-focused email platform designed to eliminate spam and unauthorized access.\nZap Mail uses strong encryption and controlled communication channels to ensure users only receive trusted, verified emails.",
    tech: ["React", "Cryptography", "Secure Auth", "Backend APIs"],
    status: "concept",
    statusLabel: "Exploring",
  },
  {
    title: "Rescue Lane (Smart Traffic Control for Ambulances)",
    description: "A smart traffic management device designed for emergency vehicles.\nAmbulances are equipped with a remote that, when activated within a 1–2 km range, automatically turns upcoming traffic signals green while stopping cross traffic—ensuring a clear rescue lane.",
    tech: ["IoT", "RF / Wireless", "Embedded Systems", "Smart Cities"],
    status: "concept",
    statusLabel: "Concept validation stage",
  },
];

const getStatusStyles = (status: ProjectStatus) => {
  switch (status) {
    case "live":
      return "status-badge live";
    case "progress":
      return "status-badge progress";
    case "concept":
      return "status-badge concept";
  }
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building AI-powered products and experiments. From education platforms to developer tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group card-gradient border border-border rounded-2xl p-6 hover-lift ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={getStatusStyles(project.status)}>
                  {project.status === "live" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  {project.statusLabel}
                </div>
                {project.featured && (
                  <div className="flex items-center gap-1 text-xs text-primary">
                    <Sparkles size={12} />
                    Featured
                  </div>
                )}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-sm text-muted-foreground/50 italic">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
