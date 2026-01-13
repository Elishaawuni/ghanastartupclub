import { Leaf, Users, Target, TrendingUp, Award, Heart } from 'lucide-react';

export default function OngoingProjects() {
  const approaches = [
    {
      icon: Target,
      title: 'Interactive Learning',
      description: 'Lessons centered on leadership and innovation.',
      color: 'bg-[#FFC312]',
    },
    {
      icon: TrendingUp,
      title: 'Green Entrepreneurship',
      description: 'Introducing students to sustainability-focused careers and climate-smart practices.',
      color: 'bg-[#34C759]',
    },
    {
      icon: Heart,
      title: 'Systemic Change',
      description: 'Embedding climate-conscious mindsets at an early stage to influence future policy and economic choices.',
      color: 'bg-[#EE5A24]',
    },
  ];

  const impacts = [
    {
      icon: Award,
      number: '100',
      title: 'Climate Champions',
      description: 'Training and certifying 100 young leaders (ages 18–30), with a dedicated focus on young women and youth from rural or economically disadvantaged backgrounds.',
      textColor: 'text-[#FFC312]',
      bgColor: 'bg-[#FFC312]/10',
    },
    {
      icon: Users,
      number: '5,000+',
      title: 'Community Beneficiaries',
      description: 'Through student-led activities, our reach extends to farmers, traders, and families, strengthening Ghana\'s collective resilience to climate change.',
      textColor: 'text-[#34C759]',
      bgColor: 'bg-[#34C759]/10',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            Ongoing Projects
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current initiatives driving sustainable development and community impact
          </p>
        </div>

        {/* Climate Solutions Classroom Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#34C759]/10 to-[#0A3D62]/5 rounded-3xl p-8 md:p-12 mb-12 border border-[#34C759]/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#34C759] rounded-xl flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A3D62]">
                Climate Solutions Classroom
              </h3>
            </div>
            
            <div className="max-w-4xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Climate Solutions Classroom is a school-based initiative designed to bridge the gap between climate awareness and climate action. Focused on senior high schools across Ghana, the project empowers students to move beyond passive learning and become active problem-solvers in their communities.
              </p>
            </div>
          </div>

          {/* The Approach Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">
              The Approach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              We move climate education out of the textbook and into the real world. By focusing on local challenges—such as waste management, flooding, and energy use—we use problem-based learning to help students co-create actionable solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                >
                  <div className={`${approach.color} h-2 group-hover:h-3 transition-all`}></div>
                  <div className="p-6">
                    <div className={`w-14 h-14 ${approach.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <approach.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-[#0A3D62] mb-3">
                      {approach.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Reach Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-[#0A3D62] mb-8 text-center">
              Impact & Reach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
              Our "multiplier model" ensures that the knowledge gained in the classroom spreads throughout the community.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 ${impact.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                      <impact.icon className={`w-8 h-8 ${impact.textColor}`} />
                    </div>
                  </div>
                  <div className={`text-5xl font-bold ${impact.textColor} mb-3`}>
                    {impact.number}
                  </div>
                  <h4 className="text-2xl font-bold text-[#0A3D62] mb-4">
                    {impact.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-[#0A3D62] to-[#0d5082] rounded-2xl p-8 md:p-10 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                  "Climate Solutions Classroom is strengthening the pipeline of young, climate-conscious leaders, aligning with Ghana Startup Club's commitment to sustainable development and community impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
