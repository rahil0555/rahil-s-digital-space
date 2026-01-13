import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary top-20 -left-48 pulse-glow" />
      <div className="floating-orb w-80 h-80 bg-[hsl(280,85%,60%)] bottom-20 -right-40 pulse-glow" style={{ animationDelay: '-5s' }} />
      <div className="floating-orb w-64 h-64 bg-[hsl(200,90%,60%)] top-1/2 left-1/3 pulse-glow" style={{ animationDelay: '-10s' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in" style={{ animationDelay: "0s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hi, I'm <span className="text-gradient">Rahil Nisar</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AI-focused Builder • Product Engineer • Startup Founder
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.3s" }}>
          I build AI-driven education platforms and software products that replace 
          traditional systems with scalable, intelligent solutions. Currently crafting 
          the future of learning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-glow hover:shadow-glow-sm"
          >
            <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 glass px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all"
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm">Scroll to explore</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
