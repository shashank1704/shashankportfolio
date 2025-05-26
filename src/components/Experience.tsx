
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experience = {
    title: "Full-Stack Development Intern",
    company: "Cloud Technologies",
    duration: "April 2024 - June 2024",
    location: "Remote",
    description: "Gained hands-on experience in full-stack development, working with cutting-edge technologies and contributing to real-world projects.",
    achievements: [
      "Developed and deployed a comprehensive web platform using Python, Flask, HTML, CSS, JavaScript, and SQL",
      "Integrated multiple machine learning models including KNN, SVM, Random Forest, and Logistic Regression",
      "Focused on optimizing system efficiency and enhancing user experience",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Implemented responsive design principles for mobile and desktop compatibility"
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL", "Machine Learning", "KNN", "SVM", "Random Forest", "Logistic Regression"]
  };

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-world experience in software development and machine learning implementation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                    {experience.title}
                  </h3>
                  <div className="text-xl text-blue-400 font-semibold mb-2">
                    {experience.company}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-green-400" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-green-600 px-4 py-2 rounded-full text-sm text-white font-medium transition-all duration-300 hover:scale-105 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Looking Forward
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Seeking challenging opportunities to further develop my technical skills in AI/ML and 
                full-stack development while contributing to innovative projects that make a meaningful impact. 
                Passionate about working with cutting-edge technologies and collaborative teams.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
