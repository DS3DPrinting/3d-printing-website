import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Package, 
  Star,
  Filter,
  Grid,
  List,
  Search
} from 'lucide-react';

interface OurProjectsPageProps {
  onPageChange: (page: string) => void;
}

interface Project {
  id: string;
  title: string;
  category: string;
  material: string;
  description: string;
  details: string;
  image: string;
  completionTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  client: string;
  date: string;
  tags: string[];
}

const OurProjectsPage: React.FC<OurProjectsPageProps> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const projects: Project[] = [
    {
      id: '3',
      title: 'Buddha Statue',
      category: 'Religious & Cultural Art',
      material: 'PLA+',
      description: 'A beautifully crafted 3D printed Buddha statue seated on a lotus base, designed to inspire peace and mindfulness.',
      details: 'This elegant Buddha statue was 3D printed using high-quality PLA+ filament, ensuring a smooth finish and long-lasting durability. The lotus base adds a touch of spiritual symbolism, making it perfect as a home décor piece, a thoughtful gift, or for personal meditation spaces. Custom sizes and finishes are available on request.',
      image: './printedParts/loadBuddha.jpg',
      completionTime: '9 Hours',
      difficulty: 'Hard',
      client: 'Private Collector',
      date: '2025-07-08',
      tags: ['Buddha', 'Lotus Base', 'Home Decor', 'Spiritual', 'Gift', '3D Printed Art']
    },
    {
      id: '6',
      title: '3D Printed Aircraft Model',
      category: 'Prototypes & Custom Models',
      material: 'Low Weight PLA',
      description: 'A full 3D printed aircraft model built from a customer’s design, optimized with lightweight PLA for durability and reduced weight.',
      details: 'This project involved 3D printing a complete aircraft model provided by the customer. Using Low Weight PLA filament, the structure was produced to maintain strength while minimizing overall weight. The full model required precision printing across multiple parts and was completed over 14 days of continuous production. A perfect showcase of how large-scale 3D printing can bring ambitious engineering concepts to life.',
      image: './printedParts/aircraft01.jpg',
      completionTime: '14 days',
      difficulty: 'Hard',
      client: 'Custom Order',
      date: '2025-07-09',
      tags: ['Aircraft', 'Prototype', 'Engineering', 'Custom Model', 'Large Scale', 'Low Weight PLA']
    },
    {
      id: '1',
      title: 'Custom 3D Printed Face Mask',
      category: 'Wearables & Custom Orders',
      material: 'PLA+',
      description: 'A unique 3D printed face mask created for a customer design request, combining style with personalized creativity.',
      details: 'This custom-designed face mask was 3D printed in durable PLA+ filament with a smooth finish. The project was completed in just 5 hours, making it a quick yet high-quality production. Designed to match the customer’s concept, this mask showcases how 3D printing can bring personalized wearable designs to life. Ideal for cosplay, themed events, or display pieces.',
      image: './printedParts/faceMask.jpg',
      completionTime: '5 hours',
      difficulty: 'Easy',
      client: 'Custom Order',
      date: '2025-07-10',
      tags: ['Face Mask', 'Custom Design', 'Wearable', 'Cosplay', '3D Printed Art']
    },
    {
      id: '2',
      title: '3D Printed Dragon Figure',
      category: 'Collectibles & Custom Orders',
      material: 'PLA+',
      description: 'A fierce dragon model brought to life with 3D printing, perfect for collectors, fantasy lovers, and display décor.',
      details: 'This custom dragon figure was 3D printed using high-quality PLA+ filament, ensuring durability and fine detailing on the wings, scales, and stance. Printed for a customer order, it took 6 hours and 30 minutes to complete. The glossy black finish enhances its striking appearance, making it an ideal centerpiece for fantasy collections or unique décor.',
      image: './printedParts/dragon.jpg',
      completionTime: '6 hours 30 minutes',
      difficulty: 'Medium',
      client: 'Custom Order',
      date: '2025-09-03',
      tags: ['Dragon', 'Fantasy', 'Collectible', 'Custom Order', '3D Printed Art', 'Gift']
    },
    {
      id: '4',
      title: 'Custom Robo Arm Parts',
      category: 'Educational & Engineering Projects',
      material: 'PLA+',
      description: '3D printed components for a fully custom robotic arm designed by a university student.',
      details: 'This project involved 3D printing all parts required to assemble a robotic arm for a university engineering project. The student provided the custom design, and the components were produced with high-quality PLA+ filament to ensure strength and precision. The full set of parts was completed within one day of continuous printing, supporting innovation and hands-on learning for future engineers.',
      image: './printedParts/roboArmParts.png',
      completionTime: '1 day',
      difficulty: 'Medium',
      client: 'University Student Project',
      date: '2025-07-01',
      tags: ['Robotic Arm', 'Engineering', 'University Project', 'Custom Design', 'Educational', '3D Printed Parts']
    },
    {
      id: '5',
      title: 'Custom Cartoon Figure',
      category: 'Miniatures & Personalized Gifts',
      material: 'PLA+',
      description: 'A fun 3D printed cartoon-style miniature figure created from a real human photo using AI and 3D printing.',
      details: 'This project started with an AI-generated 3D model, transforming a real human photo into a stylized cartoon figure. The model was then 3D printed in PLA+ with a height of 5 cm. The print took 2 hours to complete and was designed as a simple, lightweight, and personalized miniature—perfect as a gift, keepsake, or collectible.',
      image: './printedParts/miniatureFigure.jpg',
      completionTime: '2 hours 30 minutes',
      difficulty: 'Easy',
      client: 'Custom Order',
      date: '2025-09-05',
      tags: ['Cartoon Figure', 'Miniature', 'Personalized', 'AI Generated', 'Gift', '3D Printed Model']
    },
    {
      id: '7',
      title: 'Custom Power Bank Casing',
      category: 'Consumer Electronics',
      material: 'PLA+',
      description: 'A durable 3D printed casing designed to protect and style a custom power bank.',
      details: 'This project involved 3D printing a complete aircraft model provided by the customer. Using Low Weight PLA filament, the structure was produced to maintain strength while minimizing overall weight. The full model required precision printing across multiple parts and was completed over 14 days of continuous production. A perfect showcase of how large-scale 3D printing can bring ambitious engineering concepts to life.',
      image: './printedParts/powerBankCasing.jpg',
      completionTime: '4 hours',
      difficulty: 'Easy',
      client: 'Custom Order',
      date: '2025-07-09',
      tags: ['Power Bank', 'Electronics', 'Custom Design', 'Functional Print', 'PLA+', 'Protective Casing']
    }
  ];

  const categories = ['All', 'Medical', 'Automotive & Aerospace', 'Architecture', 'Consumer Products', 'Education', 'Art & Design'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMaterialColor = (material: string) => {
    switch (material) {
      case 'PLA+': return 'text-green-600 bg-green-100';
      case 'PETG': return 'text-blue-600 bg-blue-100';
      case 'ABS': return 'text-red-600 bg-red-100';
      case 'TPU': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore our portfolio of successful 3D printing projects across various industries. 
              From medical devices to architectural models, see the quality and precision we deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onPageChange('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => onPageChange('3d-printing')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        {/* <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.5%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </section> */}

        {/* Filters and Search */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            {/*<div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>*/}

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-white text-indigo-600 shadow' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-white text-indigo-600 shadow' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </section>

        {/* Projects Grid/List */}
        <section className="mb-16">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span> */}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-indigo-600 font-medium">{project.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMaterialColor(project.material)}`}>
                        {project.material}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{project.completionTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Client:</span> {project.client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-indigo-600 font-medium">{project.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMaterialColor(project.material)}`}>
                            {project.material}
                          </span>
                          {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                            {project.difficulty}
                          </span> */}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.details}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{project.completionTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(project.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Package className="h-4 w-4" />
                            <span>{project.client}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Own Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and bring your ideas to life with professional 3D printing services. 
            From concept to completion, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onPageChange('contact')}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get Your Quote
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

export default OurProjectsPage;