import { GraduationCap, Trophy, DollarSign, Rocket } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Training & Mentorship',
      description: 'Comprehensive training programs and one-on-one mentorship from experienced entrepreneurs and business leaders to guide you on your entrepreneurial journey.',
      features: ['Weekly Workshops', 'Expert Mentors', 'Skill Development', 'Networking Events'],
      color: 'bg-[#FFC312]',
    },
    {
      icon: Trophy,
      title: 'Entrepreneurship Challenges',
      description: 'Competitive challenges and hackathons that push you to innovate, solve real-world problems, and showcase your entrepreneurial skills.',
      features: ['Pitch Competitions', 'Innovation Challenges', 'Prize Opportunities', 'Investor Exposure'],
      color: 'bg-[#EE5A24]',
    },
    {
      icon: DollarSign,
      title: 'Financial Literacy Programs',
      description: 'Essential financial education covering budgeting, investment, business finance, and money management to ensure sustainable business growth.',
      features: ['Financial Planning', 'Investment Education', 'Budget Management', 'Funding Strategies'],
      color: 'bg-[#34C759]',
    },
    {
      icon: Rocket,
      title: 'Incubation & Startup Support',
      description: 'Comprehensive startup incubation services providing workspace, resources, and strategic guidance to help launch and scale your venture.',
      features: ['Business Planning', 'Resource Access', 'Legal Guidance', 'Growth Strategy'],
      color: 'bg-[#0A3D62]',
    },
  ];

  return (
    <div className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to empower you at every stage of your entrepreneurial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`${program.color} h-2 group-hover:h-3 transition-all`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 ${program.color} rounded-full mr-3`}></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
