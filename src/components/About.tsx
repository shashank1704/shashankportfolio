import { GraduationCap, User, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold">My Story</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              To obtain a challenging role in the IT industry where I can utilize my programming, 
              problem-solving, and software development skills to contribute to team success and 
              organizational growth.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-blue-400">B.Tech in CSE (AIML)</h4>
                  <span className="text-yellow-400 font-bold text-lg">8.84/10 CGPA</span>
                </div>
                <p className="text-gray-300 mb-2">Aditya Institute of Technology and Management</p>
                <p className="text-gray-400">2022 - 2025</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-purple-400">Diploma in ECE</h4>
                  <span className="text-yellow-400 font-bold text-lg">88.43%</span>
                </div>
                <p className="text-gray-300 mb-2">Aditya Institute of Technology and Management</p>
                <p className="text-gray-400">2019 - 2022</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-yellow-400" />
            <h3 className="text-2xl font-semibold text-center">Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Machine Learning Foundations", "Advanced Data Structures", "AI-ML Virtual Internship", "Android Developer Virtual Internship", "Java Full Stack"].map((cert, index) => <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white">{cert}</h4>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;