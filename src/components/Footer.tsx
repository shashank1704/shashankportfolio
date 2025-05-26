
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/shashank1704",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kanuthuru-shashank-a53ba8281",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      href: "mailto:shashankkanuthuru23@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: Phone,
      href: "tel:+917670906505",
      label: "Phone",
      color: "hover:text-green-400"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Kanuthuru Shashank<span className="text-yellow-400">.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Aspiring AI Engineer passionate about creating innovative solutions 
              through machine learning, artificial intelligence, and modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:shashankkanuthuru23@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">shashankkanuthuru23@gmail.com</span>
              </a>
              <a 
                href="tel:+917670906505"
                className="flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7670906505</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Available for freelance opportunities and collaborations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} Kanuthuru Shashank. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
