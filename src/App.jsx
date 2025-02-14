import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import Logo from "../src/assets/Logo-Brotherhede.png";
import Slider1 from "../src/assets/slider-1.jpg";
import Slider2 from "../src/assets/slider-2.jpg";
import Slider3 from "../src/assets/slider-3.jpg";
import Slider4 from "../src/assets/slider-1.jpg";
import Slider5 from "../src/assets/slider-2.jpg";

import aboutImg from "../src/assets/about-us.jpg";

import Product1 from "../src/assets/productImg1.jpg";
import Product2 from "../src/assets/productImg2.jpg";
import Product3 from "../src/assets/productImg3.jpg";
import Product4 from "../src/assets/product4.jpg";
import Product5 from "../src/assets/product5.jpg";
import Product6 from "../src/assets/product6.jpg";

import try1 from "../src/assets/try1.png"
import try2 from "../src/assets/try2.png"
import try3 from "../src/assets/try3.png"

import ContactImg from "../src/assets/contct.jpg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
     <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Brotherhede Logo" className="h-16 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About Us", "Products", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-blue-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["Home", "About Us", "Products", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
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
    {
      image: Slider1,
      heading: "Premium Tea Collection",
      description: "Discover the finest selection of handpicked teas from around the world"
    },
    {
      image: Slider2,
      heading: "Traditional Blends",
      description: "Experience authentic flavors crafted with generations of expertise"
    },
    {
      image: Slider3,
      heading: "Pure & Natural",
      description: "100% organic tea leaves processed with care to preserve natural goodness"
    },
    {
      image: Slider4,
      heading: "Modern Tea Culture",
      description: "Bringing traditional tea experiences to contemporary lifestyles"
    },
    {
      image: Slider5,
      heading: "Exclusive Collection",
      description: "Explore our signature blends created for true tea connoisseurs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

    return (
    <div id="home" className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div key={index} className="absolute w-full h-full">
          <motion.img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Text content */}
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              y: currentSlide === index ? 0 : 20
            }}
            transition={{ 
              duration: 0.5,
              delay: currentSlide === index ? 0.3 : 0
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-100">
              {slide.description}
            </p>
            <motion.button 
              className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => (
  <section id="about-us" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img 
            src={aboutImg} 
            alt="About Us" 
            className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] object-cover object-center" 
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            With decades of expertise in tea cultivation and processing, we
            bring you the finest tea powder that captures the authentic taste
            and aroma of premium tea leaves. Our commitment to quality and
            tradition ensures that every cup you brew is a perfect blend of
            flavor and freshness.
          </p>
          <button className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ image, name, description, id }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img src={image} alt={name} className="w-full h-48 object-cover object-center" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={`/product/${id}`}
        className="text-blue-900 font-medium flex items-center gap-2 hover:gap-3 transition-all"
      >
        View Details <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

const Products = () => {
  const products = [
    {
      id: 1,
      image: Product1,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 2,
      image: Product2,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 3,
      image: Product3,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 4,
      image: Product4,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 5,
      image: Product5,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
    {
      id: 6,
      image: Product6,
      name: "Premium Tea Powder",
      description: "Experience the rich flavor of our carefully selected tea leaves.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TryOurProducts = () => {
  const productCategories = [
    {
      id: 1,
      name: "Premium Tea",
      image: try1,
      link: "/category/premium-tea"
    },
    {
      id: 2,
      name: "Flavored Tea",
      image: try2,
      link: "/category/flavored-tea"
    },
    {
      id: 3,
      name: "Special Blends",
      image: try3,
      link: "/category/special-blends"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Try Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <motion.div 
              key={category.id}
              className="text-center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="rounded-lg shadow-md mb-4 w-full h-64 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {category.name}
                </h3>
                <div className="mt-auto">
                  <motion.a
                    href={category.link}
                    className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const CallToAction = () => (
  <section className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Experience Premium Tea</h2>
          <p className="text-blue-100 mb-8">
            Discover the perfect blend of tradition and quality in every cup.
            Our premium tea powder brings you the authentic taste of carefully
            selected tea leaves.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={ContactImg}
            alt="Premium Tea"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Brotherhede Logo" className="mb-4" />
          <p className="text-gray-400">
            Bringing you the finest tea powder with a perfect blend of tradition
            and quality.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Products", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@brotherhede.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +1 234 567 890
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-gray-400">
          Copyright © 2024, Brotherhede. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ImageSlider />
      <AboutUs />
      <Products />
      <TryOurProducts />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
