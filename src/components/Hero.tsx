import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleJoinClick = () => {
    window.open('https://forms.gle/s1MZCgbZFWRQrFju5', '_blank');
  };

  return (
    <div className="relative pt-20 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62] to-[#0d5082] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC312] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EE5A24] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#FFC312]" />
            <span className="text-sm font-medium">Empowering Ghana's Next Generation of Innovators</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Ideas Into{' '}
            <span className="text-[#FFC312]">Thriving Enterprises</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            A youth-led social enterprise fostering innovation, entrepreneurship, and financial literacy among young people across Ghana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={handleJoinClick}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC312] text-[#0A3D62] font-semibold rounded-lg hover:bg-[#f5b800] transition-all transform hover:scale-105 shadow-lg"
            >
              Join the Movement
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setActiveSection('programs');
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Explore Programs
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFC312] mb-2">500+</div>
              <div className="text-sm text-gray-300">Youth Empowered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFC312] mb-2">100+</div>
              <div className="text-sm text-gray-300">Startups Launched</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFC312] mb-2">50+</div>
              <div className="text-sm text-gray-300">Training Programs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFC312] mb-2">20+</div>
              <div className="text-sm text-gray-300">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
