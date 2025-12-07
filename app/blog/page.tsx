'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
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

      {/* Blog Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights and news from MLS Flooring
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-12 bg-white rounded-2xl shadow-lg">
              <svg className="w-24 h-24 text-blue-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-gray-500 text-lg">Blog posts coming soon...</p>
            </div>
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
