import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  Award, 
  Layers, 
  Printer, 
  Package, 
  Settings,
  CheckCircle,
  Users
} from 'lucide-react';

interface PrintingPageProps {
  onPageChange: (page: string) => void;
}

const PrintingPage: React.FC<PrintingPageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional 3D Printing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your digital designs into high-quality physical objects with our advanced FDM printing technology. 
              From rapid prototyping to custom manufacturing, we deliver precision results every time.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Your Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our 3D Printing Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Rapid Prototyping</h3>
              <p className="text-gray-600 text-center">
                Quickly turn your concepts into physical prototypes for testing, validation, and iteration. 
                Perfect for product development and design verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Custom Parts</h3>
              <p className="text-gray-600 text-center">
                Replace broken components, create custom fixtures, or manufacture unique mechanical parts 
                tailored to your specific requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Small Batch Production</h3>
              <p className="text-gray-600 text-center">
                Cost-effective production runs for small quantities without the need for expensive tooling 
                or minimum order quantities.
              </p>
            </div>
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
             <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced FDM Technology</h2>
<p className="text-lg text-gray-600 mb-6">
  Print quality matters — and we make sure every part meets your expectations.
  <br /><br />
  At D&S 3D, we use professional-grade FDM (Fused Deposition Modeling) printers capable of printing at a 
  <strong> minimum layer height of 0.1 mm</strong>. This allows for smooth surfaces and fine details, ideal for both 
  functional and aesthetic parts.
  <br /><br />
  But great prints aren’t just about the machine — they also depend on precise 
  <strong> slicing settings</strong>. We carefully optimize every print for:
</p>
<ul className="list-disc pl-6 text-gray-600 mb-6 text-lg">
  <li><strong>Layer height</strong> for the best balance of speed and surface quality</li>
  <li><strong>Infill patterns</strong> to provide strength while saving material</li>
  <li><strong>Wall thickness</strong> and <strong>shell count</strong> to ensure durability</li>
  <li><strong>Support structure</strong> for easier removal and cleaner finishes</li>
</ul>
<p className="text-lg text-gray-600">
  Every part is adjusted based on your specific needs — whether you want a 
  <strong> polished display model</strong>, a <strong> strong mechanical part</strong>, or a 
  <strong> cost-efficient prototype</strong>. 
  <br /><br />
  From small tools to complex assemblies, we ensure high-quality results with the right mix of 
  <strong> performance, appearance, and price</strong>.
  <br/><br/>
</p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Layer heights as fine as 0.12mm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Build volume up to 300x300x220mm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Multi-material capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Controlled heated chambers</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="./printingPage/FDM_tech.webp" 
                alt="3D Printer in action"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Premium Materials Available</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">PLA / PLA+</h3>
              <p className="text-sm text-gray-600 mb-3">Easy to print, eco-friendly, great surface finish</p>
              <div className="text-xs text-gray-500">
                <p>• Biodegradable</p>
                <p>• Low warping</p>
                <p>• Vibrant colors</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">PETG</h3>
              <p className="text-sm text-gray-600 mb-3">Strong, chemical resistant, crystal clear options</p>
              <div className="text-xs text-gray-500">
                <p>• Food safe</p>
                <p>• Impact resistant</p>
                <p>• Easy post-processing</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">ABS</h3>
              <p className="text-sm text-gray-600 mb-3">High temperature resistance, automotive grade</p>
              <div className="text-xs text-gray-500">
                <p>• Heat resistant</p>
                <p>• Strong & durable</p>
                <p>• Machinable</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">TPU</h3>
              <p className="text-sm text-gray-600 mb-3">Flexible, rubber-like, shock absorbing</p>
              <div className="text-xs text-gray-500">
                <p>• Flexible</p>
                <p>• Tear resistant</p>
                <p>• Chemical resistant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Printing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Your Design</h3>
              <p className="text-gray-600 text-sm">
                Upload your STL, OBJ, or STEP file through our quote system or email us directly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Design Review</h3>
              <p className="text-gray-600 text-sm">
                We analyze your design for printability and suggest optimizations if needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">
                Your parts are printed with optimal settings and quality-checked throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">
                Finished parts are cleaned, inspected, and delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Quality Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">
                  Standard orders completed within 24-48 hours. Rush service available for urgent projects.
                </p>
              </div>

              <div className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Precision Quality</h3>
                <p className="text-gray-600">
                  Every print is inspected for dimensional accuracy, surface finish, and structural integrity.
                </p>
              </div>

              <div className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Our team provides guidance on design optimization, material selection, and post-processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automotive Parts",
                description: "Custom brackets, interior components, and replacement parts",
                image: "./printingPage/Automotive_Parts.webp"
              },
              {
                title: "Medical Devices",
                description: "Prosthetics, surgical guides, and medical equipment housings",
                image: "./printingPage/Medical_Devices.webp"
              },
              {
                title: "Consumer Products",
                description: "Electronics housings, household items, and custom accessories",
                image: "./printingPage/Consumer_Products.webp"
              },
              {
                title: "Architectural Models",
                description: "Scale models, concept visualization, and presentation pieces",
                image: "./printingPage/Architectural_Models.webp"
              },
              {
                title: "Educational Tools",
                description: "Teaching aids, scientific models, and interactive displays",
                image: "./printingPage/Educational_Tools.webp"
              },
              {
                title: "Art & Design",
                description: "Sculptures, decorative objects, and creative installations",
                image: "./printingPage/Art_Design.webp"
              }
            ].map((application, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={application.image} 
                  alt={application.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{application.title}</h3>
                  <p className="text-gray-600">{application.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your 3D Printing Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a custom quote today and see how our professional 3D printing services can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onPageChange('3d-modeling')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Need 3D Modeling?
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrintingPage;