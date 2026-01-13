import { Code, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "REST APIs", "Supabase"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AI & Product",
    skills: ["Prompt Engineering", "OpenAI API", "LangChain", "Product Thinking", "User Research", "Rapid Prototyping"],
    color: "from-primary to-[hsl(280,85%,60%)]",
  },
  {
    icon: Wrench,
    title: "Tools & More",
    skills: ["Git & GitHub", "VS Code", "Figma", "Vercel", "API Integration", "Agile/Scrum"],
    color: "from-orange-500 to-amber-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A versatile toolkit spanning frontend craft, backend systems, and AI integration.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group card-gradient border border-border rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-lg transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
