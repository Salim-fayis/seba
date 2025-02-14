import React from 'react'

const ProductCard = ({ image, name, description }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-lg overflow-hidden"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-900 font-medium flex items-center gap-2 hover:gap-3 transition-all">
        View Details <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Products = () => {
  const products = Array(6).fill({
    image: '/api/placeholder/400/300',
    name: 'Premium Tea Powder',
    description: 'Experience the rich flavor of our carefully selected tea leaves.'
  });

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products
