import { UserPlus, Handshake, Mail } from 'lucide-react';

export default function GetInvolved() {
  const ways = [
    {
      icon: UserPlus,
      title: 'Join as a Member',
      description: 'Become part of our vibrant community of innovators, entrepreneurs, and changemakers. Access exclusive programs, resources, and networking opportunities.',
      action: 'Join Now',
      color: 'bg-[#FFC312]',
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Collaborate with Ghana Startup Club to support youth entrepreneurship. Partner organizations gain access to talented innovators and contribute to national development.',
      action: 'Become a Partner',
      color: 'bg-[#EE5A24]',
    },
    {
      icon: Mail,
      title: 'Volunteer',
      description: 'Share your expertise, mentor young entrepreneurs, or support our programs. Your time and knowledge can transform lives and build the future of Ghana.',
      action: 'Get Started',
      color: 'bg-[#0A3D62]',
    },
  ];

  const handleContact = () => {
    window.location.href = 'mailto:presidentgsc@gmail.com';
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in empowering the next generation of Ghanaian entrepreneurs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className={`w-16 h-16 ${way.color} rounded-xl flex items-center justify-center mb-6`}>
                <way.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A3D62] mb-4">
                {way.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                {way.description}
              </p>
              <button
                onClick={handleContact}
                className={`w-full ${way.color} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all`}
              >
                {way.action}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#0A3D62] to-[#0d5082] rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're an aspiring entrepreneur, experienced professional, or organization looking to support youth development, there's a place for you at Ghana Startup Club.
          </p>
          <button
            onClick={handleContact}
            className="inline-flex items-center px-8 py-4 bg-[#FFC312] text-[#0A3D62] font-semibold rounded-lg hover:bg-[#f5b800] transition-all transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
