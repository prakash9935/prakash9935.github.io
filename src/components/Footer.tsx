const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Surya Prakash Geesala. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Skills
            </a>
            <a
              href="#blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
