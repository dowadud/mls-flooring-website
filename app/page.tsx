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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header - Clean Fortune 500 Style */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-sm py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={140} 
                height={42}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => handleNavClick('services')} className="text-mls-slate hover:text-mls-navy font-medium transition-colors text-sm">
                Services
              </button>
              <button onClick={() => handleNavClick('industries')} className="text-mls-slate hover:text-mls-navy font-medium transition-colors text-sm">
                Industries
              </button>
              <button onClick={() => handleNavClick('projects')} className="text-mls-slate hover:text-mls-navy font-medium transition-colors text-sm">
                Projects
              </button>
              <button onClick={() => handleNavClick('about')} className="text-mls-slate hover:text-mls-navy font-medium transition-colors text-sm">
                About
              </button>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:7049810555"
                className="hidden xl:flex items-center gap-2 text-mls-slate hover:text-mls-navy font-medium transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>704-981-0555</span>
              </a>
              <button 
                onClick={scrollToContact}
                className="hidden sm:block bg-mls-navy hover:bg-mls-navy/90 text-white px-5 py-2 rounded-lg font-medium transition-all text-sm"
              >
                Request Bid
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-mls-slate hover:text-mls-navy transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="lg:hidden mt-4 pb-4 border-t border-mls-border pt-4"
            >
              <nav className="flex flex-col space-y-3">
                <button onClick={() => handleNavClick('services')} className="text-left text-mls-slate hover:text-mls-navy font-medium transition-colors py-2">
                  Services
                </button>
                <button onClick={() => handleNavClick('industries')} className="text-left text-mls-slate hover:text-mls-navy font-medium transition-colors py-2">
                  Industries
                </button>
                <button onClick={() => handleNavClick('projects')} className="text-left text-mls-slate hover:text-mls-navy font-medium transition-colors py-2">
                  Projects
                </button>
                <button onClick={() => handleNavClick('about')} className="text-left text-mls-slate hover:text-mls-navy font-medium transition-colors py-2">
                  About
                </button>
                <a href="tel:7049810555" className="text-left text-mls-slate hover:text-mls-navy font-medium transition-colors py-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  704-981-0555
                </a>
                <button onClick={scrollToContact} className="bg-mls-navy hover:bg-mls-navy/90 text-white px-5 py-2.5 rounded-lg font-medium transition-all text-left">
                  Request a Bid
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero - Fortune 500 Clean Style */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-mls-bg to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block px-4 py-1.5 bg-mls-navy/5 rounded-full mb-6">
                <span className="text-sm font-medium text-mls-navy">Enterprise-Grade Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-mls-navy leading-tight mb-6">
                Commercial Concrete & Epoxy Flooring
              </h1>
              
              <p className="text-lg sm:text-xl text-mls-slate mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Delivering polished concrete, epoxy coatings, and surface preparation for Fortune 500 facilities nationwide. From Amazon distribution centers to international airports.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="group px-6 py-3 bg-mls-navy hover:bg-mls-navy/90 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                >
                  Request a Bid
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => handleNavClick('projects')}
                  className="px-6 py-3 bg-white hover:bg-mls-bg text-mls-navy border border-mls-border rounded-lg font-medium transition-all"
                >
                  View Projects
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/epoxy-flooring.jpeg"
                alt="Industrial warehouse flooring"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MLS - Fixed Fortune 500 Style */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-mls-navy mb-3">
              Why MLS Flooring
            </h2>
            <p className="text-base md:text-lg text-mls-gray max-w-2xl mx-auto">
              Trusted by Fortune 500 companies for large-scale commercial flooring projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-5 h-5" />,
                title: 'National Account Experience',
                description: 'Amazon, CLT Airport, national retail chains'
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: 'Night & Shutdown Work Experts',
                description: 'Minimizing disruption to your operations'
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'Certified Crews & Equipment',
                description: 'Latest technology and trained professionals'
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: 'Dedicated Project Manager',
                description: 'For every site, ensuring seamless execution'
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-mls-border bg-white/70 px-5 py-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mls-navy/5 text-mls-navy">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-mls-navy">
                  {item.title}
                </h3>
                <p className="text-sm text-mls-gray leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Fortune 500 Clean Grid */}
      <section id="services" className="py-16 bg-mls-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-mls-navy mb-3">
              Comprehensive Flooring Services
            </h2>
            <p className="text-base md:text-lg text-mls-gray max-w-2xl mx-auto">
              Full-spectrum solutions for commercial and industrial facilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Grid3x3 className="w-5 h-5" />,
                title: 'Concrete Polishing',
                description: 'High-gloss, durable surfaces for warehouses and retail',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: <Droplets className="w-5 h-5" />,
                title: 'Epoxy Coatings',
                description: 'Chemical-resistant, seamless flooring systems',
                image: '/epoxy-flooring.jpeg'
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: 'Surface Preparation',
                description: 'Shot blasting, grinding, and coating removal',
                image: '/surface-prep.jpeg'
              },
              {
                icon: <Layers className="w-5 h-5" />,
                title: 'Joint Filling & Repairs',
                description: 'Semi-rigid and flexible joint fill systems',
                image: '/epoxy-flooring.jpeg'
              },
              {
                icon: <Droplets className="w-5 h-5" />,
                title: 'Moisture Mitigation',
                description: 'Vapor barrier and moisture control solutions',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: <FileCheck className="w-5 h-5" />,
                title: 'Turnkey Packages',
                description: 'Complete flooring solutions for major facilities',
                image: '/surface-prep.jpeg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden border border-mls-border hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-mls-navy">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-mls-navy mb-2">{service.title}</h3>
                  <p className="text-sm text-mls-gray leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries - Clean Grid */}
      <section id="industries" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-mls-navy mb-3">
              Industries We Serve
            </h2>
            <p className="text-base md:text-lg text-mls-gray max-w-2xl mx-auto">
              Specialized flooring solutions for demanding commercial environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Warehouse className="w-5 h-5" />,
                title: 'Distribution & Fulfillment',
                description: 'High-traffic concrete polishing and coatings for 24/7 operations. Designed for forklifts and heavy machinery.'
              },
              {
                icon: <Plane className="w-5 h-5" />,
                title: 'Airports & Transportation',
                description: 'Durable, low-maintenance flooring for terminals and concourses. Meets strict safety standards.'
              },
              {
                icon: <ShoppingCart className="w-5 h-5" />,
                title: 'Big-Box & Retail',
                description: 'Polished concrete and epoxy systems combining durability with visual appeal.'
              },
              {
                icon: <Factory className="w-5 h-5" />,
                title: 'Manufacturing',
                description: 'Chemical-resistant, seamless flooring meeting FDA and ISO standards.'
              },
              {
                icon: <GraduationCap className="w-5 h-5" />,
                title: 'Education & Municipal',
                description: 'Low-VOC, sustainable flooring for schools and government buildings.'
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                title: 'Corporate & Office',
                description: 'Modern polished concrete for lobbies, showrooms, and open offices.'
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl border border-mls-border bg-white/70 p-6 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-mls-navy/5 text-mls-navy mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-mls-navy mb-2">{industry.title}</h3>
                <p className="text-sm text-mls-gray leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Clean Design */}
      <section id="projects" className="py-16 bg-mls-navy text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-3">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto">
              Large-scale installations delivered on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Amazon Fulfillment Center',
                size: '700,000 sq ft',
                location: 'Charlotte, NC',
                scope: 'Concrete polishing & joint fill',
                timeline: '9 nights without disruption',
                image: '/amazon.jpg'
              },
              {
                title: 'Charlotte International Airport',
                size: '450,000 sq ft',
                location: 'Charlotte, NC',
                scope: 'Terminal concourse polishing',
                timeline: 'Off-peak phased installation',
                image: '/airport.jpg'
              },
              {
                title: 'National Retail Distribution',
                size: '525,000 sq ft',
                location: 'Southeast Region',
                scope: 'High-gloss epoxy coating',
                timeline: 'Fast-track 14-day delivery',
                image: '/schools.jpg'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-blue-300 text-sm mb-4">{project.size} • {project.location}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-300">{project.scope}</p>
                    <p className="text-gray-400">{project.timeline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-white text-mls-navy rounded-lg font-medium hover:bg-blue-50 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Contact - Clean Form */}
      <section id="contact" className="py-16 bg-mls-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-mls-navy mb-3">
              Request a Bid
            </h2>
            <p className="text-base md:text-lg text-mls-gray max-w-2xl mx-auto">
              Get a detailed quote for your commercial flooring project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl border border-mls-border"
            >
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="(704) 981-0555"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Location</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="Charlotte, NC"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Square Footage</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none text-sm"
                      placeholder="50,000 sq ft"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Floor Type</label>
                    <select 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none bg-white text-sm"
                    >
                      <option>Select...</option>
                      <option>Concrete Polishing</option>
                      <option>Epoxy Coating</option>
                      <option>Surface Preparation</option>
                      <option>Joint Filling</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mls-navy mb-2">Timeline</label>
                    <select 
                      className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none bg-white text-sm"
                    >
                      <option>Select...</option>
                      <option>Immediate (1-2 weeks)</option>
                      <option>Soon (2-4 weeks)</option>
                      <option>Flexible (1-3 months)</option>
                      <option>Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-mls-navy mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-mls-border focus:border-mls-navy focus:ring-2 focus:ring-mls-navy/20 transition-all outline-none resize-none text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-mls-navy hover:bg-mls-navy/90 text-white rounded-lg font-medium transition-all"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-full min-h-[500px] rounded-xl overflow-hidden"
            >
              <Image
                src="/epoxy-flooring.jpeg"
                alt="Commercial flooring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3">Ready to Get Started?</h3>
                <p className="text-base text-gray-200 mb-5">
                  Our team provides detailed quotes and project timelines.
                </p>
                <a 
                  href="tel:7049810555"
                  className="inline-flex items-center gap-2 text-white font-medium"
                >
                  <Phone className="w-4 h-4" />
                  704-981-0555
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Clean */}
      <footer className="bg-mls-navy text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={140} 
                height={42}
                className="h-9 w-auto mb-5 brightness-0 invert"
              />
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Enterprise-grade concrete polishing and epoxy coating solutions for commercial facilities.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => handleNavClick('industries')} className="text-gray-400 hover:text-white transition-colors">Industries</button></li>
                <li><button onClick={() => handleNavClick('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:7049810555" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>704-981-0555</span>
                </a>
                <p className="text-gray-400">Charlotte, NC</p>
                <p className="text-gray-400">Southeast Region</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MLS Flooring. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
