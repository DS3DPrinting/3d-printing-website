import React from 'react';
import { ArrowRight, Clock, Award, DollarSign, Star, Users, Settings, ShieldCheck, Wrench } from 'lucide-react';
import Carousel from '../components/Carousel';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-16">
      <section className="w-full">
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <Carousel />
        </div>
      </section>

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bring Your Ideas to Life with 3D Printing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional 3D printing and modeling services for prototypes, custom parts, and creative projects. 
              Fast turnaround, industrial quality, affordable pricing.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Intro */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional 3D Printing & Modeling Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At D&S 3D Printing, we specialize in transforming your digital designs into high-quality physical objects. 
            Whether you need rapid prototyping, custom replacement parts, or intricate artistic models, our advanced 
            FDM printing technology and expert team deliver exceptional results every time.
            </p>
        </section>

        {/* Carousel */}


        {/* Featured Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => onPageChange('3d-printing')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3D Printing Services</h3>
                <p className="text-gray-600 mb-4">
                  High-quality FDM printing using PLA+, PETG, ABS, and specialty materials. 
                  Perfect for prototypes, functional parts, and custom designs.
                </p>
                <span className="text-blue-600 font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </div>

            <div 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => onPageChange('3d-modeling')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3D Modeling Services</h3>
                <p className="text-gray-600 mb-4">
                  Custom 3D modeling from sketches, concepts, or existing parts. We create print-ready 
                  models optimized for strength, appearance, and manufacturability.
                </p>
                <span className="text-orange-600 font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose D&S 3D Printing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most projects completed within 24-48 hours. Rush orders available for urgent deadlines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Quality</h3>
              <p className="text-gray-600">
                Professional-grade printers and materials ensure consistent, high-quality results every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">
                Competitive rates with transparent pricing. No hidden fees or unexpected charges.
              </p>
            </div>

             <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customization and Personalization</h3>
                <p className="text-gray-600">
                  Every project is different. At D&S 3D, we let you customize your 3D prints to match your exact needs, whether it’s size, shape, or design.
                </p>
              </div>

              <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure and Confidential</h3>
                <p className="text-gray-600">
                  Your designs and project details are safe with us. D&S 3D follows strict privacy standards to keep your files and ideas protected at every step.
                </p>
              </div>
              
              <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Maintenance & Technical Expertise</h3>
                <p className="text-gray-600">
                  We not only print — we maintain our 3D printers in top condition and understand how they work. Our deep knowledge of 3D printing ensures high-quality results, reliable machines, and expert troubleshooting when needed.
                </p>
              </div>
          </div>
        </section>


        {/* Client Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Best customer service💗🫀 …"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Yasiru Madusanka</p>
                  <p className="text-sm text-gray-500">5 Months Ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Amezing technology & can customize on your own.Superb coustomer service."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tharindu Ravishan</p>
                  <p className="text-sm text-gray-500">2 Years Ago</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Good quality 3D printing parts 👍😀 …"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Chamodh Eranda xrobot</p>
                  <p className="text-sm text-gray-500">2 Years Ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom quote for your 3D printing or modeling project. Fast, professional, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;