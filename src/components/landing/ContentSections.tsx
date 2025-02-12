import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Network } from "lucide-react";
import { Button } from "../ui/button";

interface ContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
}

const ContentSection = ({
  title = "Enterprise AI Solutions",
  description = "Transform your business with cutting-edge AI solutions tailored for enterprise needs. Our expert team delivers customized implementations that drive real business value.",
  imageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
  isReversed = false,
}: ContentSectionProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 py-16 px-6 ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-300 text-lg"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button variant="secondary" className="group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full md:w-1/2"
      >
        <img
          src={imageSrc}
          alt="AI Solution Visualization"
          className="rounded-lg shadow-xl w-full"
        />
      </motion.div>
    </div>
  );
};

const ContentSections = () => {
  const sections = [
    {
      title: "Advanced AI Integration",
      description:
        "Seamlessly integrate AI capabilities into your existing infrastructure with our enterprise-grade solutions.",
      imageSrc:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
      icon: <Code2 className="h-6 w-6 text-[#FF0066]" />,
    },
    {
      title: "Data Analytics Platform",
      description:
        "Transform raw data into actionable insights with our powerful analytics platform powered by machine learning.",
      imageSrc:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000",
      icon: <Database className="h-6 w-6 text-[#FF0066]" />,
    },
    {
      title: "Neural Network Solutions",
      description:
        "Leverage the power of deep learning with our custom neural network implementations for your specific use case.",
      imageSrc:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1000",
      icon: <Network className="h-6 w-6 text-[#FF0066]" />,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto py-20">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentSections;
