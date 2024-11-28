"use client";


import ModeToggle from "@/components/mode-toggle"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from '@/client/images/image.png'; // Adjust path as necessary

import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider"

//--------------------------

export default function Home() {
  // State for controlling mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
  <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-1 bg-white dark:bg-gray-900 shadow-md z-10">
    {/* Top-left logo and title */}
    <div className="flex items-center space-x-2">
    <div className="flex justify-center items-center">
        <Link href="/" aria-label="Homepage">
          <Image
            src="/logo.png"
            alt="FlashFlorte logo"
            width={50}   // Logo width
            height={50}  // Logo height
            priority
          />
        </Link>
      </div>
      <h1 className="text-6xl font-extrabold tracking-tight sm:text-xl">
        Callia Innovations  {/* Reduced title font size */}
      </h1>
    </div>
    {/* Hamburger menu for mobile */}
    <div className="md:hidden flex items-center space-x-4">
      <button
        className="text-gray-900 dark:text-gray-100 focus:outline-none"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {/* Mode Toggle for mobile */}
      <ModeToggle />
    </div>
    {/* Mobile menu */}
    {menuOpen && (
      <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-20 md:hidden">
        <a href="#home" className="block px-4 py-2 text-lg font-semibold">
          Home
        </a>
        <a href="#what" className="block px-4 py-2 text-lg font-semibold">
          About Us
        </a>
        <a href="#features" className="block px-4 py-2 text-lg font-semibold">
          Features
        </a>
      </div>
    )}
    {/* Tab Navigation for desktop */}
    <div className="hidden md:flex space-x-16 justify center">
      <a href="#home" className="text-lg font-semibold">
        Home
      </a>
      <a href="#what" className="text-lg font-semibold">
        About Us
      </a>
      <a href="#features" className="text-lg font-semibold">
        Features
      </a>
    </div>
    {/* Top-right controls for desktop */}
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />
      <a href="#signup">
        <Button>Get Started</Button>
      </a>
    </div>
  </nav>

      {/* Title content */}
      <div
  id="home"
  className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-24 p-4 text-center"
>
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-3xl font-extrabold tracking-tight lg:text-7xl md:text-5xl mb-4">
      Do your thing,
      <br />
      Without missing a ring.
    </h1>

    <p className="text-lg mb-8 max-w-2xl">
      See how you can streamline your business communications with Callia, our AI-powered solution.
    </p>
    <div className="flex space-x-4">
    <a href="#signup">
  <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
    Get Started
  </button>
</a>
      <button className="px-6 py-3 text-blue-600 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-100">
        Contact Us
      </button>
    </div>
  </div>
</div>

  
        {/* What is Callia */}

 <div
  id="what"
  className="flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 md:pt-24 p-4 text-center bg-gray-100"
>
<div className="flex-1 flex justify-center">
  <img
    src="/wai.webp" // Replace with the actual image path
    alt="AI Agent"
    className="max-w-xs md:max-w-sm object-contain rounded-lg"  // Add rounded-lg for rounded corners
  />
</div>

  {/* Right Column: Content */}
  <div className="flex-1 flex flex-col items-start md:items-start text-left">
    <h1 className="text-6xl font-extrabold tracking-tight lg:text-5xl mb-4">
      What is Callia?
    </h1>
    <p className="text-lg mb-8 max-w-2xl">
      Callia is an AI-powered phone agent that can...
    </p>
    <ul className="list-disc list-inside mb-8">
      <li>Instantly answer common customer inquiries</li>
      <li>Seamlessly assist in scheduling and booking appointments</li>
      <li>Log detailed call information in real time for employee review</li>
    </ul>
    <h1 className="text-xl font-bold">
      Freeing your team from an extra workload to focus on what matters most.
    </h1>
  </div>
      </div>


<div
  id="features"
  className="flex flex-col items-center min-h-screen p-4"
>
  <h2 className="text-5xl font-bold mb-16 text-center">Features</h2>
  
  {/* Features Grid */}
  <div
    className="grid gap-6 max-w-[1200px] mx-auto w-full"
    style={{
      gridTemplateColumns: "repeat(4, 1fr)", // Explicitly set 4 cards per row on large screens
    }}
  >
    {/* Card 1 */}
    <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full h-[300px] hover:shadow-lg transition-shadow duration-300">
      <svg
        className="w-10 h-10 text-green-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M8 4v16M16 4v16" />
      </svg>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        The Problem
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">
        Businesses often face significant challenges, including high call
        volumes and missed calls when their employees become too busy to tend
        to the phone.
      </p>
    </Card>

    {/* Card 2 */}
    <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full h-[300px] hover:shadow-lg transition-shadow duration-300">
      <svg
        className="w-10 h-10 text-green-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 6h16v12H4z" />
        <path d="M12 6v12M8 12h8" />
      </svg>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Studies show
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">
        Up to 60% of potential customers hang up the phone due to long hold
        times and difficulty of having their calls answered, translating to lost
        business.
      </p>
    </Card>

    {/* Card 3 */}
    <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full h-[300px] hover:shadow-lg transition-shadow duration-300">
      <svg
        className="w-10 h-10 text-green-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M12 22l10-5V7L12 2 2 7v10l10 5z" />
      </svg>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Our Solution
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">
        An AI-agent, Callia, that can handle incoming calls, ensuring that your
        workers can focus on in-person duties.
      </p>
    </Card>

    {/* Card 4 */}
    <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full h-[300px] hover:shadow-lg transition-shadow duration-300">
      <svg
        className="w-10 h-10 text-green-500 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M8 4v16M16 4v16" />
      </svg>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 ">
        The End Result
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">
        Upon implementation, Callia could streamline communication processes,
        reduce staff burden, and improve operational efficiency and client
        satisfaction.
      </p>
    </Card>
  </div>
</div>


<div
  id="signup"
  className="py-12 px-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
    {/* Content Section */}
    <div className="text-left space-y-4">
      <h1 className="text-5xl font-bold">
        Try Callia For Your Business
      </h1>
      <h2 className="text-2xl font-semibold text-blue-600">
        Book a consultation with our team
      </h2>
      <p className="text-base text-gray-700 leading-relaxed">
        See how we can help you streamline operations and enhance efficiency with our AI-powered solutions.
      </p>
      <a
        href="comingsoon.html"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors"
      >
        Business Sign-Up
      </a>
    </div>

    {/* Image Section */}
    <div className="text-center">
      <img
        src="/images/images.png" // Replace with the actual image path
        alt="Collaboration"
        className="w-full max-w-md mx-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>



    

      {/* Footer */}
      <footer className="mt-16 px-4 py-8 bg-slate-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Callia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}