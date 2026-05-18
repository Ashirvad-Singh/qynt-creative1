import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { FinalCTA } from "../components/FinalCTA";
import { Button } from "../components/ui/button";

const posts = [
  {
    id: 1,
    title: "Professional Web Design 2025: The Ultimate Guide",
    category: "Design",
    date: "15 Jan, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
    author: "Karim Bilin",
    featured: true,
    excerpt: "Modern web design is more than just beautiful optics. Learn what really matters and how to transform your website into a high-performance machine."
  },
  {
    id: 2,
    title: "Responsive Web Design: Mobile-First Strategy for 2025",
    category: "Development",
    date: "20 Jan, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    excerpt: "Why mobile-first design is no longer optional but critical for your digital success."
  },
  {
    id: 3,
    title: "SEO Agent: How to Rank at the Top of Google",
    category: "Marketing",
    date: "25 Jan, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    excerpt: "Professional search engine optimization for your business."
  },
  {
    id: 4,
    title: "UI/UX Design: Digital Experiences that Convert",
    category: "Design",
    date: "28 Jan, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    excerpt: "Good design is invisible. Learn why UI/UX design is crucial for conversions."
  },
  {
    id: 5,
    title: "Web Development: Frontend, Backend & Full Stack",
    category: "Tech",
    date: "30 Jan, 2025",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    excerpt: "Modern web development combines design and technology."
  }
];

export function Blog() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-accent-green/5 text-accent-green text-[10px] font-black uppercase tracking-widest mb-6"
          >
            Qynt Blog
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9] mb-8"
          >
            Insights & <br />
            <span className="text-muted-foreground">Expertise.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl"
          >
            Practical knowledge on web design, development and digital marketing. From experts for entrepreneurs.
          </motion.p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#f9f9f9] border border-black/5 rounded-[48px] overflow-hidden mb-24 transition-all duration-500 hover:shadow-2xl hover:border-black/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-accent-green text-white text-[10px] font-black uppercase tracking-widest">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold">
                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold">
                    <Clock className="w-4 h-4" /> {featuredPost.readTime}
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter leading-tight mb-6 group-hover:text-accent-blue transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl text-muted-foreground font-medium mb-10 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue font-bold text-sm">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <span className="font-bold text-sm">by {featuredPost.author}</span>
                  </div>
                  <Link to="#" className="flex items-center gap-2 font-black text-sm uppercase tracking-widest group/link">
                    Read more <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden mb-8 border border-black/5 relative shadow-lg">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest border border-black/5">
                  {post.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</div>
                  <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</div>
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold tracking-tight leading-snug mb-4 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground font-medium text-sm line-clamp-2 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link to="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] group/btn">
                  Continue Reading <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Articles Soon */}
        <div className="mt-40 text-center">
          <h3 className="text-3xl font-heading font-black tracking-tighter mb-4">More articles coming soon</h3>
          <p className="text-muted-foreground font-medium mb-8">We work on more exciting content to help you grow your business.</p>
          <Button 
            render={<Link to="/contact" />}
            nativeButton={false}
            className="bg-[#1a1a1a] rounded-xl h-14 px-8 font-bold flex items-center gap-2 hover:bg-black transition-all group"
          >
            Subscribe to Newsletter <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
      
      <FinalCTA />
    </div>
  );
}
