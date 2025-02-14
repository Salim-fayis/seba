import React from 'react'

const CallToAction = () => (
  <section className="py-20 bg-blue-900 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Experience Premium Tea</h2>
          <p className="text-blue-100 mb-8">
            Discover the perfect blend of tradition and quality in every cup. Our premium tea powder brings you the authentic taste of carefully selected tea leaves.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/api/placeholder/600/400" 
            alt="Premium Tea" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
);


export default Contact
