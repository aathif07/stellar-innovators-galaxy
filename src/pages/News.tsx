
import { StarField } from '@/components/ui/star-field';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { format } from 'date-fns';

const News = () => {
  const newsArticles = [
    {
      title: "Stellarix Space Announces Major Satellite Manufacturing Contract",
      excerpt: "Our company has secured a significant contract to manufacture 50 nanosatellites for global IoT connectivity, marking a major milestone in our growth.",
      author: "Press Team",
      date: new Date("2023-11-15"),
      category: "Company News",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Breakthrough in Microgravity Plant Cultivation Research",
      excerpt: "Our research team has achieved significant advances in growing food in space environments, bringing us closer to sustainable long-duration space missions.",
      author: "Dr. Priya Sharma",
      date: new Date("2023-10-28"),
      category: "Research",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Stellarix Space Wins Innovation Award for Earth Observation Technology",
      excerpt: "Recognition for our miniaturized satellite technology and its impact on climate monitoring and disaster response capabilities.",
      author: "Raj Patel",
      date: new Date("2023-10-10"),
      category: "Awards",
      image: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "New Partnership for Sustainable Space Technology Development",
      excerpt: "Stellarix Space partners with leading environmental organizations to develop solutions for space debris mitigation and responsible satellite design.",
      author: "Sunita Rao",
      date: new Date("2023-09-22"),
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-space-black overflow-x-hidden">
      {/* Enhanced Animated Star Background with shooting stars */}
      <StarField starCount={250} glowIntensity={3} shootingStarFrequency={0.05} />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            overline="Latest Updates"
            title="Stellarix Space News"
            description="Stay updated with the latest news, achievements, and developments from our space technology team."
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="glass-card rounded-lg overflow-hidden group transition-transform hover:translate-y-[-8px] duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-stellar-blue/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full text-white">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-stellar-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-stellar-blue to-stellar-cyan flex items-center justify-center text-white text-xs font-bold">
                        {article.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <span className="ml-2 text-sm text-white/80">{article.author}</span>
                    </div>
                    <span className="text-white/60 text-sm">
                      {format(article.date, 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>
                
                <a href="#" className="absolute inset-0" aria-label={`Read more about ${article.title}`}></a>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a href="#" className="px-6 py-2 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 text-white font-medium transition-all hover:translate-y-[-2px]">
              View All News
            </a>
          </div>
          
          <div className="mt-20 glass-card p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-white/70">
                  Stay updated with the latest news, research findings, and company announcements.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex flex-col sm:flex-row">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:border-stellar-blue mb-3 sm:mb-0 sm:mr-3"
                  />
                  <button className="px-6 py-2 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default News;
