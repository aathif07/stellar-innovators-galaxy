
import { StarField } from '@/components/ui/star-field';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { SectionHeading } from '@/components/ui/section-heading';
import { Rocket, Satellite, Globe, Database } from 'lucide-react';

const Career = () => {
  return (
    <div className="min-h-screen bg-space-black overflow-x-hidden">
      {/* Enhanced Animated Star Background with shooting stars */}
      <StarField starCount={250} glowIntensity={3.5} shootingStarFrequency={0.05} />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            overline="Join Our Team"
            title="Career Opportunities at Stellarix Space"
            description="Be part of the future of space technology and help expand humanity's reach beyond Earth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Career 1 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <Satellite className="text-stellar-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Satellite Engineer</h3>
              <p className="text-white/70 mb-4">
                Design and develop cutting-edge satellite systems for various orbital applications and space missions.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: 3-5 years</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Career 2 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <Rocket className="text-stellar-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mission Specialist</h3>
              <p className="text-white/70 mb-4">
                Plan and coordinate space missions including payload integration and mission operations.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: 2-4 years</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Career 3 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <Globe className="text-stellar-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Space Agriculture Researcher</h3>
              <p className="text-white/70 mb-4">
                Research and develop innovative solutions for microgravity cultivation and space farming.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: 1-3 years</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Career 4 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <Database className="text-stellar-blue w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Scientist</h3>
              <p className="text-white/70 mb-4">
                Analyze space data and develop machine learning models for satellite imagery and mission data.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: 2-5 years</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Career 5 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <svg className="text-stellar-blue w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Research Intern</h3>
              <p className="text-white/70 mb-4">
                Join our research team and contribute to cutting-edge space technology development projects.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: Fresh Graduate</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Career 6 */}
            <div className="glass-card p-8 rounded-lg transition-transform hover:translate-y-[-8px] duration-300">
              <div className="w-14 h-14 rounded-full bg-stellar-blue/20 flex items-center justify-center mb-6">
                <svg className="text-stellar-blue w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Project Manager</h3>
              <p className="text-white/70 mb-4">
                Lead cross-functional teams to deliver space technology projects on time and within budget.
              </p>
              <div className="mb-4">
                <span className="text-sm text-stellar-blue font-medium">Experience: 5+ years</span>
              </div>
              <a href="#" className="text-stellar-blue hover:text-stellar-blue/80 font-medium flex items-center">
                Apply Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Join Our Mission?</h3>
            <a href="#contact" className="px-8 py-3 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px] inline-block">
              Submit Your Application
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;
