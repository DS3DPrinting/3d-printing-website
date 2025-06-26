import React, { useState } from 'react';
import { Layers, Settings, FileText, Package, ChevronRight } from 'lucide-react';

interface AboutPrintingPageProps {
  onPageChange: (page: string) => void;
}

const AboutPrintingPage: React.FC<AboutPrintingPageProps> = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('what-is-3d-printing');

  const tabs = [
    { id: 'what-is-3d-printing', label: 'What is 3D Printing', icon: Layers },
    { id: 'design-3d-printing', label: 'Design 3D Printing', icon: Settings },
    { id: 'file-preparation', label: 'File Preparation', icon: FileText },
    { id: 'material-selection', label: 'Material Selection', icon: Package }
  ];

  const materialComparison = [
    {
      feature: 'Ease of Printing',
      pla: 'Very Easy',
      petg: 'Moderate (stringing possible)',
      abs: 'Difficult (warping, fumes)'
    },
    {
      feature: 'Strength',
      pla: 'Medium-High',
      petg: 'High',
      abs: 'High'
    },
    {
      feature: 'Flexibility',
      pla: 'Low',
      petg: 'Moderate',
      abs: 'Moderate'
    },
    {
      feature: 'Temperature Resistance',
      pla: 'Low (~60°C)',
      petg: 'Medium (~75°C)',
      abs: 'High (~100°C)'
    },
    {
      feature: 'Durability',
      pla: 'Good for general use',
      petg: 'Weather & impact resistant',
      abs: 'High impact + wear resistance'
    },
    {
      feature: 'Surface Finish',
      pla: 'Smooth',
      petg: 'Semi-glossy',
      abs: 'Matte, may require post-processing'
    },
    {
      feature: 'Use Environment',
      pla: 'Indoors',
      petg: 'Indoors & Outdoors',
      abs: 'High-temp or rugged environments'
    }
  ];

  const applicationGuide = [
    {
      application: 'Prototype Enclosure (Electronics)',
      material: 'PLA+',
      reason: 'Easy to print, holds shape, and looks professional'
    },
    {
      application: 'RC Car Parts (Bumper, Mounts)',
      material: 'ABS',
      reason: 'Durable, impact-resistant, withstands minor crashes and heat'
    },
    {
      application: 'Wearable Device Holder / Watch Dock',
      material: 'PETG',
      reason: 'Skin-safe, slightly flexible, good finish'
    },
    {
      application: 'Custom Tool Handle / Jig',
      material: 'PETG or ABS',
      reason: 'Strong under load, good grip and durability'
    },
    {
      application: 'Mechanical Gears (Low Load)',
      material: 'PLA+',
      reason: 'Dimensionally stable and easy to test before switching to tougher material'
    },
    {
      application: 'Drone Landing Legs / Prop Guards',
      material: 'TPU',
      reason: 'Flexible and shock-absorbent, protects from crash impact'
    }
  ];

  const technologies = [
    {
      name: 'FDM (Fused Deposition Modeling)',
      description: 'Melts thermoplastic filament and extrudes layer by layer',
      materials: 'PLA, ABS, PETG, TPU'
    },
    {
      name: 'SLA (Stereolithography)',
      description: 'Uses UV light to cure resin layer by layer',
      materials: 'Photopolymer Resin'
    },
    {
      name: 'SLS (Selective Laser Sintering)',
      description: 'Fuses powder using a laser',
      materials: 'Nylon, composites'
    },
    {
      name: 'DMLS (Direct Metal Laser Sintering)',
      description: 'Fuses metal powder with high-energy laser',
      materials: 'Titanium, Steel'
    },
    {
      name: 'Binder Jetting',
      description: 'Glues layers of powder with a binding agent',
      materials: 'Sand, metal, ceramics'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'what-is-3d-printing':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction to 3D Printing</h3>
              <p className="text-gray-600 mb-4">
                3D Printing is the process of turning a digital 3D model into a physical object by adding material layer by layer. 
                This technology is part of a broader group known as additive manufacturing and is revolutionizing how products are 
                designed, prototyped, and manufactured.
              </p>
              <p className="text-gray-600 mb-4">
                At D&S 3D Printing, we primarily use FDM (Fused Deposition Modeling), where thermoplastic filaments like PLA, PETG, 
                or TPU are heated and extruded through a nozzle to create solid, custom parts.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're developing a prototype, replacing a broken part, or building a complex mechanical assembly, 
                3D printing offers a fast, affordable, and customizable solution.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Highlights:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Layer-by-layer additive process</li>
                  <li>• Great for custom, one-off items or small batch production</li>
                  <li>• Works from .STL, .OBJ, or .STEP files</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. A Brief History of 3D Printing</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>1981:</strong> The first concept of 3D printing was published by Dr. Hideo Kodama of Japan.</p>
                <p><strong>1984:</strong> Charles Hull invented SLA (Stereolithography), the first commercial 3D printing technology.</p>
                <p><strong>1990s:</strong> Industrial machines gained popularity, mainly for prototyping.</p>
                <p><strong>2010s:</strong> Desktop 3D printers became affordable for hobbyists and small businesses.</p>
                <p><strong>Today:</strong> 3D printing is used in aerospace, automotive, medical, fashion, and construction industries.</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Why Use 3D Printing?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Rapid Prototyping', desc: 'Go from idea to physical model in hours or days' },
                  { title: 'Cost-Effective for Low Volume', desc: 'No molds or tooling required' },
                  { title: 'Customization', desc: 'Every object can be made unique' },
                  { title: 'On-Demand Production', desc: 'Eliminate the need for large inventories' },
                  { title: 'Design Freedom', desc: 'Create complex geometries not possible with traditional manufacturing' }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Types of 3D Printing Technologies</h3>
              <p className="text-gray-600 mb-4">
                While FDM is the most common and affordable, several other technologies exist:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materials Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technologies.map((tech, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tech.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{tech.description}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{tech.materials}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mt-4 font-medium">At D&S, we specialize in FDM for durable, cost-effective parts.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Today's 3D Printing Use Cases</h3>
              <p className="text-gray-600 mb-4">3D printing is widely used across various sectors:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Medical</h4>
                  <p className="text-gray-600 text-sm">Prosthetics, dental models, surgical tools</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Automotive</h4>
                  <p className="text-gray-600 text-sm">Functional prototypes, tooling, interior parts</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Aerospace</h4>
                  <p className="text-gray-600 text-sm">Lightweight parts, structural brackets</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Future of 3D Printing</h3>
              <p className="text-gray-600 mb-4">The future of 3D printing is extremely promising:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• AI-assisted 3D modeling & design optimization</li>
                <li>• Bioprinting of organs and tissues</li>
                <li>• 3D printing in space exploration (NASA & SpaceX projects)</li>
                <li>• Hybrid manufacturing (mixing subtractive and additive)</li>
                <li>• Sustainable 3D printing with recycled and biodegradable materials</li>
              </ul>
              <p className="text-gray-600 mt-4">
                As the technology continues to evolve, mass personalization, faster speeds, and material advancements 
                will reshape global manufacturing.
              </p>
            </div>
          </div>
        );

      case 'design-3d-printing':
        return (
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                Good 3D printing starts with a well-prepared 3D design. If you don't have one, our team can help you create it. 
                Whether it's a product prototype, mechanical part, or artistic model, we convert your idea into a print-ready 3D file.
              </p>
              <p className="text-gray-600 mb-6">
                You can also send your existing designs. We check for:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Proper scale</li>
                <li>• Correct wall thickness</li>
                <li>• Orientation for clean printing and fewer supports</li>
                <li>• Fit for interlocking or moving parts</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services Include:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom 3D modeling from sketches, drawings, or concepts</li>
                <li>• Design optimization for strength, surface finish, and print speed</li>
                <li>• Reverse engineering of physical parts into digital models</li>
                <li>• Tolerance and fit analysis for snap-fit and moving components</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tips & Tricks for Designing 3D Printable Models</h3>
              <p className="text-gray-600 mb-4">
                These help users (and even clients) who may be creating their own designs in Fusion 360, Blender, or TinkerCAD.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">1. Wall Thickness</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Ensure minimum wall thickness of 0.8–1.2 mm (depending on the nozzle size)</li>
                    <li>• Thin walls may warp or break easily</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">2. Avoid Overhangs {'>'} 45°</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Design with fewer steep overhangs to reduce the need for supports</li>
                    <li>• Angled chamfers or fillets are better than flat bridges</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">3. Layer Orientation Matters</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Parts are weaker along the layer lines (Z-direction)</li>
                    <li>• Print orientation can affect both strength and finish</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">4. Tolerances for Fit</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Leave 0.2 mm to 0.4 mm gap for sliding or snap-fit parts</li>
                    <li>• Don't model parts as touching — friction and material expansion matter</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">5. Fillets {'>'} Sharp Corners</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Use fillets instead of sharp inside corners</li>
                    <li>• Reduces stress concentrations and improves print quality</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Focus Points When Designing for 3D Printing</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Design Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why It's Important</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { area: 'Wall Thickness', importance: 'Prevents fragile or unprintable walls' },
                      { area: 'Overhangs / Supports', importance: 'Reduces cleanup and improves surface quality' },
                      { area: 'Part Orientation', importance: 'Affects strength, support, and time' },
                      { area: 'Fit/Tolerance', importance: 'Ensures parts assemble correctly after printing' },
                      { area: 'Material-Specific Behavior', importance: 'PLA, ABS, PETG shrink, warp, or flex differently' },
                      { area: 'Feature Size & Detail', importance: 'Prevents loss of visual or functional features' },
                      { area: 'Print Bed Contact', importance: 'Increases part stability during printing' }
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.area}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.importance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'file-preparation':
        return (
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                Before printing, your 3D model must be sliced into layers using slicing software. This step generates G-code, 
                the instructions your printer reads.
              </p>
              <p className="text-gray-600 mb-6">
                Our team uses advanced slicers (like Cura or PrusaSlicer) to prepare your file with optimal settings 
                based on material, speed, support, and quality.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guidelines for File Submission:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Acceptable file formats:</strong> .STL, .OBJ, .STEP</li>
                <li>• <strong>Wall thickness:</strong> Minimum 0.8 mm recommended</li>
                <li>• <strong>Avoid tiny unsupported overhangs</strong></li>
                <li>• <strong>Compress files</strong> if sending multiple models</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">File Preparation Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">1. Model Analysis</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Check for manifold geometry</li>
                    <li>• Verify proper scale and dimensions</li>
                    <li>• Identify potential print issues</li>
                    <li>• Analyze support requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">2. Slicing Optimization</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Select optimal layer height</li>
                    <li>• Configure infill patterns</li>
                    <li>• Set appropriate print speeds</li>
                    <li>• Generate minimal supports</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">3. Material Settings</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Temperature profiles</li>
                    <li>• Retraction settings</li>
                    <li>• Cooling configurations</li>
                    <li>• Bed adhesion optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">4. Quality Control</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• G-code validation</li>
                    <li>• Print time estimation</li>
                    <li>• Material usage calculation</li>
                    <li>• Final review and approval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common File Issues We Fix:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• Non-manifold edges</li>
                  <li>• Reversed normals</li>
                  <li>• Intersecting geometry</li>
                  <li>• Scale problems</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Thin walls</li>
                  <li>• Floating geometry</li>
                  <li>• Missing surfaces</li>
                  <li>• Duplicate vertices</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'material-selection':
        return (
          <div className="space-y-8">
            <p className="text-gray-600 mb-6">
              Choosing the right material is essential to ensure your 3D print performs as expected. Below is a detailed 
              overview of commonly used materials, followed by a comparison table and real-world use cases for PLA+, PETG, and ABS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">PLA (Polylactic Acid)</h3>
                <ul className="space-y-1 text-gray-600 text-sm mb-3">
                  <li>• Eco-friendly, easy to print</li>
                  <li>• Best for beginners</li>
                  <li>• Low heat resistance</li>
                </ul>
                <p className="text-sm text-gray-500"><strong>Use Cases:</strong> Decorative models, concept prototypes</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">PLA+</h3>
                <ul className="space-y-1 text-gray-600 text-sm mb-3">
                  <li>• Tougher and less brittle than regular PLA</li>
                  <li>• Cleaner surface finish, fewer printing issues</li>
                  <li>• Slightly more expensive</li>
                </ul>
                <p className="text-sm text-gray-500"><strong>Use Cases:</strong> Display parts, medium-duty mechanical models</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">PETG</h3>
                <ul className="space-y-1 text-gray-600 text-sm mb-3">
                  <li>• Strong and semi-flexible</li>
                  <li>• Water and chemical resistant</li>
                  <li>• Requires tuning to avoid stringing</li>
                </ul>
                <p className="text-sm text-gray-500"><strong>Use Cases:</strong> Outdoor parts, mechanical enclosures, storage bins</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">ABS</h3>
                <ul className="space-y-1 text-gray-600 text-sm mb-3">
                  <li>• High strength and temperature resistance</li>
                  <li>• Suitable for engineering and automotive applications</li>
                  <li>• Warps without enclosure or heated bed</li>
                </ul>
                <p className="text-sm text-gray-500"><strong>Use Cases:</strong> Functional end-use parts, structural components</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Comparison: PLA+ vs PETG vs ABS</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PLA+</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PETG</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ABS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materialComparison.map((row, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.pla}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.petg}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{row.abs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Applications: Material Selection Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Material</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {applicationGuide.map((app, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{app.application}</td>
                        <td className="px-6 py-4 text-sm text-blue-600 font-medium">{app.material}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{app.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to print your model?</h3>
              <p className="text-gray-600 mb-6">Get a custom quote today!</p>
              <button
                onClick={() => onPageChange('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Get a Quote</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About 3D Printing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Learn everything you need to know about 3D printing technology, design considerations, 
              file preparation, and material selection for your next project.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutPrintingPage;