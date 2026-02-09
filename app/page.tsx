/**
 * JavariVerse - Standalone Homepage
 * 
 * Ported from CRAudioVizAI.com/javari-verse
 * Self-contained page with placeholder header/footer
 * 
 * @timestamp February 9, 2026 - 3:30 PM EST
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Sparkles, Building2, Map, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JavariVerse - Virtual World | Immersive AI Experience',
  description: 'Explore JavariVerse, an immersive virtual world powered by AI. Create avatars, build communities, and experience the future of digital interaction.',
  alternates: {
    canonical: 'https://javariverse.com',
  },
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

export default function JavariVersePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/20 to-slate-900">
      {/* Placeholder Header */}
      <header className="border-b border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-400">JavariVerse</h1>
            <div className="text-sm text-slate-400">Header Coming Soon</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Welcome to JavariVerse
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            An immersive virtual world where AI meets community. Create your avatar, 
            explore infinite landscapes, and connect with others in ways never before possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#waitlist"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative gradients */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              A New Kind of Virtual Experience
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              JavariVerse combines cutting-edge AI with immersive virtual environments 
              to create something truly unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-900/50 border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-slate-900/50 to-slate-900/50 border border-cyan-500/20 rounded-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Be Among the First
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Join the waitlist and get early access when JavariVerse launches
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/25"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Footer */}
      <footer className="border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-sm text-slate-400">
            <p>Footer Coming Soon</p>
            <p className="mt-2">© 2026 JavariVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
