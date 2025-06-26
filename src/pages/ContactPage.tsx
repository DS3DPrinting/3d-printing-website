import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Upload, 
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    urgency: 'standard'
  });
  
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     emailjs.sendForm(
    'service_5j7bn5u',       // from EmailJS dashboard
    'template_73vbxvl',      // from EmailJS template
    e.target as HTMLFormElement,
    'eMmJQarVaqlERJEu4'        // from EmailJS account
  )
  .then((result) => {
    console.log(result.text);
    alert('Quote request sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      urgency: '',
      message: ''
    });
  }, (error) => {
    console.log(error.text);
    alert('Something went wrong. Try again later.');
  });
    // Here you would typically send the form data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Contact us today for a personalized quote on your 3D printing 
              or modeling project. Fast response, competitive pricing, exceptional quality.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call</h3>
              <p className="text-gray-600 mb-4">Speak directly with our</p>
              <p className="text-lg font-semibold text-blue-600">077 16 06 788</p>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us your project details</p>
              <p className="text-lg font-semibold text-green-600">dsdprinting0@gmail.com</p>
              <p className="text-sm text-gray-500">Response within 2 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
              {/* <p className="text-gray-600 mb-4">See our facility in person</p> */}
              <p className="text-lg font-semibold text-purple-600">D&S 3D Printing</p>
              <p className="text-sm text-gray-500">Kamburupitiya, Matara.</p>
            </div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Your Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below with your project details. The more information you provide, 
                the more accurate your quote will be. We'll get back to you within 2 hours during business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Response</h4>
                    <p className="text-gray-600">Get your quote within 2 hours during business hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden fees or unexpected charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                    <p className="text-gray-600">Get recommendations on materials and design optimization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. We'll review your project details and get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your Phone Number"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a project type</option>
                        <option value="3d-printing">3D Printing Only</option>
                        <option value="3d-modeling">3D Modeling Only</option>
                        <option value="Modeling & Printing">Both Modeling & Printing</option>
                        <option value="prototyping">Rapid Prototyping</option>
                        <option value="replacement-parts">Replacement Parts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="standard">Standard (3-5 days)</option>
                        <option value="rush">Rush (1-2 days)</option>
                        <option value="urgent">Urgent (Same day)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your project: What do you need? What's the intended use? Any specific requirements for materials, dimensions, or finish?"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Files (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="files"
                        multiple
                        accept=".stl,.obj,.step,.stp,.3mf,.ply,.pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="mt-2 flex items-center space-x-2">
                        <Upload className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          Accepted formats: STL, OBJ, STEP, STP, 3MF, PLY, PDF, JPG, PNG (Max 10MB each)
                        </span>
                      </div>
                    </div>
                  </div> */}

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Submit Quote Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Response Time & Process */}
        <section className="mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quote Review</h3>
                <p className="text-sm text-gray-600">We analyze your project requirements and files</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Custom Quote</h3>
                <p className="text-sm text-gray-600">Receive detailed pricing and timeline within 2 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Project Start</h3>
                <p className="text-sm text-gray-600">Approve the quote and we begin production</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">Receive your finished parts on time</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does it take to get a quote?</h3>
              <p className="text-gray-600">
                We typically respond within 2 hours during business hours (8AM-6PM EST, Monday-Friday). 
                For urgent projects, call us directly at +1 (555) 123-4567.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What file formats do you accept?</h3>
              <p className="text-gray-600">
                We accept STL, OBJ, STEP, STP, 3MF, and PLY files. For modeling services, we also work with 
                sketches, drawings, PDFs, and reference photos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer rush services?</h3>
              <p className="text-gray-600">
                Yes! We offer rush printing with 24-48 hour turnaround and same-day service for urgent projects. 
                Rush pricing applies for expedited orders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can you help with design optimization?</h3>
              <p className="text-gray-600">
                Absolutely! Our team reviews all designs for printability and can suggest optimizations for 
                better results, cost savings, or improved functionality.
              </p>
            </div>
          </div>
        </section> */}

        {/* Alternative Contact Methods */}
        <section className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Need to Reach Us Another Way?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're here to help with your 3D printing needs. Choose the contact method that works best for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0771606788"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:dsdprinting0@gmail.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;