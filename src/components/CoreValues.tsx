import { Lightbulb, Users, Shield, Target, Zap } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We champion creativity and solutions-driven thinking that respond to pressing societal needs.',
      color: 'bg-[#FFC312]',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships, knowledge-sharing, and collective action.',
      color: 'bg-[#EE5A24]',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold transparency, accountability, and ethical leadership in all our engagements.',
      color: 'bg-[#0A3D62]',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success not just by profit, but by the positive change we create in communities.',
      color: 'bg-[#34C759]',
    },
    {
      icon: Zap,
      title: 'Resilience',
      description: 'We foster adaptability, perseverance, and a growth mindset in the face of challenges.',
      color: 'bg-[#EE5A24]',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and shape our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-[#F8F9FA] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
