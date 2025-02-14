import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, Phone, ArrowRight, ChevronRight } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/50 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/api/placeholder/150/50" alt="Brotherhede Logo" className="h-16 w-auto" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
  
          <button 
            className="md:hidden text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <span>✕</span> : <span>☰</span>}
          </button>
        </nav>
  
        {isOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-blue-900 hover:text-blue-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    );
  };

  const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      '/api/placeholder/1200/600',
      '/api/placeholder/1200/600',
      '/api/placeholder/1200/600',
      '/api/placeholder/1200/600',
      '/api/placeholder/1200/600'
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="relative h-[600px] overflow-hidden mt-20">
        {slides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    );
  };

export default Header
