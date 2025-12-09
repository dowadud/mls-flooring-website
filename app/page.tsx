'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, Building2, Factory, Plane, ShoppingCart, GraduationCap, Warehouse, Award, Clock, Users, Shield, Wrench, Droplets, Layers, Grid3x3, FileCheck, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      {/* Header - Sticky */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={140} 
                height={42}
                className={`transition-all duration-300 ${scrolled ? 'h-9' : 'h-10 md:h-11'} w-auto`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-mls-blue font-medium transition-colors text-sm">
                Services
              </button>
              <button onClick={() => handleNavClick('industries')} className="text-gray-700 hover:text-mls-blue font-medium transition-colors text-sm">
                Industries
              </button>
              <button onClick={() => handleNavClick('projects')} className="text-gray-700 hover:text-mls-blue font-medium transition-colors text-sm">
                Projects
              </button>
              <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-mls-blue font-medium transition-colors text-sm">
                About
              </button>
            </nav>

            {/* Right Side CTAs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="tel:7049810555"
                className="hidden xl:flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-mls-blue font-medium transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="whitespace-nowrap">704-981-0555</span>
              </a>
              <button 
                onClick={scrollToContact}
                className="hidden sm:block bg-mls-blue hover:bg-blue-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm"
              >
                Request Bid
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-mls-blue transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
            >
              <nav className="flex flex-col space-y-3">
                <button onClick={() => handleNavClick('services')} className="text-left text-gray-700 hover:text-mls-blue font-medium transition-colors py-2">
                  Services
                </button>
                <button onClick={() => handleNavClick('industries')} className="text-left text-gray-700 hover:text-mls-blue font-medium transition-colors py-2">
                  Industries
                </button>
                <button onClick={() => handleNavClick('projects')} className="text-left text-gray-700 hover:text-mls-blue font-medium transition-colors py-2">
                  Projects
                </button>
                <button onClick={() => handleNavClick('about')} className="text-left text-gray-700 hover:text-mls-blue font-medium transition-colors py-2">
                  About
                </button>
                <a href="tel:7049810555" className="text-left text-gray-700 hover:text-mls-blue font-medium transition-colors py-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  704-981-0555
                </a>
                <button onClick={scrollToContact} className="bg-mls-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all text-left">
                  Request a Bid
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:min-h-screen lg:flex lg:items-center bg-gradient-to-br from-mls-slate via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/hero-bg.png"
              alt="Commercial flooring"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 md:mb-6">
                Enterprise Concrete & Epoxy Flooring
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300 mb-4 md:mb-6">
                For Airports, Warehouses, and Big-Box Retail
              </p>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
                MLS Flooring partners with GCs and facility teams to deliver polished concrete, epoxy coatings, 
                and surface preparation at scale. From Amazon distribution centers to international airports, 
                we execute with precision and speed.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="group px-8 py-4 bg-mls-blue hover:bg-blue-700 text-white rounded-xl font-bold text-base sm:text-lg transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
                >
                  Request a Bid
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick('projects')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/40 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2"
                >
                  View Projects
                </motion.button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/epoxy-flooring.jpeg"
                alt="Industrial warehouse flooring"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why MLS Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why MLS Flooring
            </h2>
            <p className="text-lg md:text-xl text-mls-gray max-w-3xl mx-auto">
              Trusted by Fortune 500 companies for large-scale commercial flooring projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              {
                icon: Award,
                title: 'National Account Experience',
                description: 'Amazon, CLT Airport, national retail chains'
              },
              {
                icon: Clock,
                title: 'Night & Shutdown Work Experts',
                description: 'Minimizing disruption to your operations'
              },
              {
                icon: Shield,
                title: 'Certified Crews & Equipment',
                description: 'Latest technology and trained professionals'
              },
              {
                icon: Users,
                title: 'Dedicated Project Manager',
                description: 'For every site, ensuring seamless execution'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-mls-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-mls-blue to-blue-600 mb-5 shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-mls-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Flooring Services
            </h2>
            <p className="text-lg md:text-xl text-mls-gray max-w-3xl mx-auto">
              Full-spectrum solutions for commercial and industrial facilities
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: Grid3x3,
                title: 'Concrete Polishing',
                description: 'High-gloss, durable concrete surfaces for warehouses and retail',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: Droplets,
                title: 'Epoxy Coatings',
                description: 'Chemical-resistant, seamless flooring systems',
                image: '/epoxy-flooring.jpeg'
              },
              {
                icon: Wrench,
                title: 'Surface Prep & Removal',
                description: 'Shot blasting, grinding, and coating removal',
                image: '/surface-prep.jpeg'
              },
              {
                icon: Layers,
                title: 'Joint Filling & Repairs',
                description: 'Semi-rigid and flexible joint fill systems',
                image: '/epoxy-flooring.jpeg'
              },
              {
                icon: Droplets,
                title: 'Moisture Mitigation',
                description: 'Vapor barrier and moisture control solutions',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: FileCheck,
                title: 'Full Commercial Packages',
                description: 'Turnkey flooring solutions for major facilities',
                image: '/surface-prep.jpeg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden border border-mls-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-mls-blue shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-mls-gray leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg md:text-xl text-mls-gray max-w-3xl mx-auto">
              Specialized flooring solutions for demanding commercial environments
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: Warehouse,
                title: 'Distribution & Fulfillment Centers',
                description: 'High-traffic concrete polishing and coatings for 24/7 operations. Designed for forklifts, pallet jacks, and heavy machinery.',
                image: '/amazon.jpg'
              },
              {
                icon: Plane,
                title: 'Airports & Transportation Hubs',
                description: 'Durable, low-maintenance flooring for terminals, concourses, and baggage areas. Meets strict safety and aesthetic standards.',
                image: '/airport.jpg'
              },
              {
                icon: ShoppingCart,
                title: 'Big-Box & Retail Chains',
                description: 'Polished concrete and epoxy systems that combine durability with visual appeal for high customer traffic.',
                image: '/schools.jpg'
              },
              {
                icon: Factory,
                title: 'Manufacturing & Pharmaceutical',
                description: 'Chemical-resistant, seamless flooring meeting FDA and ISO standards. Cleanroom-compatible solutions available.',
                image: '/epoxy-flooring.jpeg'
              },
              {
                icon: GraduationCap,
                title: 'Education & Municipal',
                description: 'Low-VOC, sustainable flooring for schools, universities, and government buildings. Designed for safety and longevity.',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: Building2,
                title: 'Corporate & Office Spaces',
                description: 'Modern polished concrete and decorative systems for lobbies, showrooms, and open office environments.',
                image: '/surface-prep.jpeg'
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="relative bg-white p-6 md:p-8 rounded-2xl border border-mls-border shadow-sm hover:shadow-md transition-all overflow-hidden group"
              >
                {/* Background Image */}
                {index < 3 && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-mls-blue to-blue-600 mb-5 shadow-lg">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-mls-gray leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-mls-slate text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,.05) 60px, rgba(255,255,255,.05) 120px)'
             }} 
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Large-scale installations delivered on time and within budget
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                title: 'Amazon Fulfillment Center',
                size: '700,000 sq ft',
                location: 'Charlotte, NC',
                scope: 'Large-scale concrete polishing & joint fill',
                timeline: 'Completed in 9 nights without disrupting operations',
                image: '/amazon.jpg'
              },
              {
                title: 'Charlotte International Airport',
                size: '450,000 sq ft',
                location: 'Charlotte, NC',
                scope: 'Terminal concourse polished concrete',
                timeline: 'Phased installation during off-peak hours',
                image: '/airport.jpg'
              },
              {
                title: 'National Retail Distribution',
                size: '525,000 sq ft',
                location: 'Southeast Region',
                scope: 'High-gloss epoxy and surface preparation',
                timeline: 'Fast-track delivery in 14 days',
                image: '/schools.jpg'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{project.size} • {project.location}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300"><span className="font-semibold">Scope:</span> {project.scope}</p>
                    <p className="text-gray-300"><span className="font-semibold">Timeline:</span> {project.timeline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-mls-blue hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact / Bid Request Section */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Request a Bid
            </h2>
            <p className="text-lg md:text-xl text-mls-gray max-w-3xl mx-auto">
              Get a detailed quote for your commercial flooring project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 md:p-10 rounded-2xl border border-mls-border shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="(704) 981-0555"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Location *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Charlotte, NC"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Square Footage *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="50,000 sq ft"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Floor Type *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                    >
                      <option value="">Select...</option>
                      <option>Concrete Polishing</option>
                      <option>Epoxy Coating</option>
                      <option>Surface Preparation</option>
                      <option>Joint Filling</option>
                      <option>Full Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-white"
                    >
                      <option value="">Select...</option>
                      <option>Immediate (1-2 weeks)</option>
                      <option>Soon (2-4 weeks)</option>
                      <option>Flexible (1-3 months)</option>
                      <option>Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-mls-blue focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-mls-blue hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Bid Request
                </button>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-full min-h-[500px] lg:min-h-[700px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/epoxy-flooring.jpeg"
                alt="Commercial flooring installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl">
                  Our team of experts is standing by to provide a detailed quote and project timeline.
                </p>
                <a 
                  href="tel:7049810555"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold text-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  704-981-0555
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mls-slate text-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo & Info */}
            <div>
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={160} 
                height={48}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Enterprise-grade concrete polishing and epoxy coating solutions for commercial facilities nationwide.
              </p>
              <div className="space-y-2">
                <a href="tel:7049810555" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>704-981-0555</span>
                </a>
                <p className="text-gray-400">Charlotte, NC</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => handleNavClick('industries')} className="text-gray-400 hover:text-white transition-colors">Industries</button></li>
                <li><button onClick={() => handleNavClick('projects')} className="text-gray-400 hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => handleNavClick('about')} className="text-gray-400 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Service Regions */}
            <div>
              <h4 className="text-lg font-bold mb-4">Service Regions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>North Carolina</li>
                <li>South Carolina</li>
                <li>Georgia</li>
                <li>Virginia</li>
                <li>Tennessee</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MLS Flooring. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
