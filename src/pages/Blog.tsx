import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Business is Ready for a Merchant Cash Advance",
    excerpt: "Discover the key indicators that suggest your business could benefit from a merchant cash advance to fuel growth and manage cash flow effectively.",
    category: "Business Funding",
    author: "Michael Chen",
    date: "December 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 2,
    title: "How to Improve Your Business Credit Score in 2024",
    excerpt: "A strong business credit score opens doors to better financing options. Learn practical strategies to boost your score and unlock better funding terms.",
    category: "Credit Tips",
    author: "Sarah Williams",
    date: "December 3, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
  {
    id: 3,
    title: "Working Capital vs. Term Loans: Which is Right for Your Business?",
    excerpt: "Understanding the differences between working capital and term loans can help you make smarter financing decisions for your business needs.",
    category: "Funding Guide",
    author: "David Martinez",
    date: "November 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80"
  },
  {
    id: 4,
    title: "Seasonal Business? Here's How to Manage Cash Flow Year-Round",
    excerpt: "Seasonal fluctuations can strain your finances. Discover proven strategies to maintain healthy cash flow during slow periods and capitalize on peak seasons.",
    category: "Cash Flow",
    author: "Emily Rodriguez",
    date: "November 22, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    id: 5,
    title: "The Complete Guide to Equipment Financing for Small Businesses",
    excerpt: "From machinery to technology, learn how equipment financing can help you acquire essential assets without depleting your working capital.",
    category: "Equipment Financing",
    author: "James Thompson",
    date: "November 18, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
  },
  {
    id: 6,
    title: "Why Fast Funding Matters: The True Cost of Delayed Capital",
    excerpt: "Time is money in business. Explore how quick access to capital can make the difference between seizing opportunities and missing out.",
    category: "Business Growth",
    author: "Lisa Anderson",
    date: "November 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
              SkyCapital Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business Funding <span className="text-accent">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Expert insights, tips, and strategies to help your business grow and thrive with smart financing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-8">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-elevated group">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-secondary font-semibold text-sm mb-3">{blogPosts[0].category}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <Button variant="default" className="w-fit">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article 
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated with Business Insights
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest funding tips, industry news, and growth strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-80"
              />
              <Button variant="default" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;