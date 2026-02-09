/**
 * JavariVerse - Standalone Landing Page
 * Recreated design from CRAudioVizAI reference
 * @timestamp February 9, 2026
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Sparkles, Building2, Map, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JavariVerse - Immersive Virtual World',
  description: 'Explore JavariVerse, an immersive virtual world powered by AI. Create avatars, build communities, and experience the future of digital interaction.',
};

const FEATURES = [
  {
    icon: Globe,
    title: 'Virtual Worlds',
    description: 'Explore vast, AI-generated landscapes and environments tailored to your interests.',
  },
  {
    icon: Users,
    title: 'Community Spaces',
    description: 'Connect with like-minded individuals in themed social hubs and gathering places.',
  },
  {
    icon: Sparkles,
    title: 'AI Companions',
    description: 'Interact with intelligent NPCs powered by advanced AI for guidance and entertainment.',
  },
  {
    icon: Building2,
    title: 'Build & Create',
    description: 'Design your own spaces, structures, and experiences within the JavariVerse.',
  },
  {
    icon: Map,
    title: 'Quests & Adventures',
    description: 'Embark on AI-driven storylines and discover hidden treasures throughout the verse.',
  },
  {
    icon: Gamepad2,
    title: 'Games & Activities',
    description: 'Play multiplayer games and participate in events with the JavariVerse community.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              JavariVerse
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            An immersive virtual world where AI meets community. Create your avatar, 
            explore infinite landscapes, and connect with others in ways never before possible.
          </p>
          
          {/* CTA Buttons */}
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
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-0 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-0" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              A New Kind of Virtual Experience
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              JavariVerse combines cutting-edge AI with immersive virtual environments to create something truly unique
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 transform"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4">
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
    </div>
  );
}
