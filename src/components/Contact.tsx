import { Mail, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="card-gradient border border-border rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[hsl(280,85%,60%)]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail size={32} className="text-primary-foreground" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build <span className="text-gradient">Together</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Got an idea for an AI project? Want to collaborate on something exciting? 
              Or just want to chat about startups and tech? I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:rahilnisar@gmail.com"
                className="group inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-glow text-lg"
              >
                <Mail size={22} />
                Email Me
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">rahilnisar@gmail.com</span>
              <br />
              Usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
