import React from 'react'

const TryOurProducts = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Try Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {Array(3).fill(null).map((_, index) => (
          <div key={index} className="text-center">
            <img 
              src="/api/placeholder/300/300" 
              alt={`Product ${index + 1}`} 
              className="rounded-lg shadow-md mb-4 w-full"
            />
            <h3 className="text-xl font-semibold text-blue-900">Product Name</h3>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors inline-flex items-center gap-2">
          View All Products <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);


export default TryOur
