'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Building2, Factory, Plane, ShoppingCart, GraduationCap, Warehouse, Award, Clock, Users, Shield, Wrench, Droplets, Layers, Grid3x3, FileCheck, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setMobileMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">MLS Flooring</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Services
              </button>
              <button onClick={() => handleNavClick('industries')} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Industries
              </button>
              <button onClick={() => handleNavClick('projects')} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Projects
              </button>
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                About
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:7049810555" className="hidden md:block text-gray-700 hover:text-gray-900 text-sm font-medium">
                704-981-0555
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium"
              >
                Request Bid
              </button>
              
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => handleNavClick('services')} className="text-left py-2 text-gray-700">Services</button>
                <button onClick={() => handleNavClick('industries')} className="text-left py-2 text-gray-700">Industries</button>
                <button onClick={() => handleNavClick('projects')} className="text-left py-2 text-gray-700">Projects</button>
                <button onClick={() => handleNavClick('about')} className="text-left py-2 text-gray-700">About</button>
                <a href="tel:7049810555" className="py-2 text-gray-700">704-981-0555</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-4">
                <span className="text-xs font-semibold text-gray-700">Enterprise-Grade Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Commercial Concrete & Epoxy Flooring
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Delivering polished concrete, epoxy coatings, and surface preparation for Fortune 500 facilities nationwide. From Amazon distribution centers to international airports.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
                  Request a Bid
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => handleNavClick('projects')} className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-md font-medium">
                  View Projects
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="/epoxy-flooring.jpeg" alt="Industrial warehouse flooring" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why MLS */}
      <section id="about" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why MLS Flooring
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by Fortune 500 companies for large-scale commercial flooring projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award className="w-6 h-6" />, title: 'National Account Experience', description: 'Amazon, CLT Airport, national retail chains' },
              { icon: <Clock className="w-6 h-6" />, title: 'Night & Shutdown Work Experts', description: 'Minimizing disruption to your operations' },
              { icon: <Shield className="w-6 h-6" />, title: 'Certified Crews & Equipment', description: 'Latest technology and trained professionals' },
              { icon: <Users className="w-6 h-6" />, title: 'Dedicated Project Manager', description: 'For every site, ensuring seamless execution' }
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Comprehensive Flooring Services
            </h2>
            <p className="text-lg text-gray-600">
              Full-spectrum solutions for commercial and industrial facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Concrete Polishing', description: 'High-gloss, durable surfaces for warehouses and retail', image: '/concrete-polishing.jpeg', icon: <Grid3x3 className="w-5 h-5" /> },
              { title: 'Epoxy Coatings', description: 'Chemical-resistant, seamless flooring systems', image: '/epoxy-flooring.jpeg', icon: <Droplets className="w-5 h-5" /> },
              { title: 'Surface Preparation', description: 'Shot blasting, grinding, and coating removal', image: '/surface-prep.jpeg', icon: <Wrench className="w-5 h-5" /> },
              { title: 'Joint Filling & Repairs', description: 'Semi-rigid and flexible joint fill systems', image: '/epoxy-flooring.jpeg', icon: <Layers className="w-5 h-5" /> },
              { title: 'Moisture Mitigation', description: 'Vapor barrier and moisture control solutions', image: '/concrete-polishing.jpeg', icon: <Droplets className="w-5 h-5" /> },
              { title: 'Turnkey Packages', description: 'Complete flooring solutions for major facilities', image: '/surface-prep.jpeg', icon: <FileCheck className="w-5 h-5" /> }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 p-2 bg-white rounded-md text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Specialized flooring solutions for demanding commercial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Warehouse className="w-6 h-6" />, title: 'Distribution & Fulfillment', description: 'High-traffic concrete polishing and coatings for 24/7 operations. Designed for forklifts and heavy machinery.' },
              { icon: <Plane className="w-6 h-6" />, title: 'Airports & Transportation', description: 'Durable, low-maintenance flooring for terminals and concourses. Meets strict safety standards.' },
              { icon: <ShoppingCart className="w-6 h-6" />, title: 'Big-Box & Retail', description: 'Polished concrete and epoxy systems combining durability with visual appeal.' },
              { icon: <Factory className="w-6 h-6" />, title: 'Manufacturing', description: 'Chemical-resistant, seamless flooring meeting FDA and ISO standards.' },
              { icon: <GraduationCap className="w-6 h-6" />, title: 'Education & Municipal', description: 'Low-VOC, sustainable flooring for schools and government buildings.' },
              { icon: <Building2 className="w-6 h-6" />, title: 'Corporate & Office', description: 'Modern polished concrete for lobbies, showrooms, and open offices.' }
            ].map((industry, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400">
              Large-scale installations delivered on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Amazon Fulfillment Center', size: '700,000 sq ft', location: 'Charlotte, NC', scope: 'Concrete polishing & joint fill', timeline: '9 nights without disruption', image: '/amazon.jpg' },
              { title: 'Charlotte International Airport', size: '450,000 sq ft', location: 'Charlotte, NC', scope: 'Terminal concourse polishing', timeline: 'Off-peak phased installation', image: '/airport.jpg' },
              { title: 'National Retail Distribution', size: '525,000 sq ft', location: 'Southeast Region', scope: 'High-gloss epoxy coating', timeline: 'Fast-track 14-day delivery', image: '/schools.jpg' }
            ].map((project, i) => (
              <div key={i} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-blue-400 mb-4">{project.size} • {project.location}</p>
                  <p className="text-sm text-gray-300 mb-1">{project.scope}</p>
                  <p className="text-sm text-gray-400">{project.timeline}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Request a Bid
            </h2>
            <p className="text-lg text-gray-600">
              Get a detailed quote for your commercial flooring project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Square Footage</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Floor Type</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                      <option>Select...</option>
                      <option>Concrete Polishing</option>
                      <option>Epoxy Coating</option>
                      <option>Surface Preparation</option>
                      <option>Joint Filling</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                      <option>Select...</option>
                      <option>Immediate (1-2 weeks)</option>
                      <option>Soon (2-4 weeks)</option>
                      <option>Flexible (1-3 months)</option>
                      <option>Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
                </div>

                <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
                  Submit Request
                </button>
              </form>
            </div>

            <div className="relative rounded-lg overflow-hidden min-h-[400px]">
              <Image src="/epoxy-flooring.jpeg" alt="Commercial flooring" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-200 mb-4">Our team provides detailed quotes and project timelines.</p>
                  <a href="tel:7049810555" className="inline-flex items-center gap-2 text-white font-medium">
                    <Phone className="w-5 h-5" />
                    704-981-0555
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold mb-4">MLS Flooring</div>
              <p className="text-sm text-gray-400">
                Enterprise-grade concrete polishing and epoxy coating solutions for commercial facilities.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-white">Services</button></li>
                <li><button onClick={() => handleNavClick('industries')} className="text-gray-400 hover:text-white">Industries</button></li>
                <li><button onClick={() => handleNavClick('projects')} className="text-gray-400 hover:text-white">Projects</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>704-981-0555</p>
                <p>Charlotte, NC</p>
                <p>Southeast Region</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 MLS Flooring. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
