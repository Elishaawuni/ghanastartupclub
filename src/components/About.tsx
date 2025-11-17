import { Target, Eye } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            About Ghana Startup Club
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ghana Startup Club is a <span className="font-semibold text-[#0A3D62]">youth-led social enterprise</span> registered in Ghana dedicated to fostering innovation, entrepreneurship, and financial literacy among young people across Ghana.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Established to bridge the gap between potential and opportunity, the Club serves as a hub for aspiring entrepreneurs, students, and professionals to access mentorship, training, and resources that enable them to transform ideas into thriving enterprises.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe that when young people are empowered to innovate and build businesses, they become catalysts for <span className="font-semibold text-[#EE5A24]">economic growth, social change, and inclusive development</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#FFC312] hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#FFC312]/10 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-[#FFC312]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62]">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower Ghanaian youth, aspiring entrepreneurs and businesses with the skills, networks, and opportunities needed to launch, grow, and sustain innovative enterprises that address societal challenges and contribute to national and global development.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#EE5A24] hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#EE5A24]/10 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-[#EE5A24]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62]">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A future where Ghana emerges as a hub of entrepreneurial excellence—where startups are globally competitive, economically viable, and socially impactful, creating opportunities that inspire prosperity and equity across communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
