
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Virtual Clothes Try-On",
      description: "A machine learning-based virtual fitting room for e-commerce that allows customers to try on clothes virtually using computer vision and AI technology.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "JavaScript"],
      features: [
        "Real-time virtual fitting",
        "ML-powered size recommendations", 
        "Interactive user interface",
        "E-commerce integration ready"
      ],
      color: "from-blue-500 to-purple-600",
      category: "Machine Learning"
    },
    {
      title: "Anti Sleep Alarm with Engine Control",
      description: "Driver safety system that detects fatigue and drowsiness, providing alerts and controlling engine functions to prevent accidents caused by driver fatigue.",
      technologies: ["Python", "OpenCV", "Arduino", "IoT", "Machine Learning"],
      features: [
        "Real-time drowsiness detection",
        "Engine control system",
        "Emergency alert system",
        "IoT integration"
      ],
      color: "from-red-500 to-orange-600",
      category: "IoT & Safety"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="mb-6">
                  <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-sm font-semibold mb-4`}>
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-red-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:scale-105 transition-all duration-300 text-white font-semibold`}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-300 mb-6">
                I'm constantly working on new and exciting projects. Stay tuned for updates on my latest innovations in AI, machine learning, and web development.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/shashank1704" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Follow on GitHub
                  </Button>
                </a>
                <a href="https://linkedin.com/in/kanuthuru-shashank-a53ba8281" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
