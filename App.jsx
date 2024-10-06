import React from 'react';
import Header from './header';
import Banner from './banner';
import VideoSection from './videosection';
import MenuSection from './menusection';
import MenuItem from './menuitem';
import GallerySection from './gallerysection';
import ReviewSection from './reviewsection';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <VideoSection />
      <MenuSection />
      <GallerySection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default App;
