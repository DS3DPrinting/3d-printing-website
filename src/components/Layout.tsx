import React from 'react';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/D&S 3D logo new copy.jpg" 
                  alt="D&S 3D Printing Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold">D&S 3D Printing</span>
              </div>
              <p className="text-gray-300 mb-4">
                Bringing your ideas to life with precision 3D printing and modeling services. 
                From prototypes to production, we deliver quality results with fast turnaround times.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">dsdprinting0@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">077 16 06 788</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-300">D&S 3D Printing, Kirambagawatta, Gatara, Kamburupitiya, Matara.</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>3D Printing</li>
                <li>3D Modeling</li>
                <li>Prototyping</li>
                <li>Custom Parts</li>
                <li>Design Consultation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Materials</h3>
              <ul className="space-y-2 text-gray-300">
                <li>PLA / PLA+</li>
                <li>PETG</li>
                <li>ABS</li>
                <li>TPU</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 D&S 3D Printing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;