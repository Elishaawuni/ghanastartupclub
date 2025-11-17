import { Mail, Phone, Linkedin, Globe } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:presidentgsc@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/company/ghana-startup-club',
    },
    {
      icon: Globe,
      label: 'Blog',
      link: 'https://ghanastartupclub.blogspot.com/',
    },
  ];

  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={`https://images.weserv.nl/?url=${encodeURIComponent('https://drive.google.com/uc?export=view&id=1SC_10A_8nD_I9Yzom6Jr_s7NnrccjpxV')}`}
                alt="Ghana Startup Club Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback to direct Google Drive thumbnail if proxy fails
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('thumbnail')) {
                    target.src = 'https://drive.google.com/thumbnail?id=1SC_10A_8nD_I9Yzom6Jr_s7NnrccjpxV&sz=w1000';
                  }
                }}
              />
              <h3 className="text-2xl font-bold">Ghana Startup Club</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Empowering Ghanaian youth with the skills, networks, and opportunities needed to launch and grow innovative enterprises.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 text-[#FFC312]" />
                <span>+233 245 470 743</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 text-[#FFC312]" />
                <span>presidentgsc@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-300 hover:text-[#FFC312] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFC312] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ghana Startup Club. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Empowering Ghana's Next Generation of Innovators
          </p>
        </div>
      </div>
    </footer>
  );
}
