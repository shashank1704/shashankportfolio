
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-bounce animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hello, I'm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Kanuthuru Shashank
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Aspiring AI Engineer | Web Designer | Innovator
            </p>
            
            <p className="text-gray-400 max-w-lg leading-relaxed">
              4th-year Computer Science (AIML) student passionate about machine learning, 
              artificial intelligence, and creating innovative web solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/shashank1704" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://linkedin.com/in/kanuthuru-shashank-a53ba8281" target="_blank" rel="noopener noreferrer"
                 className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="mailto:shashankkanuthuru23@gmail.com"
                 className="p-3 bg-red-600 hover:bg-red-500 rounded-full transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a href="tel:+917670906505"
                 className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-all duration-300 hover:scale-110">
                <Phone className="w-6 h-6 text-white" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Learn More About Me
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in animation-delay-500">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-600">
                  KS
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                AI/ML Student
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce animation-delay-1000">
                Web Developer
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
