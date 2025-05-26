
import { Palette, Code, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, responsive websites using modern tools like HTML, CSS, JavaScript, and Flask. Full-stack solutions tailored to your needs.",
      features: [
        "Responsive Design",
        "Modern Technologies", 
        "Performance Optimized",
        "SEO Friendly"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Clean, user-friendly design with emphasis on modern aesthetics and optimal user experience across all devices.",
      features: [
        "User-Centered Design",
        "Modern Aesthetics",
        "Cross-Platform",
        "Interactive Elements"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Android development and mobile-first web applications that provide seamless experiences across all devices.",
      features: [
        "Native Android Apps",
        "Mobile-First Approach",
        "Cross-Platform Compatibility",
        "Touch Optimized"
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Services I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Expertise in creating digital solutions that blend functionality with beautiful design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <CardContent className="p-8">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-center text-white">{service.title}</h3>
                
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => scrollToSection('contact')}
                  className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 transition-all duration-300 text-white font-semibold py-3 rounded-lg`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. From concept to deployment, 
            I'll help you build digital solutions that make an impact.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
