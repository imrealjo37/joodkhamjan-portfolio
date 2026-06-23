import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const CV_URL = "/cv.pdf"; // replace with real CV link
const GITHUB_URL = "https://github.com/";
const LINKEDIN_URL = "https://www.linkedin.com/";
const EMAIL = "mailto:hello@example.com";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass-card mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-gradient"
        >
          Jood
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="/#projects" className="transition-colors hover:text-foreground">Projects</a>
          <a href="/#about" className="transition-colors hover:text-foreground">About</a>
          <a href="/#contact" className="transition-colors hover:text-foreground">Contact</a>
        </div>

        <div className="flex items-center gap-1">
          <IconLink href={GITHUB_URL} label="GitHub"><Github size={16} /></IconLink>
          <IconLink href={LINKEDIN_URL} label="LinkedIn"><Linkedin size={16} /></IconLink>
          <IconLink href={EMAIL} label="Email"><Mail size={16} /></IconLink>
          <a
            href={CV_URL}
            download
            className="ml-2 hidden items-center gap-1.5 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow-soft)] transition-transform hover:scale-105 sm:inline-flex"
          >
            <Download size={14} /> CV
          </a>
        </div>
      </nav>
    </header>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full p-2 text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
    >
      {children}
    </a>
  );
}