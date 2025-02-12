import React from "react";
import Navbar from "./landing/Navbar";
import HeroSection from "./landing/HeroSection";
import ContentSections from "./landing/ContentSections";
import SocialProof from "./landing/SocialProof";

interface HomeProps {
  navbarProps?: React.ComponentProps<typeof Navbar>;
  heroProps?: React.ComponentProps<typeof HeroSection>;
  contentProps?: React.ComponentProps<typeof ContentSections>;
  socialProofProps?: React.ComponentProps<typeof SocialProof>;
}

const Home = ({
  navbarProps,
  heroProps,
  contentProps,
  socialProofProps,
}: HomeProps = {}) => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2A_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2A_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />
      <Navbar {...navbarProps} />
      <main className="pt-20">
        <HeroSection {...heroProps} />
        <ContentSections {...contentProps} />
        <SocialProof {...socialProofProps} />
      </main>
    </div>
  );
};

export default Home;
