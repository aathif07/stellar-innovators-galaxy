import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-darker via-space-blue/50 to-space-purple/30"></div>
        
        {/* Outer orbital path (blue) - Enhanced */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-stellar-blue rounded-full"
          style={{
            animation: 'rotate 30s linear infinite',
            boxShadow: '0 0 40px rgba(63, 135, 255, 0.3)',
            opacity: 0.5
          }}
        >
          {/* Rocket on outer orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'rotate 30s linear infinite reverse',
              width: '24px',
              height: '24px'
            }}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path 
                d="M12 2.5L8 7h8l-4-4.5zM8 7v5H5l3-5zm8 0v5h3l-3-5zm-8 5v5l3 5v-10zm8 0v5l-3 5v-10z" 
                fill="white"
              />
            </svg>
          </div>
        </div>
        
        {/* Middle orbital path (cyan) - Enhanced */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border-2 border-stellar-cyan rounded-full"
          style={{
            animation: 'rotate 25s linear infinite reverse',
            boxShadow: '0 0 30px rgba(0, 255, 208, 0.25)',
            opacity: 0.4
          }}
        >
          {/* Rocket on middle orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'rotate 25s linear infinite',
              width: '20px',
              height: '20px'
            }}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path 
                d="M12 2.5L8 7h8l-4-4.5zM8 7v5H5l3-5zm8 0v5h3l-3-5zm-8 5v5l3 5v-10zm8 0v5l-3 5v-10z" 
                fill="#00FFD0"
              />
            </svg>
          </div>
        </div>
        
        {/* Inner orbital path (white) - Enhanced */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white rounded-full"
          style={{
            animation: 'rotate 20s linear infinite',
            boxShadow: '0 0 25px rgba(255, 255, 255, 0.2)',
            opacity: 0.3
          }}
        >
          {/* Rocket on inner orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'rotate 20s linear infinite reverse',
              width: '16px',
              height: '16px'
            }}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path 
                d="M12 2.5L8 7h8l-4-4.5zM8 7v5H5l3-5zm8 0v5h3l-3-5zm-8 5v5l3 5v-10zm8 0v5l-3 5v-10z" 
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
        
        {/* Smallest orbital path (pink) - Enhanced */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-2 border-pink-500 rounded-full"
          style={{
            animation: 'rotate 15s linear infinite reverse',
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.2)',
            opacity: 0.25
          }}
        >
          {/* Rocket on smallest orbit */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: 'rotate 15s linear infinite',
              width: '12px',
              height: '12px'
            }}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path 
                d="M12 2.5L8 7h8l-4-4.5zM8 7v5H5l3-5zm8 0v5h3l-3-5zm-8 5v5l3 5v-10zm8 0v5l-3 5v-10z" 
                fill="#FF00FF"
              />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/80 mb-8 animate-fade-down">
            <span className="inline-block w-2 h-2 rounded-full bg-stellar-blue mr-2 animate-pulse"></span>
            Innovating space technology since 2021
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up leading-tight">
            <span className="text-gradient">Expanding Humanity's Reach</span> 
            <br /> 
            <span className="text-white">in Space</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Pioneering satellite manufacturing and microgravity cultivation through innovative engineering and sustainable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <a href="#about" className="px-8 py-3 rounded-full bg-stellar-blue hover:bg-stellar-blue/90 text-white font-medium transition-all stellar-shadow hover:translate-y-[-2px]">
              Learn More
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm hover:bg-white/5 text-white font-medium transition-all hover:translate-y-[-2px]">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/80 hover:text-white transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>

      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #3F87FF 0%, #00FFD0 50%, #FF00FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        
        .stellar-shadow {
          box-shadow: 0 0 15px rgba(63, 135, 255, 0.5);
        }
      `}</style>
    </section>
  );
};