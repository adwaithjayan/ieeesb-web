"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { SettingsDocument } from "@/prismicio-types";
import { cn } from "@/lib/utils";

const gd = [
  "bg-gradient-to-br from-blue-500 to-purple-600",
  "bg-gradient-to-br from-pink-500 to-rose-600",
  "bg-gradient-to-br from-green-500 to-emerald-600",
];

export function Navbar({ settigns: { data } }: { settigns: SettingsDocument }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white/95  sticky top-0 z-50 py-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 py-10">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              {/* IEEE Logo - Replace with your actual logo */}
              <Image
                src={data.logo.url as string}
                width={116}
                height={62}
                className="object-contain"
                alt={data.logo.alt as string}
              />
            </Link>
          </div>

          {/* Desktop Navigation with Shadow Effects */}
          <nav className="hidden lg:flex items-center space-x-8 rounded-full shadow-md px-10 py-2">
            {/* Home - Active State */}
            <Link
              href="/"
              className="px-4 py-2 text-blue-600 font-medium  transition-all duration-200"
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 font-medium  hover:text-blue-600 transition-all duration-200"
            >
              About Us
            </Link>

            {/* Society Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-700 font-medium  hover:text-blue-600 transition-all duration-200  group-hover:text-blue-600">
                Society
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  {data.sociteys &&
                    data.sociteys.map((item, i) => (
                      <Link
                        key={item.link_text}
                        href={item.href as string}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                      >
                        <div
                          className={cn(
                            "w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center mr-3",
                            gd[i]
                          )}
                        >
                          <span className="text-white text-xs font-bold">
                            {item.logo}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{item.link_text}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Execom'25 */}
            <Link
              href={`/${data.execom_year?.toLowerCase()}`}
              className="px-4 py-2 text-gray-700 font-medium  hover:text-blue-600 transition-all duration-200"
            >
              {data.execom_year && data.execom_year}
            </Link>

            {/* Others Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-gray-700 font-medium  hover:text-blue-600 transition-all duration-200  group-hover:text-blue-600">
                Others
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 z-50">
                <div className="py-2">
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Events
                  </Link>
                  <Link
                    href="/gallery"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/achievements"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                  >
                    Achievements
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Join IEEE Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden lg:inline-flex border-gray-600 hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium"
            >
              <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
              Join IEEE
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-blue-600 font-medium hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Society Section */}
              <div className="px-4 py-2">
                <span className="text-gray-700 font-medium text-sm uppercase tracking-wide">
                  Society
                </span>
                <div className="mt-2 ml-2 space-y-1">
                  {data.sociteys.map((item) => (
                    <Link
                      key={item.link_text}
                      href={item.href as string}
                      className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.link_text}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/${data.execom_year?.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {data.execom_year}
              </Link>

              {/* Mobile Others Section */}
              <div className="px-4 py-2">
                <span className="text-gray-700 font-medium text-sm uppercase tracking-wide">
                  Others
                </span>
                <div className="mt-2 ml-2 space-y-1">
                  <Link
                    href="/events"
                    className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Events
                  </Link>
                  <Link
                    href="/gallery"
                    className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-gray-600 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="px-4 pt-4">
                <Button
                  className="w-full shadow-sm hover:shadow-md transition-all duration-200"
                  variant="outline"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Join IEEE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
