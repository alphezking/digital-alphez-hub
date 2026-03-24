import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    { title: "5 Ways Local Businesses Can Succeed on Social Media", excerpt: "Discover proven strategies to build your brand and engage customers on social platforms effectively.", date: "March 15, 2025", readTime: "5 min read", category: "Social Media" },
    { title: "The Future of Digital Marketing in Africa", excerpt: "Explore emerging trends and opportunities shaping the digital landscape across African markets.", date: "March 10, 2025", readTime: "7 min read", category: "Digital Marketing" },
    { title: "How to Increase Your Music Plays Organically", excerpt: "Learn authentic methods to grow your streaming numbers without compromising your artistic integrity.", date: "March 5, 2025", readTime: "6 min read", category: "Music Promotion" }
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-xs font-semibold tracking-wider uppercase mb-4">Blog</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground mb-4 sm:mb-6 font-display">
            Digital <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-2">
            Tips, guides, and strategies for thriving in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/30 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors font-display">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
              <Button variant="ghost" className="w-full justify-between group-hover:text-primary rounded-full">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
