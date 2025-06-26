import React from 'react';
import { 
  Users, 
  Award, 
  Clock, 
  Target, 
  Heart, 
  Lightbulb,
  CheckCircle
} from 'lucide-react';

interface AboutUsPageProps {
  onPageChange: (page: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About D&S 3D Printing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in transforming digital designs into physical reality. 
              Founded on precision, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 text-justify">
  D&S 3D Printing began with a single passion: to master and share the power of 3D printing. In 2019, our founder started learning 3D printing technology from the ground up — building printers at home, experimenting, failing, and improving. With each step, the goal was clear: to reach true professional print quality using self-taught skills and dedication.
</p>
<p className="text-lg text-gray-700 mb-4 text-justify">
  What began as a personal journey quickly turned into a small business through word of mouth. As customer needs grew, so did our tools — investing in high-end FDM printers and refining our processes for speed, precision, and reliability.
</p>
<p className="text-lg text-gray-700 mb-4 text-justify">
  Today, we operate a climate-controlled workspace equipped with advanced 3D printing systems, serving a wide range of industries — from electronics and automotive to education and architecture. But we’ve never forgotten our roots: personal care, fast service, and a deep respect for your ideas.
</p>
<p className="text-lg text-gray-700 mb-4 text-justify">
  Whether you're a student, hobbyist, or business owner, we’re here to turn your vision into reality — one quality print at a time.
</p>
            </div>
            <div>
              <img 
                src="../public/D&S 3D logo new copy.jpg" 
                alt="3D Printing workshop"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every print undergoes rigorous inspection to ensure it meets 
                our exacting standards and your expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer-Centric</h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with each client to understand their needs 
                and deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of 3D printing technology, continuously investing in new equipment 
                and techniques to serve you better.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning-Fast Turnaround</h3>
              <p className="text-gray-600 mb-4">
                Most orders ship within 24-48 hours. We understand that time is critical in product development 
                and prototyping, so we've optimized our workflow for speed without sacrificing quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rush orders available</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Real-time order tracking</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Weekend production available</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Our industrial-grade FDM printers are calibrated daily and maintained to aerospace standards. 
                We achieve dimensional accuracy within ±0.1mm on most features.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Climate-controlled environment</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Automated quality checks</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Certified measurement tools</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consultation</h3>
              <p className="text-gray-600 mb-4">
                Our team includes mechanical engineers and industrial designers who can help optimize your 
                designs for 3D printing, suggest material choices, and solve complex manufacturing challenges.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Design optimization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Material selection guidance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Post-processing advice</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600 mb-4">
                Over 10,000 successful prints delivered to satisfied customers. From Fortune 500 companies 
                to individual makers, we've earned trust through consistent quality and service.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />99.5% customer satisfaction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Zero defect guarantee</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Repeat customer rate: 85%</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Our Facility */}
        {/* <section className="mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our State-of-the-Art Facility</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Production Printers</h3>
                <p className="text-gray-600">Industrial FDM printers running 24/7</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sq Ft Facility</h3>
                <p className="text-gray-600">Climate-controlled production space</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Material Types</h3>
                <p className="text-gray-600">From basic PLA to exotic composites</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Certifications & Partnerships */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO 9001:2015 Quality Management System</li>
                <li>• ITAR Registered for Defense Contracts</li>
                <li>• FDA Registered Facility</li>
                <li>• RoHS Compliant Materials</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Partners</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Authorized Stratasys Service Provider</li>
                <li>• Certified Ultimaker Reseller</li>
                <li>• Partnership with Local Universities</li>
                <li>• Member of AMUG (Additive Manufacturing Users Group)</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust D&S 3D Printing for their most critical projects. 
            Let's discuss how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onPageChange('3d-printing')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View Our Services
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;