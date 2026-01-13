import { Sparkles, Zap, Target, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    label: "AI Education",
    description: "Building platforms that personalize learning",
  },
  {
    icon: Zap,
    label: "Fast Shipper",
    description: "From idea to product in record time",
  },
  {
    icon: Target,
    label: "Problem First",
    description: "Solutions driven by real user needs",
  },
  {
    icon: Code2,
    label: "Full Stack",
    description: "Frontend, backend & system design",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A startup builder on a mission to transform education through AI.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p>
              I'm a <span className="text-foreground font-medium">startup founder</span> and{" "}
              <span className="text-foreground font-medium">product engineer</span> obsessed with 
              building AI systems that actually solve problems. My current focus? Replacing 
              outdated education models with intelligent, adaptive platforms.
            </p>
            <p>
              I believe traditional tutoring and classroom systems are due for disruption. 
              That's why I'm building <span className="text-gradient font-semibold">AI-first education tools</span>—
              systems that understand how each student learns and adapt in real-time.
            </p>
            <p>
              My approach combines <span className="text-foreground font-medium">frontend craft</span>,{" "}
              <span className="text-foreground font-medium">backend architecture</span>, and{" "}
              <span className="text-foreground font-medium">product thinking</span> to ship 
              experiences that users love. I don't just write code—I build products.
            </p>
          </div>
          
          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group card-gradient border border-border rounded-xl p-5 hover-lift"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
