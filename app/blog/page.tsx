'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={160} 
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Blog Header */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & News
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry insights, project updates, and flooring expertise from MLS Flooring
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-2xl">
              <FileText className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Blog Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&apos;re preparing valuable content about commercial flooring solutions, 
              industry best practices, project showcases, and technical insights. 
              Check back soon for expert articles and case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                Return to Home
              </Link>
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 rounded-xl font-semibold transition-all"
              >
                Request a Bid
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Image 
                src="/logo.png" 
                alt="MLS Flooring" 
                width={180} 
                height={54}
                className="h-12 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed">
                Enterprise-grade concrete polishing and epoxy coating solutions for commercial facilities nationwide.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/#industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
                <li><Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-400">704-981-0555</p>
              <p className="text-gray-400 mt-2">Charlotte, NC</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} MLS Flooring. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
