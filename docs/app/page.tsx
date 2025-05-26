import { Phone, Mail, MapPin, Zap, Hammer, Building2, Shield, Award, Users, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">ElectroWood Pro</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-amber-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700">Get Quote</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-600/20 text-amber-200 border-amber-600/30">
              Trusted by Banks & Government Institutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Electrical &<span className="text-amber-400"> Wooden Interior</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Delivering exceptional electrical contracting and bespoke wooden interior design services to banks,
              government institutions, and commercial establishments for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Crafting Excellence in Every Project</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With decades of experience in electrical contracting and wooden interior design, we specialize in creating
              sophisticated, functional spaces for financial institutions and government buildings. Our commitment to
              quality and attention to detail has made us the preferred choice for prestigious projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">20+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Two decades of expertise in electrical systems and premium wooden interiors
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Banking Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specialized in bank interiors and electrical systems for financial institutions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Licensed & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fully licensed electrical contractor with comprehensive insurance coverage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Premium Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical and interior solutions tailored for banks, government institutions, and
              commercial establishments
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Electrical Services */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electrical Contracting</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Commercial Electrical Installation</h4>
                    <p className="text-gray-600">Complete electrical systems for banks and office buildings</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Security System Wiring</h4>
                    <p className="text-gray-600">Advanced security and surveillance system installations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Power Systems</h4>
                    <p className="text-gray-600">Backup generators and UPS system installations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">LED Lighting Solutions</h4>
                    <p className="text-gray-600">Energy-efficient lighting design and installation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Electrical Maintenance</h4>
                    <p className="text-gray-600">Ongoing maintenance and emergency repair services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interior Services */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <Hammer className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Wooden Interiors</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Bank Interiors</h4>
                    <p className="text-gray-600">Elegant wooden fixtures and furniture for banking halls</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Executive Office Design</h4>
                    <p className="text-gray-600">Premium wooden paneling and custom furniture</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reception Area Styling</h4>
                    <p className="text-gray-600">Impressive wooden reception desks and waiting areas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Conference Room Solutions</h4>
                    <p className="text-gray-600">Sophisticated wooden conference tables and wall panels</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Millwork</h4>
                    <p className="text-gray-600">Bespoke wooden installations and architectural details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by Leading Institutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our portfolio includes prestigious projects for major banks and government institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">National Bank Branch</CardTitle>
                <CardDescription>Complete electrical and interior renovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Full-scale renovation including electrical systems, custom wooden teller stations, and executive
                  office interiors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Electrical</Badge>
                  <Badge variant="secondary">Interiors</Badge>
                  <Badge variant="secondary">Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <Shield className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Government Treasury Office</CardTitle>
                <CardDescription>High-security electrical and interior systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized electrical installation with advanced security features and premium wooden conference
                  rooms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Government</Badge>
                  <Badge variant="secondary">Security</Badge>
                  <Badge variant="secondary">Premium Wood</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Regional Bank Headquarters</CardTitle>
                <CardDescription>Executive floor complete makeover</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Luxury wooden paneling, custom furniture, and state-of-the-art electrical systems for executive
                  offices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Executive</Badge>
                  <Badge variant="secondary">Luxury</Badge>
                  <Badge variant="secondary">Custom</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Valued Clients Include:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-700">National Banks</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <p className="font-semibold text-gray-700">Government Offices</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-10 w-10 text-amber-600" />
                </div>
                <p className="font-semibold text-gray-700">Credit Unions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-10 w-10 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-700">Financial Institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300">
                Contact us today for a consultation and detailed quote for your electrical and interior needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-300">info@electrowoodpro.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-300">
                        123 Business District
                        <br />
                        Your City, State 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Request a Quote</CardTitle>
                    <CardDescription className="text-gray-300">
                      Tell us about your project and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600">
                        <option>Select a service</option>
                        <option>Electrical Contracting</option>
                        <option>Wooden Interiors</option>
                        <option>Both Services</option>
                        <option>Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-amber-600 hover:bg-amber-700">Send Message</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">ElectroWood Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium electrical contracting and wooden interior solutions for banks, government institutions, and
                commercial establishments.
              </p>
              <p className="text-sm text-gray-500">
                Licensed Electrical Contractor | Fully Insured | 20+ Years Experience
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Electrical Installation</li>
                <li>Wooden Interiors</li>
                <li>Security Systems</li>
                <li>Emergency Repairs</li>
                <li>Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@electrowoodpro.com</li>
                <li>123 Business District</li>
                <li>Your City, State 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 ElectroWood Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
