'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, GraduationCap, Hospital, Plane, ShoppingBag, Store, Beaker } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
      description: 'Colleges, Public Schools & Universities Serviced around the Country',
      image: '/schools.jpg'
    }
  ];

  const industries = [
    { icon: Hospital, name: 'Healthcare Facilities' },
    { icon: Building2, name: 'Corporate Offices' },
    { icon: Factory, name: 'Industrial Warehouses' },
    { icon: ShoppingBag, name: 'Retail Stores' },
    { icon: GraduationCap, name: 'Educational Institutions' },
    { icon: Beaker, name: 'Pharmaceutical Labs' },
    { icon: Plane, name: 'Airports & Hubs' },
    { icon: Store, name: 'Big Box Stores' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={200} 
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Flooring background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-6 py-2 bg-blue-600/10 text-blue-800 rounded-full text-sm font-bold tracking-wide"
            >
              ENTERPRISE-GRADE FLOORING SOLUTIONS
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professional Flooring Solutions<br />
              <span className="text-blue-600">for Enterprise Facilities</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Combining Advanced Project Management with Expert Installation for America&apos;s Leading Brands
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                Schedule Consultation
              </button>
              <button className="px-10 py-5 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold tracking-widest mb-4 text-blue-200"
          >
            WHERE INNOVATION MEETS INSTALLATION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Elevating Enterprise Facilities Through Advanced Flooring Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-blue-100 max-w-4xl mx-auto"
          >
            Seamlessly Blending Digital Project Management with Expert Installation for Fortune 500 Facilities
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional flooring solutions tailored to your needs</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  {service.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  )}
                  {service.features && (
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold tracking-widest mb-4 text-blue-600">DIGITAL EXCELLENCE, FLAWLESS EXECUTION</p>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">Delivering Enterprise-Grade Flooring Solutions to America&apos;s Leading Facilities</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                    <p className="text-blue-200">{client.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Custom Flooring Solutions Built for Demanding Environments</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center group border border-blue-100"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  <industry.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={200} 
                height={60}
                className="h-16 w-auto mx-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-8 text-lg">Professional Flooring Solutions for Enterprise Facilities</p>
            <div className="flex justify-center space-x-12 mb-8">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
                Home
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">
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
