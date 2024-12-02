"use client";
import ModeToggle from "@/components/mode-toggle"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger, DialogFooter
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";


export default function Home() {
  // State for controlling mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_95crq0a";
    const templateID = "template_ppr7six";
    const userID = "ak5ehggv3TGlxA_JB";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        alert("Message sent successfully!");
        setFormData({ businessName: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  };
//   const particlesInit = useCallback(async (engine: Engine) => {
//     console.log("Initializing particles engine");
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async (container: Container | undefined) => {
//     await console.log(container);
// }, []);

  
  
return (
<div className="relative min-h-screen">
  


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between py-4 px-6 bg-white shadow-md z-10">
  {/* Top-left logo and title */}
  <div className="flex items-center space-x-2">
    <div className="flex justify-center items-center">
      {/* Placeholder for logo */}
    </div>
    <h1 className="text-4xl sm:text-xl lg:text-3xl font-extrabold tracking-tight">
      Callia Innovations
    </h1>
  </div>

  {/* Hamburger menu for mobile */}
  <div className="md:hidden flex items-center space-x-4">
    <button
      className="text-gray-900 focus:outline-none"
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
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-20 md:hidden">
      <a
        href="#home"
        className="block px-4 py-2 text-lg font-semibold"
        onClick={() => setMenuOpen(false)} // Close menu on click
      >
        Home
      </a>
      <a
        href="#what"
        className="block px-4 py-2 text-lg font-semibold"
        onClick={() => setMenuOpen(false)} // Close menu on click
      >
        About Us
      </a>
      <a
        href="#features"
        className="block px-4 py-2 text-lg font-semibold"
        onClick={() => setMenuOpen(false)} // Close menu on click
      >
        Features
      </a>

      {/* "Get Started" button in mobile version */}
      <a 
        href="#signup" 
        className="block px-4 py-2 text-lg font-semibold mt-4" 
        onClick={() => setMenuOpen(false)} // Close menu on click
      >
        <Button>Get Started</Button>
      </a>
    </div>
  )}

  {/* Tab Navigation for desktop */}
  <div className="hidden md:flex flex-1 justify-end items-center space-x-16">
    <a href="#home" className="relative text-lg font-semibold hover:text-blue-500">
      Home
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
    </a>
    <a href="#what" className="relative text-lg font-semibold hover:text-blue-500">
      About Us
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
    </a>
    <a href="#features" className="relative text-lg font-semibold hover:text-blue-500">
      Features
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
    </a>
  </div>

  {/* Top-right controls for desktop */}
  <div className="hidden md:flex items-center space-x-4 ml-20">
    <a href="#signup">
      <Button>Get Started</Button>
    </a>
  </div>
</nav>



      {/* Title content */}
<div id="home"
  className="flex flex-col items-center justify-center min-h-screen pt-20 md:pt-24 p-4 text-center"
>
{/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: { value: "#ffffff" }, // Background color for particles
            },
            fpsLimit: 120,
            particles: {
              color: { value: "#0d47a1" }, // Particle color
              size: { value: { min: 1, max: 5 } },
              move: { enable: true, speed: 6 },
              links: { color: "#0d47a1", enable: true, distance: 150 },
              number: { value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
            },
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
              },
            },
          }}
          className="absolute top-0 left-0 w-full h-full z-0" // Particles background
        /> */}

  {/* <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: "#ffffff" },
        },
        particles: {
          color: { value: "#0d47a1" },
          size: { value: { min: 1, max: 5 } },
          move: { enable: true, speed: 6 },
          links: { color: "#0d47a1", enable: true, distance: 150 },
          number: { value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
      className="w-full h-full"
    />
  </div> */}
  

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
    </div>
  </div>
    </div>
    



    {/* What is calliax */}
    <div
  id="what"
  className="flex flex-col md:flex-row items-center justify-center h-auto pt-10 md:pt-16 p-4 text-center bg-gray-100"
>
  {/* Left Column: Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/wai.webp" // Replace with the actual image path
      width={500}
      height={500}
      alt="AI Agent"
      className="max-w-xs md:max-w-md object-contain rounded-lg" // Adjusted max width for smaller image
    />
  </div>

  {/* Right Column: Content */}
  <div className="flex-1 flex flex-col items-start md:items-start text-left">
    <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight mb-6 mt-4 text-gray-800">
      What is Callia?
    </h1>
    <p className="text-lg mb-8 max-w-xl text-gray-700">
      Callia is an AI-powered phone agent that can...
    </p>
    <ul className="list-disc list-inside mb-6 text-gray-700">
      <li>Instantly answer common customer inquiries</li>
      <li>Seamlessly assist in scheduling and booking appointments</li>
      <li>Log detailed call information in real time for employee review</li>
    </ul>
    <h1 className="text-xl font-bold text-gray-800">
      Freeing your team from an extra workload to focus on what matters most.
    </h1>
  </div>
    </div>

    {/* Features */}
    <div
      id="features"
      className="flex flex-col items-center justify-center min-h-screen p-8 space-y-16"
    >
      <h2 className="text-5xl font-bold mb-16 text-center">Features</h2>
      
      {/* Features Grid */}
      <div
        className="grid gap-6 max-w-[1200px] mx-auto w-full"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid
        }}
      >
        {/* Card 1 */}
        <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full max-w-[300px] h-[300px] hover:shadow-lg transition-shadow duration-300 mx-auto">
          <svg
            className="w-10 h-10 text-blue-500 mb-4"
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
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            The Problem
          </h3>
          <p className="text-sm text-gray-600 text-justify break-words">
            Businesses often face significant challenges, including high call volumes and missed calls when their employees become too busy to tend to the phone.
          </p>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full max-w-[300px] h-[300px] hover:shadow-lg transition-shadow duration-300 mx-auto">
          <svg
            className="w-10 h-10 text-blue-500 mb-4"
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
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Studies show
          </h3>
          <p className="text-sm text-gray-600 text-justify break-words">
            Up to 60% of potential customers hang up the phone due to long hold times and difficulty of having their calls answered, translating to lost business.
          </p>
        </Card>

        {/* Card 3 */}
        <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full max-w-[300px] h-[300px] hover:shadow-lg transition-shadow duration-300 mx-auto">
          <svg
            className="w-10 h-10 text-blue-500 mb-4"
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
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            Our Solution
          </h3>
          <p className="text-sm text-gray-600 text-justify break-words">
            An AI-agent, Callia, that can handle incoming calls, ensuring that your workers can focus on in-person duties.
          </p>
        </Card>

        {/* Card 4 */}
        <Card className="flex flex-col items-center bg-slate-90 shadow-md rounded-lg p-4 w-full max-w-[300px] h-[300px] hover:shadow-lg transition-shadow duration-300 mx-auto">
          <svg
            className="w-10 h-10 text-blue-500 mb-4"
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
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            The End Result
          </h3>
          <p className="text-sm text-gray-600 text-justify break-words">
            Upon implementation, Callia could streamline communication processes, reduce staff burden, and improve operational efficiency and client satisfaction.
          </p>
        </Card>
      </div>
    </div>

{/* Contact Us */}
<div id="signup" className="py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        {/* Content Section */}
        <div className="text-left space-y-4">
          <h1 className="text-5xl font-bold">Try Callia For Your Business</h1>
          <h2 className="text-2xl font-semibold text-blue-600">
            Book a consultation with our team
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            See how we can help you streamline operations and enhance efficiency
            with our AI-powered solutions.
          </p>

          {/* Modal Trigger Button */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-800 transition-colors">
                Contact Us
              </button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <p>Let us reach out and help onboard you to the platform.</p>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                    Business Name
                  </label>
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Callia"
                    value={formData.businessName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Input Text here"
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg text-gray-700 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <DialogFooter>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Image Section */}
        <div className="text-center">
          <Image
            src="/partnership.webp"
            alt="Collaboration"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>

{/* Footer */}
<footer className="mt-16 px-4 py-8 bg-slate-100">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-gray-600">
      © 2024 Callia. All rights reserved.
    </p>

    {/* Footer links */}
    <div className="mt-4 text-gray-600">
      <Link href="/comingsoon" className="hover:text-blue-500 dark:hover:text-blue-400 mr-4">
        Terms and Conditions
      </Link>
      <span className="mx-2">|</span> {/* Add spacing around the separator */}
      <Link href="/comingsoon" className="hover:text-blue-500 dark:hover:text-blue-400 mx-4">
        Privacy Policy
      </Link>
      <span className="mx-2">|</span> {/* Add spacing around the separator */}
      <Link href="/comingsoon" className="hover:text-blue-500 dark:hover:text-blue-400 ml-4">
        FAQ
      </Link>
    </div>
  </div>
</footer>



</div>
  );
}
