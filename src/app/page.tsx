// pages/index.tsx

import React from 'react';
import NavBar from './components/common/NavBar';
import FooterSection from './components/sections/FooterSection';
import HeroSectionGradientBackground from './components/sections/HeroSection';
import IconSectionSolidIconWithHoverEffect from './components/sections/FeaturesSection';
import HeroFormCenterAlignedWithAForm from './components/sections/NewsLetter';
import IconSectionCentredDescriptionWithIconBlocks from './components/sections/OurVision';
import InnerSection from './components/sections/CourseSections';

const Home: React.FC = () => {
  return (
    <main>
      <NavBar/>
      <HeroSectionGradientBackground/>
      <IconSectionCentredDescriptionWithIconBlocks/>
      <InnerSection/>
      <IconSectionSolidIconWithHoverEffect/>
      <HeroFormCenterAlignedWithAForm/>
      <FooterSection/>
    </main>
  );
};

export default Home;
