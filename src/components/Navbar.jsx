import { Code, Menu, X } from "lucide-react";
import { useState } from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {name: 'Home', href: '#home'},
        {name: 'About Me', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'Testimonials', href: '#testimonials'},
        {name: 'Contact', href: '#contact'},
    ];

    const socialLinks = [
        {icon: <FaGithub className="h-5 w-5"/>, href: 'https://github.com/senmarutech', label: 'Github'},
        {icon: <FaLinkedin className="h-5 w-5"/>, href: 'https://www.linkedin.com/in/ahmad-nur-rozik-9240a1299/', label: 'LinkedIn'},
        {icon: <FaInstagram className="h-5 w-5"/>, href: 'https://www.instagram.com/nuroziqahmad03', label: 'Instagram'}
    ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <div
                className="flex items-center"
                data-aos='fade-right'
                data-aos-delay='200'>
                    <Code className="h-6 w-6 text-gray-800"/>
                    <span className="ml-2 text-lg font-semibold text-gray-900">
                        Portfolio
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, index) => (
                        <a 
                        key={item.name}
                        href={item.href}
                        className="text-indigo-950 hover:text-blue-600 text-sm font-medium
                        transition-colors duration-200"
                        data-aos='fade-down'
                        data-aos-delay={300 + (index * 50)}>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex items-center space-x-4">
                     {socialLinks.map((link, index) => (
                        <a 
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-950 hover:text-blue-600 transition-colors"
                        aria-label={link.href}
                        data-aos='fade-left'
                        data-aos-delay={600 + (index * 50)}>
                            {link.icon}
                        </a>
                     ))}
                </div>
                {/* Mobile Menu Button */}
                <button
                className="md:hidden text-indigo-950 hover:text-blue-600
                focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                data-aos='fade-left'
                data-aos-delay='200'>
                    {isMenuOpen
                    ? <X className="h-6 w-6"/>
                    : <Menu className="h-6 w-6"/>}
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute bg-white
                p-4 right-4 scale-95 mt-2 w-[50%] max-w-sm rounded-b-xl shadow-md">
                    <div className="flex flex-col space-y-0.5">
                        {navItems.map((item, index) => (
                            <a 
                            key={item.name}
                            href={item.href}
                            className="text-indigo-950 hover:text-blue-600 py-2 px-3
                            text-sm font-medium transition-colors duration-200 rounded-md
                            hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                            data-aos='fade-up'
                            data-aos-delay={100 + (index * 50)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t
                    border-indigo-950">
                        {socialLinks.map((link, index) => (
                            <a 
                            key={index}
                            href={link.href}
                            className="text-indigo-950 hover:text-blue-600 transition-colors"
                            aria-label={link.label}
                            onClick={() => setIsMenuOpen(false)}
                            data-aos='zoom-in'
                            data-aos-delay={400 + (index * 50)}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar