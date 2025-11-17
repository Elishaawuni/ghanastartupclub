import { BookOpen, Activity, Package, TrendingUp, Sparkles } from 'lucide-react';

export default function TheoryOfChange() {
  const stages = [
    {
      icon: BookOpen,
      title: 'Inputs',
      description: 'We provide training programs, mentorship, networking platforms, access to financial literacy education, and startup incubation support.',
      color: 'bg-[#FFC312]',
    },
    {
      icon: Activity,
      title: 'Activities',
      description: 'Through workshops, bootcamps, entrepreneurship challenges, and peer-to-peer learning sessions, we equip young people with practical skills in business development, leadership, and innovation.',
      color: 'bg-[#EE5A24]',
    },
    {
      icon: Package,
      title: 'Outputs',
      description: 'Participants gain entrepreneurial knowledge, improved financial management skills, stronger networks, and increased access to resources.',
      color: 'bg-[#0A3D62]',
    },
    {
      icon: TrendingUp,
      title: 'Outcomes',
      description: 'These young innovators go on to create startups, develop scalable solutions, and generate employment opportunities.',
      color: 'bg-[#34C759]',
    },
    {
      icon: Sparkles,
      title: 'Impact',
      description: 'Over time, this ecosystem contributes to economic growth, reduces youth unemployment, and positions Ghana as a competitive player in the global startup landscape.',
      color: 'bg-[#FFC312]',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-[#0A3D62] to-[#0d5082] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Theory of Change
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Entrepreneurship, when nurtured with the right support systems, serves as a powerful driver of sustainable development
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#FFC312]/30 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col gap-8`}
              >
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-md hover:bg-white/20 transition-all">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 ${stage.color} rounded-xl flex items-center justify-center mr-4`}>
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{stage.title}</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-16">
                  <div className={`w-8 h-8 ${stage.color} rounded-full border-4 border-[#0A3D62] relative z-10`}></div>
                </div>

                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <p className="text-lg leading-relaxed">
            At Ghana Startup Club, we are not only shaping businesses—we are <span className="font-semibold text-[#FFC312]">shaping mindsets, building resilience, and nurturing leaders</span> who will drive Ghana's transformation through innovation and entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  );
}
