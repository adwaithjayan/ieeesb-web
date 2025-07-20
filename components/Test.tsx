"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-60"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="flex">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium rounded-full border border-blue-200 shadow-sm"
              >
                Student Branch • College of Engineering Technology
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                  IEEE SB COET
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                The IEEE, Globally Recognized Professional Organization
                Dedicated To Advancing Technology And Innovation For The
                Betterment Of Humanity.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Join IEEE</span>
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all duration-300 text-lg font-medium"
              >
                Learn More
              </Button>
            </div>

            {/* Stats or Additional Info */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Events
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">
                  Awards
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                {/* Background Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-3xl"></div>

                {/* Image Placeholder - Replace with your actual image */}
                <div className="relative bg-gradient-to-br from-emerald-800 via-teal-700 to-green-900 rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  {/* Overlay for the forest/nature theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* If you have an actual image, replace this div with: */}
                  {/* <img 
                    src="/path-to-your-forest-image.jpg" 
                    alt="IEEE SB COET" 
                    className="w-full h-full object-cover"
                  /> */}

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <div className="text-6xl mb-4">🌲</div>
                      <p className="text-sm font-medium">
                        Forest Image Placeholder
                      </p>
                      <p className="text-xs opacity-75">
                        Replace with your actual image
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-2xl">⚡</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave or Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
