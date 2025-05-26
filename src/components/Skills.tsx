
import { Code, Database, Brain, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      icon: Brain,
      title: "Web Technologies",
      color: "from-purple-500 to-pink-500", 
      skills: ["HTML", "CSS", "JavaScript", "Flask"]
    },
    {
      icon: Database,
      title: "Data & ML",
      color: "from-green-500 to-emerald-500",
      skills: ["NumPy", "Pandas", "Matplotlib", "MySQL"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-500",
      skills: ["GitHub", "VS Code", "PyCharm", "Colab", "Anaconda", "Power BI"]
    }
  ];

  const coursework = [
    "Machine Learning", "Data Structures", "Operating Systems", 
    "Computer Networks", "Object-Oriented Programming", "Database Management Systems"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-800 rounded-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coursework */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Relevant Coursework</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coursework.map((course, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 cursor-default">
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
