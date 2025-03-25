import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { pageTransition, fadeIn } from '@/lib/animations';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BLOG_POSTS } from '@/lib/constants';
import BlogCard from '@/components/ui/BlogCard';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const [post, setPost] = useState<typeof BLOG_POSTS[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof BLOG_POSTS>([]);
  
  useEffect(() => {
    if (params && params.slug) {
      const foundPost = BLOG_POSTS.find(p => p.slug === params.slug);
      if (foundPost) {
        setPost(foundPost);
        
        // Get related posts from the same category
        const related = BLOG_POSTS
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [params]);
  
  if (!post) {
    return (
      <div className="pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <a className="text-[var(--brand-primary)] hover:underline">Back to blog</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      className="pt-24"
    >
      <section className="py-12 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <Link href="/blog">
              <a className="inline-flex items-center text-gray-400 hover:text-[var(--brand-primary)] mb-6">
                <ChevronLeft className="w-4 h-4 mr-2" />
                <span>Back to all articles</span>
              </a>
            </Link>
            
            <div className="flex items-center mb-4">
              <span className="bg-[var(--brand-primary)] text-white text-xs font-medium px-2 py-1 rounded-md">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-gray-400 ml-4">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8">
              <img 
                src={post.author.image} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover mr-4" 
                loading="lazy" 
              />
              <div>
                <h4 className="font-bold">{post.author.name}</h4>
                <p className="text-sm text-gray-400">Author</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Image */}
      <AnimatedSection className="relative h-64 md:h-96">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-30"></div>
      </AnimatedSection>
      
      {/* Blog Content */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="prose prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </AnimatedSection>
            
            {/* Share Links */}
            <AnimatedSection className="mt-12 flex flex-wrap gap-4 justify-center">
              <p className="w-full text-center text-gray-400 mb-2">Share this article</p>
              <motion.a 
                href="#"
                className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors duration-300"
                aria-label="Share on Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a 
                href="#"
                className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors duration-300"
                aria-label="Share on LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a 
                href="#"
                className="w-10 h-10 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-colors duration-300"
                aria-label="Share on Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
            </AnimatedSection>
            
            {/* Author Bio */}
            <AnimatedSection className="mt-12 bg-[#111111] p-8 rounded-lg border border-white/10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src={post.author.image} 
                  alt={post.author.name} 
                  className="w-24 h-24 rounded-full object-cover" 
                  loading="lazy" 
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.author.name}</h3>
                  <p className="text-gray-400 mb-4">
                    Marketing strategist with 15+ years of experience in digital transformation. 
                    Specializes in SEO, content marketing, and data-driven strategies that deliver measurable results.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[var(--brand-primary)] hover:underline">
                      <i className="fab fa-twitter mr-1"></i>
                      Twitter
                    </a>
                    <a href="#" className="text-[var(--brand-primary)] hover:underline">
                      <i className="fab fa-linkedin-in mr-1"></i>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Navigation between posts */}
            <AnimatedSection className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
              <Link href="/blog/seo-best-practices-2023">
                <a className="bg-[#111111] p-4 rounded-lg border border-white/10 flex items-center hover:border-[var(--brand-primary)] transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-400">Previous</p>
                    <p className="font-medium truncate max-w-[200px]">SEO Best Practices 2023</p>
                  </div>
                </a>
              </Link>
              
              <Link href="/blog/future-social-media-marketing-trends">
                <a className="bg-[#111111] p-4 rounded-lg border border-white/10 flex items-center text-right hover:border-[var(--brand-primary)] transition-colors">
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Next</p>
                    <p className="font-medium truncate max-w-[200px]">Future of Social Media Marketing</p>
                  </div>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[#111111]">
          <div className="container mx-auto px-4 md:px-8">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">Related Articles</h2>
              <p className="text-gray-400">You might also be interested in these posts</p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                  <BlogCard {...relatedPost} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}
