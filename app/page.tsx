'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, GraduationCap, Hospital, Plane, ShoppingBag, Store, Beaker, ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Epoxy Flooring Systems',
      image: '/epoxy-flooring.jpeg',
      features: [
        'Perfect for industrial facilities',
        'High-traffic areas',
        'Chemical resistant',
        'Safety coating options',
        'Ideal for distribution centers and pharmaceutical facilities'
      ]
    },
    {
      title: 'Specialized Concrete Floor Polishing',
      image: '/concrete-polishing.jpeg',
      description: 'Transforming concrete floors into sleek, durable surfaces with our expert polishing techniques.'
    },
    {
      title: 'Surface Preparation & Restoration',
      image: '/surface-prep.jpeg',
      features: [
        'Concrete surface repair',
        'Moisture mitigation',
        'Surface leveling',
        'Crack repair',
        'Pre-installation preparation'
      ]
    }
  ];

  const clients = [
    {
      name: 'Amazon Fulfillment Centers',
      description: 'Nationwide Amazon Fulfillment Centers',
      image: '/amazon.jpg'
    },
    {
      name: 'Charlotte International Airport',
      description: 'Major International Airports',
      image: '/airport.jpg'
    },
    {
      name: 'Educational Institutions',
      description: 'Colleges, Public Schools & Universities',
      subtitle: 'Serviced around the Country',
      image: '/schools.jpg'
    }
  ];

  const industries = [
    { icon: Hospital, name: 'Healthcare Facilities', color: 'from-red-500 to-pink-500' },
    { icon: Building2, name: 'Corporate Offices', color: 'from-blue-500 to-cyan-500' },
    { icon: Factory, name: 'Industrial Warehouses', color: 'from-gray-500 to-slate-500' },
    { icon: ShoppingBag, name: 'Retail Stores', color: 'from-purple-500 to-pink-500' },
    { icon: GraduationCap, name: 'Educational Institutions', color: 'from-green-500 to-emerald-500' },
    { icon: Beaker, name: 'Pharmaceutical Labs', color: 'from-teal-500 to-cyan-500' },
    { icon: Plane, name: 'Airports & Hubs', color: 'from-indigo-500 to-blue-500' },
    { icon: Store, name: 'Big Box Stores', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={180} 
                height={54}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hidden md:block">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium hidden md:block">
                Blog
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Flooring background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-6 py-2.5 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-sm font-bold tracking-wider"
          >
            ENTERPRISE-GRADE FLOORING SOLUTIONS
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Professional Flooring Solutions<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for Enterprise Facilities
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Combining Advanced Project Management with Expert Installation for America&apos;s Leading Brands
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-widest mb-3 text-blue-200">
              WHERE INNOVATION MEETS INSTALLATION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Elevating Enterprise Facilities Through Advanced Flooring Solutions
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Seamlessly Blending Digital Project Management with Expert Installation for Fortune 500 Facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional flooring solutions tailored to your enterprise needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  {service.description && (
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  )}
                  {service.features && (
                    <ul className="space-y-3 mt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold tracking-widest mb-3 text-blue-600">
              DIGITAL EXCELLENCE, FLAWLESS EXECUTION
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering Enterprise-Grade Flooring Solutions to America&apos;s Leading Facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-80">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                    <p className="text-blue-200 text-lg">{client.description}</p>
                    {client.subtitle && (
                      <p className="text-blue-300 text-sm mt-1">{client.subtitle}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom Flooring Solutions Built for Demanding Environments
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${industry.color} group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={200} 
                height={60}
                className="h-16 w-auto mx-auto brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Professional Flooring Solutions for Enterprise Facilities
            </p>
            <div className="flex justify-center space-x-12 mb-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-base font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-base font-medium">
                Blog
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} MLS Flooring. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
