import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, MessageCircle, Instagram, X, ArrowUpRight } from "lucide-react";

interface Post {
  id: number;
  image: string;
  category: string;
  likes: string;
  comments: string;
  caption: string;
  details: string;
}

const instagramPosts: Post[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    category: "Raghav Sharma Photography",
    likes: "2,450",
    comments: "142",
    caption: "Chasing shadows in northern peaks. Award-winning landscape study by Raghav Sharma.",
    details: "Captured on medium format film. Winner of the International Visual Arts Association Landscape Gold Award, emphasizing contrast and raw natural geometry."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    category: "Branding Campaign",
    likes: "1,890",
    comments: "98",
    caption: "Product geometry & styling for active lifestyle brands. Qynt Creatives studio capture.",
    details: "Commercial brand shoot for lifestyle client catalog. Designed to highlight high-speed agility and industrial product texture under soft-box studio lighting."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop",
    category: "Photography Showcase",
    likes: "3,120",
    comments: "205",
    caption: "Whispers of the city: A study of vintage architectural curves. Captured by Raghav Sharma.",
    details: "Part of the 'Hidden Noida' structural layout series. Awarded best editorial photography for highlighting mid-century details against modern high-rises."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1000&auto=format&fit=crop",
    category: "Creative Campaign",
    likes: "1,540",
    comments: "72",
    caption: "Sensory design moodboards. Translating acoustics and brand narratives visually.",
    details: "Visual art development for client product rollout, establishing tone guidelines, typographic layouts, and structural textures."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    category: "Concert Visuals",
    likes: "2,840",
    comments: "180",
    caption: "Sound & Light: The energy of Metal Cat Music campaign shoot. Captured by Raghav Sharma.",
    details: "Live-action soundstage capture documenting performance acoustics, stage presence, and volumetric lighting arrays for the artist album release."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    category: "Digital Transformation",
    likes: "1,720",
    comments: "64",
    caption: "Modern software meets creative scale. A visual journey of digital systems.",
    details: "Visual branding campaign representing secure web architectures and futuristic enterprise systems engineered by Qynt Creatives."
  }
];

export function InstagramFeed() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  return (
    <section id="instagram-feed" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-black/40 font-black uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-black/40" />
              Creative Grid
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-black">
              INSTAGRAM CORNER
            </h2>
          </div>
          
          <motion.a
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 h-12 rounded-full border border-black/10 text-xs font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all group"
          >
            <Instagram className="w-4 h-4" />
            Follow @qyntcreatives
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setActivePost(post)}
              className="group relative aspect-square rounded-[32px] overflow-hidden bg-black cursor-pointer border border-black/5"
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8 text-white z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  {post.category}
                </span>
                
                <p className="text-sm font-medium leading-relaxed line-clamp-3">
                  {post.caption}
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Post Detailed Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[40px] max-w-4xl w-full overflow-hidden shadow-2xl relative grid grid-cols-1 md:grid-cols-2"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-black" />
              </button>

              {/* Left Side: Image */}
              <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-black">
                <img 
                  src={activePost.image} 
                  alt={activePost.caption}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Side: Details */}
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full bg-white">
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 block">
                    {activePost.category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-heading font-black leading-tight text-black">
                    {activePost.caption}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {activePost.details}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-8">
                  <div className="flex items-center gap-6 text-xs font-black uppercase tracking-wider text-black">
                    <span className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-black" />
                      {activePost.likes} Likes
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-black" />
                      {activePost.comments} Comments
                    </span>
                  </div>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
