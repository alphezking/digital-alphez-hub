import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, stripHtml, getFeaturedImageUrl, getAuthorName, type WPPost } from "@/lib/wordpress";

const BlogDynamic = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['wordpress-posts'],
    queryFn: () => fetchPosts({ per_page: 6 }),
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-4" variant="outline">Blog</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Loading...</h2>
          </div>
        </div>
      </section>
    );
  }

  if (error || !posts || posts.length === 0) {
    return (
      <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Badge className="mb-4" variant="outline">Blog</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              No posts available. Configure your WordPress connection.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Badge className="mb-4" variant="outline">Blog</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Stay updated with our latest thoughts and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => {
            const imageUrl = getFeaturedImageUrl(post);
            const excerpt = stripHtml(post.excerpt.rendered);
            const author = getAuthorName(post);
            const date = new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });

            return (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title.rendered}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogDynamic;
