import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { FileText } from "lucide-react";

const CV_URL =
  "https://drive.google.com/file/d/1XP_mqfTVji2O0_JZ6Fnad6V9ctwM7DWm/view?usp=sharing";
const GITHUB_URL = "https://github.com/imrealjo37";
const LINKEDIN_URL = "https://linkedin.com/in/jood-khamjan-bb91aa31a";
const EMAIL = "mailto:khamjanjood.ai@gmail.com";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="glass-card relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        {/* LOGO */}
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-gradient"
        >
          Jood
        </Link>

        {/* CENTER NAVIGATION */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 text-sm text-muted-foreground md:flex">
          <a
            href="/#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </a>

          <a
            href="/#about"
            className="transition-colors hover:text-foreground"
          >
            About
          </a>

          <a
            href="/#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-1">
          <IconLink href={GITHUB_URL} label="GitHub">
            <Github size={16} />
          </IconLink>

          <IconLink href={LINKEDIN_URL} label="LinkedIn">
            <Linkedin size={16} />
          </IconLink>

          <IconLink href={EMAIL} label="Email">
            <Mail size={16} />
          </IconLink>

          <a
            href={CV_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 hidden items-center gap-1.5 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-[var(--shadow-glow-soft)] transition-transform hover:scale-105 sm:inline-flex"
          >
            <FileText  size={14} />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noreferrer"}
      aria-label={label}
      className="rounded-full p-2 text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
    >
      {children}
    </a>
  );
}

