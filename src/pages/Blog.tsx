import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "rise-of-agentic-ai",
    tag: "Agentic AI",
    date: "February 2025",
    readTime: "6 min read",
    title: "The Rise of Agentic AI: Beyond Chatbots to Autonomous Systems",
    excerpt:
      "Most AI discussions focus on conversational AI. But the real enterprise revolution is happening at the agent layer — autonomous systems that reason, plan, and act across complex workflows without human intervention at every step.",
  },
  {
    slug: "multi-agent-orchestration",
    tag: "Agentic AI",
    date: "January 2025",
    readTime: "8 min read",
    title: "Multi-Agent Orchestration: How Enterprise AI Systems Actually Work",
    excerpt:
      "A single AI model is powerful. A coordinated fleet of specialized agents is transformational. We break down the architecture behind multi-agent systems — and why it matters for healthcare and financial operations.",
  },
  {
    slug: "federated-learning-healthcare",
    tag: "Healthcare AI",
    date: "December 2024",
    readTime: "7 min read",
    title: "Federated Machine Learning in Healthcare: Privacy-First Intelligence",
    excerpt:
      "Healthcare AI faces a fundamental tension: the best models need the most data, but patient data can't move freely. Federated learning resolves this by training models where the data lives instead of centralizing sensitive records.",
  },
  {
    slug: "ai-strategy-audit",
    tag: "Strategy",
    date: "November 2024",
    readTime: "5 min read",
    title: "Why Your AI Strategy Needs a Reality Check Before Scaling",
    excerpt:
      "Most enterprises that struggle with AI do so not because the technology isn't ready — but because they scale before they've validated their readiness. A rigorous AI strategy audit changes that equation.",
  },
  {
    slug: "autonomous-finance-ops",
    tag: "Finance AI",
    date: "October 2024",
    readTime: "6 min read",
    title: "Autonomous Finance Operations: AI That Works While You Sleep",
    excerpt:
      "From reconciliation to anomaly detection to regulatory reporting — agentic AI is quietly transforming the back office of financial services. Here's what that actually looks like in production.",
  },
  {
    slug: "building-ai-products",
    tag: "Product Strategy",
    date: "September 2024",
    readTime: "9 min read",
    title: "Building AI Products That Enterprise Clients Will Actually Use",
    excerpt:
      "Consumer AI products succeed on delight. Enterprise AI products succeed on reliability, auditability, and measurable ROI. The design principles are fundamentally different — and most AI teams get this wrong.",
  },
];

const tagColors: Record<string, string> = {
  "Agentic AI": "bg-accent/10 text-accent",
  "Healthcare AI": "bg-blue-50 text-blue-700",
  "Finance AI": "bg-emerald-50 text-emerald-700",
  Strategy: "bg-purple-50 text-purple-700",
  "Product Strategy": "bg-orange-50 text-orange-700",
};

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-20 pt-32 text-center">
        <div className="section-container max-w-3xl mx-auto">
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Insights & Perspectives
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            The Prism Blog
          </h1>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Practical thinking on Agentic AI, enterprise strategy, and the
            future of autonomous intelligence — written for operators, not
            observers.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Colored accent bar */}
                <div className="h-1 bg-accent w-full" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Tag + meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        tagColors[post.tag] ?? "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {post.tag}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-accent text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Coming Soon <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming soon notice */}
          <div className="mt-16 text-center bg-muted rounded-2xl p-10 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Full articles coming soon
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We're building our editorial pipeline. Subscribe below or follow
              us on LinkedIn to be notified when the first articles go live.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Notified <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
