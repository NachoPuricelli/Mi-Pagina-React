import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Globe, Star, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ModernLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web modernas con React, TypeScript y las últimas tecnologías"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Responsive Design",
      description: "Diseños adaptativos que funcionan perfectamente en todos los dispositivos"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Soluciones Full Stack",
      description: "Desde frontend hasta backend con C#, PHP y bases de datos"
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      tech: "React + TypeScript + C#",
      description: "Plataforma completa de comercio electrónico con panel administrativo"
    },
    {
      title: "Dashboard Analytics",
      tech: "React + Bootstrap + PHP",
      description: "Dashboard interactivo para análisis de datos en tiempo real"
    },
    {
      title: "Corporate Website",
      tech: "HTML5 + CSS3 + JavaScript",
      description: "Sitio web corporativo con diseño moderno y optimizado para SEO"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Tech Solutions",
      text: "Excelente trabajo, entrega a tiempo y código muy limpio. Definitivamente lo recomiendo.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      company: "StartupXYZ",
      text: "Transformó nuestra idea en una aplicación web increíble. Muy profesional y comunicativo.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Dev</span>Solutions
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Servicios</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Portfolio</a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Contacto</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Desarrollo Web
              <span className="text-blue-600"> Moderno</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Creo aplicaciones web innovadoras con React, TypeScript y las tecnologías más actuales. 
              Transformo tus ideas en experiencias digitales excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Ver mi trabajo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Mis Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrezco soluciones completas de desarrollo web con tecnologías modernas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Algunos de mis proyectos más destacados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-6 flex items-center justify-center">
                  <Code className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{project.tech}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lo que dicen mis clientes sobre mi trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-4" />
                <span>desarrollador@email.com</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-4" />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Github className="w-8 h-8 text-white hover:text-blue-200 cursor-pointer transition-colors" />
                <Linkedin className="w-8 h-8 text-white hover:text-blue-200 cursor-pointer transition-colors" />
                <Twitter className="w-8 h-8 text-white hover:text-blue-200 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => alert('¡Gracias por tu interés! En un proyecto real, aquí enviarías el formulario.')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-blue-400">Dev</span>Solutions
            </div>
            <div className="text-gray-400">
              © 2025 DevSolutions. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLandingPage;