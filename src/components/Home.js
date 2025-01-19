import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { features, words } from "@/data/data";
import { useRouter } from "next/navigation";

const App = () => {

  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background wrapper with both image and gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 pt-20 pb-12">
          {/* Hero Section */}
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 py-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Automated Research and Trigger Finder - Streamline your ad
              creation process with AI-powered insights and competitor analysis
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => router.push("/chatbox")}
            >
              Get Started Free
            </Button>
          </div>

          {/* Features Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-5xl  font-bold text-white mb-8">
                Our Features
              </h2>
              <HoverEffect items={features} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
