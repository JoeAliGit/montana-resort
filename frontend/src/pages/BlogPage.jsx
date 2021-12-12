import React from 'react';

//! Components
import HeroSection from '../components/molecules/HeroSection';
import BlogSection from '../components/molecules/BlogSection';

//! Main Component
const BlogPage = () => {
  return (
    <>
      <HeroSection sendMeStyle={{ image: 'Room' }} />
      <BlogSection />
    </>
  );
};

export default BlogPage;
