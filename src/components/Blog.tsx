import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const blogPosts = [
  {
    title: "Four Ways We Authenticate in a Zero-Trust World",
    excerpt: "Understanding how systems verify identity in a zero-trust world — a practical guide to cookies, mTLS, and OpenID Connect.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Identity", "Zero Trust", "Authn"],
    url: "https://medium.com/@suryaprakashgeesala/authentication-mechanisms-d1d9cb97f36e",
  },
  {
    title: "5 Surprising Lessons from the World of AppSec",
    excerpt: "A personal take on what most people get wrong about application security and what actually keeps systems safe today",
    date: "2024-11-28",
    readTime: "10 min read",
    tags: ["Application Security","CI/CD", "Security Engineering"],
    url: "https://medium.com/@suryaprakashgeesala/5-surprising-lessons-from-the-world-of-appsec-1141ddf3256e",
  },
  {
    title: "OSCP Journey: From Beginner to Certified Professional",
    excerpt: "My complete OSCP preparation guide covering study materials, lab strategies, and exam-day tips. Everything you need to know to pass on your first attempt.",
    date: "2024-10-20",
    readTime: "5 min read",
    tags: ["Certifications", "OSCP", "Career"],
    url: "https://medium.com/@suryaprakashgeesala/oscp-journey-and-everything-else-c7b806906f5b",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-sm font-semibold text-primary mb-4 tracking-wide">
                BLOG & INSIGHTS
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold">Latest Writings</h3>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full hidden md:flex items-center gap-2"
              asChild
            >
              <a href="https://medium.com/@suryaprakashgeesala" target="_blank" rel="noopener noreferrer">
                View All Posts
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="glass rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-smooth group"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h4>

                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-smooth"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full flex items-center gap-2"
              asChild
            >
              <a href="https://medium.com/@suryaprakashgeesala" target="_blank" rel="noopener noreferrer">
                View All Posts
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
