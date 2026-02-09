/**
 * JavariVerse - Complete Landing Page
 * With header, navigation, and footer
 */

import { Metadata } from 'next';
import { ArrowRight, Globe, Users, Sparkles, Building2, Map, Gamepad2, Facebook, Twitter, Instagram, Youtube, Linkedin, Github, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JavariVerse - Virtual World | CR AudioViz AI',
  description: 'Explore JavariVerse, an immersive virtual world powered by AI. Create avatars, build communities, and experience the future of digital interaction.',
};

const FEATURES = [
  { icon: Globe, title: 'Virtual Worlds', description: 'Explore vast, AI-generated landscapes and environments tailored to your interests.' },
  { icon: Users, title: 'Community Spaces', description: 'Connect with like-minded individuals in themed social hubs and gathering places.' },
  { icon: Sparkles, title: 'AI Companions', description: 'Interact with intelligent NPCs powered by advanced AI for guidance and entertainment.' },
  { icon: Building2, title: 'Build & Create', description: 'Design your own spaces, structures, and experiences within the JavariVerse.' },
  { icon: Map, title: 'Quests & Adventures', description: 'Embark on AI-driven storylines and discover hidden treasures throughout the verse.' },
  { icon: Gamepad2, title: 'Games & Activities', description: 'Play multiplayer games and participate in events with the JavariVerse community.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-lg">JavariVerse</div>
              <div className="text-xs text-gray-400">Part of CR AudioViz AI</div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="https://craudiovizai.com" className="text-gray-300 hover:text-white transition-colors">CR AudioViz AI</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-cyan-500 transition-all">
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              JavariVerse
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            An immersive virtual world where AI meets community. Create your avatar, 
            explore infinite landscapes, and connect with others in ways never before possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform">
              Join the Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:bg-white/5 hover:border-white/30 transition-all">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-0 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-0" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              A New Kind of Virtual Experience
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              JavariVerse combines cutting-edge AI with immersive virtual environments to create something truly unique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 transform">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Enter the JavariVerse?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist today and be among the first to experience the future of virtual worlds.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform">
            Get Early Access
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Youtube className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all">
              <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
            </a>
          </div>

          {/* Footer Links */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">
              © 2026 JavariVerse - Part of CR AudioViz AI. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
