import { Mail, Globe } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-card border-t border-border py-12 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <p className="text-foreground font-semibold text-lg mb-2">
          Questions about Frontdesk?
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Email us at{" "}
          <a href="mailto:info@creativehauz.space" className="text-teal hover:underline">
            info@creativehauz.space
          </a>{" "}
          and we'll get back to you within one business day.
        </p>
      </div>

      <div>
        <h3 className="text-foreground font-semibold text-lg mb-3">Contact</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal" />
            Email:{" "}
            <a href="mailto:info@creativehauz.space" className="text-teal hover:underline">
              info@creativehauz.space
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal" />
            Website:{" "}
            <a href="https://creativehauz.space" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
              creativehauz.space
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Frontdesk by CreativeHauz. All rights reserved.
    </div>
  </footer>
);

export default FooterSection;
