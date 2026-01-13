import { Zap, Bot, Layers } from "lucide-react";

const philosophies = [
  {
    icon: Zap,
    title: "Build Fast, Learn Faster",
    description:
      "Speed is a feature. I ship MVPs in days, not months. Every launch is a learning opportunity, and every failure teaches something textbooks can't.",
    quote: "\"Done is better than perfect—but shipped is better than both.\"",
  },
  {
    icon: Bot,
    title: "AI Should Replace Friction, Not Humans",
    description:
      "AI isn't about replacing people—it's about removing the tedious parts so humans can focus on what matters. I build AI that augments, not replaces.",
    quote: "\"Technology should feel like magic, not homework.\"",
  },
  {
    icon: Layers,
    title: "Simple Systems Scale Better",
    description:
      "Complexity is the enemy of execution. I design systems that are easy to understand, maintain, and scale. The best architecture is the one you don't notice.",
    quote: "\"If you can't explain it simply, you don't understand it well enough.\"",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide how I build products and solve problems.
          </p>
        </div>
        
        <div className="space-y-8">
          {philosophies.map((item, index) => (
            <div
              key={item.title}
              className="group card-gradient border border-border rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon size={28} className="text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-sm text-primary italic">
                    {item.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
