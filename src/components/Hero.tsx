import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-32 right-1/4 text-yellow-400 opacity-60 animate-bounce">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-cyan-400 opacity-60 animate-bounce animation-delay-1000">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute top-1/2 right-20 text-purple-400 opacity-60 animate-bounce animation-delay-2000">
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content with enhanced animations */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Status badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 border border-green-400/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-green-300">Available for opportunities</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block text-white/90">Hello, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
                  Kanuthuru
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                  Shashank
                </span>
              </h1>
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl lg:text-3xl font-light bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Aspiring AI Engineer
              </p>
              <p className="text-xl text-gray-300 font-light">
                Web Designer • Innovator • Problem Solver
              </p>
            </div>
            
            <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
              4th-year Computer Science (AIML) student passionate about machine learning, 
              artificial intelligence, and creating innovative web solutions that make a difference.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="https://github.com/shashank1704" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-4 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/60 rounded-2xl transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-gray-600">
                <Github className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="https://linkedin.com/in/kanuthuru-shashank-a53ba8281" target="_blank" rel="noopener noreferrer"
                 className="group relative p-4 bg-blue-600/20 backdrop-blur-sm hover:bg-blue-500/30 rounded-2xl transition-all duration-300 hover:scale-110 border border-blue-500/30 hover:border-blue-400">
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="mailto:shashankkanuthuru23@gmail.com"
                 className="group relative p-4 bg-red-600/20 backdrop-blur-sm hover:bg-red-500/30 rounded-2xl transition-all duration-300 hover:scale-110 border border-red-500/30 hover:border-red-400">
                <Mail className="w-6 h-6 text-red-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="tel:+917670906505"
                 className="group relative p-4 bg-green-600/20 backdrop-blur-sm hover:bg-green-500/30 rounded-2xl transition-all duration-300 hover:scale-110 border border-green-500/30 hover:border-green-400">
                <Phone className="w-6 h-6 text-green-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                onClick={() => scrollToSection('about')}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl border-0"
              >
                <span className="relative z-10">Discover My Journey</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="group relative border-2 border-gray-600 bg-gray-900/50 backdrop-blur-sm text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition-all duration-300 text-lg hover:border-white hover:shadow-lg hover:shadow-white/10"
              >
                <span className="relative z-10">Let's Connect</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-500">
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main profile container */}
              <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-2 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={profileImage} 
                    alt="Kanuthuru Shashank Profile"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse opacity-30"></div>
                </div>
              </div>
              
              {/* Floating badges with enhanced design */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold animate-bounce shadow-lg backdrop-blur-sm border border-cyan-300/30">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI/ML Student
                </span>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold animate-bounce animation-delay-1000 shadow-lg backdrop-blur-sm border border-purple-300/30">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Web Developer
                </span>
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2 animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-400 rounded-full -translate-y-1/2 animate-pulse animation-delay-500"></div>
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-400 rounded-full -translate-y-1/2 animate-pulse animation-delay-1500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm font-medium">Discover More</span>
          <button 
            onClick={() => scrollToSection('about')}
            className="group p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-700/60"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
