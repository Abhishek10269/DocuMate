"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGlobeAsia, FaEye, FaRocket } from "react-icons/fa";
import { BsFillLightningChargeFill, BsStars } from "react-icons/bs";
import { TbMessageChatbotFilled } from "react-icons/tb";

const features = [
  {
    name: "Global Access",
    description:
      "Access your PDFs from anywhere in the world, with secure cloud storage and instant retrieval.",
    icon: FaGlobeAsia,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Lightning Fast",
    description: "Get instant answers powered by cutting-edge AI technology.",
    icon: BsFillLightningChargeFill,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "AI Assistant",
    description:
      "Your personal document expert that learns and adapts to your needs.",
    icon: TbMessageChatbotFilled,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Smart Viewer",
    description:
      "Navigate documents with our intuitive interface and smart highlights.",
    icon: FaEye,
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Global Access1",
    description:
      "Access your PDFs from anywhere in the world, with secure cloud storage and instant retrieval.",
    icon: FaGlobeAsia,
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "Lightning Fast1",
    description:
      "Get instant answers powered by cutting-edge AI technology.",
    icon: BsFillLightningChargeFill,
    color: "from-yellow-400 to-orange-500",
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-50" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-8">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in-up">
              DocuMate
            </h1>

            <p className="text-2xl sm:text-4xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Transform your static PDFs into intelligent conversations with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                AI-powered
              </span>{" "}
              document companion
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up delay-200">
              <Button
                asChild
                className="group relative px-8 py-6 text-xl bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                <Link href="/dashboard" className="flex items-center gap-2">
                  Get Started Free
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="px-8 py-6 text-xl bg-transparent border-2 border-purple-500/30 text-purple-300 rounded-full hover:bg-purple-500/10 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* How it Works Section */}
          <div className="mt-32 text-center">
            <h2 className="text-4xl font-bold mb-16 animate-fade-in-up delay-300">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {["Upload", "Chat", "Learn"].map((step, index) => (
                <div
                  key={step}
                  className="relative group bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 hover:scale-105 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-5xl font-bold text-purple-400 mb-4">{index + 1}</div>
                    <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                    <p className="text-gray-400">
                      {index === 0 &&
                        "Upload any PDF document to our secure platform"}
                      {index === 1 &&
                        "Ask questions in natural language about your document"}
                      {index === 2 && "Get instant, intelligent responses from our AI"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-32">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up delay-400">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 hover:scale-105 transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
