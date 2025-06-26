import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  Settings, 
  Monitor, 
  CheckCircle,
  Lightbulb,
  Compass,
  Wrench
} from 'lucide-react';

interface ModelingPageProps {
  onPageChange: (page: string) => void;
}

const ModelingPage: React.FC<ModelingPageProps> = ({ onPageChange }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom 3D Modeling Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your ideas, sketches, and concepts into professional 3D models ready for printing. 
              From simple parts to complex assemblies, we create optimized designs that perform.
            </p>
            <button
              onClick={() => onPageChange('contact')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our 3D Modeling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Concept to 3D</h3>
              <p className="text-gray-600 text-center">
                Turn your sketches, drawings, or ideas into detailed 3D models. We work with rough concepts 
                to create precise, manufacturable designs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Reverse Engineering</h3>
              <p className="text-gray-600 text-center">
                Have a physical part but no digital model? We measure and recreate existing objects 
                with precision for reproduction or modification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Design Optimization</h3>
              <p className="text-gray-600 text-center">
                Improve existing designs for better printability, strength, or functionality. 
                We optimize for material usage and manufacturing efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Modeling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Consultation & Requirements</h3>
                    <p className="text-gray-600">
                      We discuss your project goals, constraints, and specifications to understand exactly what you need.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Design & Concept</h3>
                    <p className="text-gray-600">
                      We create initial 3D models based on your input and provide renderings for your review and feedback.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Refinement & Optimization</h3>
                    <p className="text-gray-600">
                      We refine the design based on your feedback and optimize for 3D printing, strength, and functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Final Delivery</h3>
                    <p className="text-gray-600">
                      You receive print-ready files in multiple formats (STL, OBJ, STEP) along with technical documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="../public/modelingPage/modeling_process.webp" 
                alt="3D Modeling software interface"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Software & Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Tools & Software
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center w-full max-w-xs">
              <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fusion 360</h3>
              <p className="text-sm text-gray-600">Parametric modeling and simulation</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center w-full max-w-xs">
              <Layers className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">SolidWorks</h3>
              <p className="text-sm text-gray-600">Professional CAD design</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center w-full max-w-xs">
              <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Blender</h3>
              <p className="text-sm text-gray-600">Organic modeling and visualization</p>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Modeling Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mechanical Components",
                description: "Gears, brackets, housings, and functional mechanical parts with precise tolerances and fits.",
                features: ["Tolerance analysis", "Assembly validation", "Stress optimization", "Manufacturing constraints"]
              },
              {
                title: "Product Prototypes",
                description: "Complete product models for concept validation, user testing, and investor presentations.",
                features: ["Aesthetic refinement", "Ergonomic analysis", "Brand integration", "Market-ready designs"]
              },
              {
                title: "Replacement Parts",
                description: "Recreate discontinued or custom parts through reverse engineering and dimensional analysis.",
                features: ["Dimensional accuracy", "Material compatibility", "Function preservation", "Cost optimization"]
              },
              {
                title: "Artistic & Sculptural",
                description: "Creative and artistic models for decorative, educational, or display purposes.",
                features: ["Organic shapes", "Detailed textures", "Scale optimization", "Print preparation"]
              }
            ].map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 mb-4">{spec.description}</p>
                <div className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Considerations */}
        <section className="mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Design for 3D Printing Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Structural Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Proper wall thickness (0.8-1.2mm minimum)</li>
                  <li>• Strategic infill patterns for strength</li>
                  <li>• Layer adhesion optimization</li>
                  <li>• Stress concentration analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Print Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Minimal support requirements</li>
                  <li>• Optimal print orientation</li>
                  <li>• Bridging and overhang management</li>
                  <li>• Surface finish considerations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Functional Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Assembly tolerances and clearances</li>
                  <li>• Moving parts and mechanisms</li>
                  <li>• Material property considerations</li>
                  <li>• Post-processing requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* File Formats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">File Formats We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">STL</div>
              <p className="text-gray-600">
                Standard format for 3D printing, optimized mesh resolution for your specific application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">STEP/STP</div>
              <p className="text-gray-600">
                Parametric CAD format for further editing, analysis, or manufacturing processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">OBJ</div>
              <p className="text-gray-600">
                Universal 3D format with texture support for visualization and rendering applications.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Turn Your Vision Into Reality</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you have a rough sketch or a complex engineering challenge, our 3D modeling experts 
            are ready to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </button>
            <button
              onClick={() => onPageChange('3d-printing')}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View 3D Printing Services
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ModelingPage;