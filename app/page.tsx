'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle2, Building2, Factory, Plane, ShoppingCart, GraduationCap, Warehouse, Award, Clock, Users, Shield, Wrench, Droplets, Layers, Grid3x3, FileCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Sticky */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={160} 
                height={48}
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'} w-auto`}
                priority
              />
            </Link>

            {/* Nav Links - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Industries
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Projects
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Right Side CTAs */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:7049810555"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Call for Bids: 704-981-0555</span>
              </a>
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Request a Bid
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Enterprise Level */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero-bg.png"
            alt="Commercial flooring project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,.05) 60px, rgba(255,255,255,.05) 120px)'
               }} 
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Enterprise Concrete & Epoxy Flooring
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-300">
              For Airports, Warehouses, and Big-Box Retail
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              MLS Flooring partners with GCs and facility teams to deliver polished concrete, epoxy coatings, 
              and surface preparation at scale. From Amazon distribution centers to international airports, 
              we execute with precision and speed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3"
              >
                Request a Bid
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/40 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
              >
                View Recent Projects
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Why MLS Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why MLS Flooring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by Fortune 500 companies for large-scale commercial flooring projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'National Account Experience',
                description: 'Amazon, CLT Airport, national retail chains',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Clock,
                title: 'Night & Shutdown Work Experts',
                description: 'Minimizing disruption to your operations',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: Shield,
                title: 'Certified Crews & Advanced Equipment',
                description: 'Latest technology and trained professionals',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Users,
                title: 'Dedicated Project Manager',
                description: 'For every site, ensuring seamless execution',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Rebuilt */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Flooring Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-spectrum solutions for commercial and industrial facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                title: 'Moisture Mitigation Systems',
                description: 'Vapor barrier and moisture control solutions',
                image: '/concrete-polishing.jpeg'
              },
              {
                icon: FileCheck,
                title: 'Large-Scale Commercial Packages',
                description: 'Turnkey flooring solutions for major facilities',
                image: '/surface-prep.jpeg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-600 shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized flooring solutions for demanding commercial environments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Warehouse,
                title: 'Distribution & Fulfillment Centers',
                description: 'High-traffic concrete polishing and coatings for 24/7 operations. Designed for forklifts, pallet jacks, and heavy machinery.',
                color: 'from-blue-600 to-blue-700'
              },
              {
                icon: Plane,
                title: 'Airports & Transportation Hubs',
                description: 'Durable, low-maintenance flooring for terminals, concourses, and baggage areas. Meets strict safety and aesthetic standards.',
                color: 'from-cyan-600 to-cyan-700'
              },
              {
                icon: ShoppingCart,
                title: 'Big-Box & Retail Chains',
                description: 'Polished concrete and epoxy systems that combine durability with visual appeal for high customer traffic.',
                color: 'from-purple-600 to-purple-700'
              },
              {
                icon: Factory,
                title: 'Manufacturing & Pharmaceutical',
                description: 'Chemical-resistant, seamless flooring meeting FDA and ISO standards. Cleanroom-compatible solutions available.',
                color: 'from-emerald-600 to-emerald-700'
              },
              {
                icon: GraduationCap,
                title: 'Education & Municipal Facilities',
                description: 'Low-VOC, sustainable flooring for schools, universities, and government buildings. Designed for safety and longevity.',
                color: 'from-orange-600 to-orange-700'
              },
              {
                icon: Building2,
                title: 'Corporate & Office Spaces',
                description: 'Modern polished concrete and decorative systems for lobbies, showrooms, and open office environments.',
                color: 'from-slate-600 to-slate-700'
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} mb-6 shadow-lg`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,.05) 60px, rgba(255,255,255,.05) 120px)'
             }} 
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Large-scale installations delivered on time and within budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{project.size} • {project.location}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-300"><span className="font-semibold">Scope:</span> {project.scope}</p>
                    <p className="text-gray-300"><span className="font-semibold">Timeline:</span> {project.timeline}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              View Full Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact / Bid Request Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Request a Bid
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a detailed quote for your commercial flooring project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Charlotte, NC"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Approx. Square Footage *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="50,000 sq ft"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Floor Type *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Bid Request
                </button>
              </form>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/epoxy-flooring.jpeg"
                alt="Commercial flooring installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-200 mb-6">
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
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-12 mb-12"
          >
            {/* Logo & Info */}
            <div className="md:col-span-2">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={180} 
                height={54}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed mb-6">
                Enterprise-grade concrete polishing and epoxy coating solutions for commercial and industrial facilities nationwide.
              </p>
              <div className="space-y-2">
                <a href="tel:7049810555" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>704-981-0555</span>
                </a>
                <p className="text-gray-400">Charlotte, NC & Southeast Region</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#industries" className="text-gray-400 hover:text-white transition-colors">Industries</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-gray-800 pt-8 text-center"
          >
            <p className="text-gray-500">
              © {new Date().getFullYear()} MLS Flooring. All rights reserved. Licensed & Insured.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
