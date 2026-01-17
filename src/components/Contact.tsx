import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center rounded-3xl border border-border bg-background/50 backdrop-blur-xl p-12 shadow-lg">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Mail size={26} />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">
            Let’s Build <span className="text-primary">Together</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Got an idea for an AI project? Want to collaborate on something
            exciting? Or just want to chat about startups and tech? I’d love to
            hear from you.
          </p>

          {/* Gmail Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rahilnisar476@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-glow text-lg"
            >
              <Mail size={22} />
              Email Me
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Footer */}
          <p className="mt-6 text-sm text-muted-foreground">
            Usually respond within 24 hours
          </p>

        </div>
      </div>
    </section>
  );
}
