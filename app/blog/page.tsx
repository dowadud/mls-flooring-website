'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function Blog() {
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
              <Link href="/blog" className="text-blue-600 font-medium hidden md:block">
                Blog
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Blog Header */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and news from MLS Flooring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-8">
              <FileText className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Posts Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re working on bringing you valuable content about flooring solutions, industry insights, and project showcases. Check back soon!
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Return to Home
            </Link>
          </motion.div>
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
