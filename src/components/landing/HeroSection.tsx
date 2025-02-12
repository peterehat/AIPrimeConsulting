import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const WatchReelButton = () => (
  <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full pl-3 pr-4 py-2 cursor-pointer hover:bg-black/40 transition-colors">
    <div className="bg-white rounded-full p-2">
      <Play className="h-4 w-4 text-black" />
    </div>
    <div className="flex flex-col">
      <span className="text-white text-sm">Watch Reel</span>
      <span className="text-gray-400 text-xs">1:52 min</span>
    </div>
  </div>
);

const HeroSection = ({
  title = "Transform Your Business with Enterprise AI Solutions",
  subtitle = "Leverage cutting-edge artificial intelligence to drive growth and innovation",
}: HeroSectionProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-[600px] w-full flex items-center px-4 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto w-full"
      >
        <div className="flex-1 space-y-6">
          <div className="flex gap-2">
            <span className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
              Artificial Intelligence
            </span>
            <span className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
              Automation
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">{subtitle}</p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black/30 border-0 text-white placeholder:text-gray-500 rounded-full"
            />
            <Button
              type="submit"
              className="bg-[#FF0066] hover:bg-[#FF0066]/90 rounded-full whitespace-nowrap"
            >
              Book a Demo
            </Button>
          </form>

          <div className="mt-12">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">35+</span>
              <span className="text-gray-400">Companies cooperate with us</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <img src="/autodesk.svg" alt="Autodesk" className="h-8" />
              <img src="/microsoft.svg" alt="Microsoft" className="h-8" />
              <img src="/adobe.svg" alt="Adobe" className="h-8" />
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#FF0066] to-[#FF0066]/80 rounded-lg overflow-hidden">
            <img
              src="/hero-image.jpg"
              alt="Business person"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div className="absolute top-4 right-4">
              <WatchReelButton />
            </div>
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg w-64">
              <div className="space-y-2">
                <h3 className="font-semibold">Total Income</h3>
                <p className="text-sm text-gray-500">
                  The amount of money you have earned
                </p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span className="font-semibold">$8,964</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-red-500">-1.3% than last</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Month</span>
                    <span className="font-semibold">$23,187</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-500">+2.5% than last</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#FF0066] p-3 rounded-lg">
            <span className="text-white font-semibold">
              Improve Your Business
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
