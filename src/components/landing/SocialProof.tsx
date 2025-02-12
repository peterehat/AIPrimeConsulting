import React from "react";
import { motion } from "framer-motion";

interface PartnerLogo {
  name: string;
  imageUrl: string;
}

interface SocialProofProps {
  partnerLogos?: PartnerLogo[];
}

const defaultPartnerLogos: PartnerLogo[] = [
  {
    name: "Autodesk",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=autodesk",
  },
  {
    name: "Microsoft",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=microsoft",
  },
  {
    name: "Adobe",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=adobe",
  },
];

const SocialProof = ({
  partnerLogos = defaultPartnerLogos,
}: SocialProofProps) => {
  return (
    <section className="w-full min-h-[400px] bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Trusted by Industry Leaders
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-[200px]"
            >
              <div className="aspect-w-3 aspect-h-2 relative group">
                <img
                  src={logo.imageUrl}
                  alt={`${logo.name} logo`}
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#FF0066] bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
              </div>
              <p className="text-center text-gray-400 mt-4 text-sm">
                {logo.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
