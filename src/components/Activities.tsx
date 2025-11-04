import { Trophy, Briefcase, Heart, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Participated in university hackathons, developing innovative solutions under tight deadlines.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Briefcase,
      title: "Workshops",
      description: "Attended workshops on AI, machine learning, and cloud computing to stay updated on the latest technologies.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Volunteering",
      description: "Volunteered in tech events, assisting in organizing coding boot camps and hackathons.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Code,
      title: "Open Source Contributions",
      description: "Contributed to open-source projects on GitHub, enhancing coding skills and collaborative development.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Extra-Curricular <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Beyond academics, I actively participate in tech communities and contribute to the developer ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${activity.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{activity.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
