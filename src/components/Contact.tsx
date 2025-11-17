import { Mail, Phone, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'presidentgsc@gmail.com',
      link: 'mailto:presidentgsc@gmail.com',
      color: 'bg-[#FFC312]',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 245 470 743',
      link: 'tel:+233245470743',
      color: 'bg-[#EE5A24]',
    },
    {
      icon: Phone,
      label: 'Alternative Phone',
      value: '+233 541 624 894',
      link: 'tel:+233541624894',
      color: 'bg-[#0A3D62]',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ghana Startup Club',
      link: 'https://www.linkedin.com/company/ghana-startup-club',
      color: 'bg-[#0077B5]',
    },
    {
      icon: Globe,
      label: 'Blog',
      value: 'Visit Our Blog',
      link: 'https://ghanastartupclub.blogspot.com/',
      color: 'bg-[#34C759]',
    },
  ];

  return (
    <div className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-[#FFC312] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more or get involved
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start group"
            >
              <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                <div className="font-semibold text-[#0A3D62] group-hover:text-[#FFC312] transition-colors">
                  {info.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#0A3D62] to-[#0d5082] p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-200 leading-relaxed mb-8">
                We'd love to hear from you! Whether you're an aspiring entrepreneur, potential partner, or simply want to learn more about our work, reach out to us.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FFC312] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-200">Quick response within 24 hours</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FFC312] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-200">Free initial consultation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FFC312] rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-200">Multiple ways to reach us</p>
                </div>
              </div>
            </div>

            <div className="p-12">
              <h4 className="text-2xl font-bold text-[#0A3D62] mb-6">
                Our Location
              </h4>
              <p className="text-gray-700 mb-4">
                Ghana Startup Club is proudly registered and operating in Ghana, serving young entrepreneurs across the nation.
              </p>
              <div className="bg-[#F8F9FA] p-6 rounded-xl mb-6">
                <h5 className="font-semibold text-[#0A3D62] mb-2">Office Hours</h5>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              <a
                href="mailto:presidentgsc@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-[#FFC312] text-[#0A3D62] font-semibold rounded-lg hover:bg-[#f5b800] transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send us an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
