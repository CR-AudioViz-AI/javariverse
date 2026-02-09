/**
 * JavariVerse - Embeddable Content
 * Designed to be embedded in craudiovizai.com/javari-verse via iframe
 * No headers/footers - those come from parent site
 * @timestamp February 9, 2026
 */

import { Globe, Users, Sparkles, Building2, Map, Gamepad2 } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Hero Section - Compact for embedding */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm mb-6 animate-pulse">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              JavariVerse
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            An immersive virtual world where AI meets community. Create your avatar, 
            explore infinite landscapes, and connect with others in ways never before possible.
          </p>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A New Kind of Virtual Experience
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              JavariVerse combines cutting-edge AI with immersive virtual environments
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/40 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enter the JavariVerse?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the waitlist and be among the first to experience the future of virtual worlds.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
            Join the Waitlist
          </button>
        </div>
      </section>
    </div>
  );
}
