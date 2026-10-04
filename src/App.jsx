import React, { useState } from 'react';
import { menuData } from './data';
import { ChefHat, UtensilsCrossed, Leaf, Drumstick, ArrowUp } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'veg', 'nonveg'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Diamond Crest Luxury Design */}
      <header className="relative h-[40vh] md:h-[45vh] lg:h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-maroon/95 via-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 w-full text-center px-4 fade-in flex flex-col items-center mt-6">
          
          {/* Royal Diamond Emblem */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 mb-10 md:mb-12 flex items-center justify-center group">
            {/* Outer Diamond (animated) */}
            <div className="absolute inset-0 border border-royal-gold/40 rotate-45 group-hover:rotate-[225deg] transition-transform duration-[1500ms] ease-in-out"></div>
            {/* Inner Thick Diamond */}
            <div className="absolute inset-2 border-2 border-royal-gold rotate-45 bg-royal-maroon/80 backdrop-blur-sm shadow-[0_0_30px_rgba(255,215,0,0.25)] flex items-center justify-center"></div>
            
            <h1 className="relative z-10 text-4xl md:text-5xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-royal-gold tracking-tighter">
              KK
            </h1>
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-normal text-white tracking-[0.3em] md:tracking-[0.6em] uppercase mb-5 md:mb-6 drop-shadow-2xl">
            Restaurant
          </h2>
          
          {/* Subtitle */}
          <div className="flex items-center gap-4 md:gap-6 opacity-90">
            <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold"></div>
            <p className="text-xs md:text-sm text-royal-gold font-inter font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase">
              Multi Cuisine
            </p>
            <div className="w-1.5 h-1.5 rotate-45 bg-royal-gold"></div>
          </div>
          
        </div>
      </header>

      {/* Main Layout with Sidebar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12 md:py-16 flex flex-col md:flex-row gap-8 lg:gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 z-10">
          <div className="md:sticky md:top-8 bg-royal-maroon rounded-3xl p-5 md:p-6 shadow-[0_20px_50px_rgba(128,0,0,0.15)] border border-royal-gold/30 relative overflow-hidden">
            {/* Elegant Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8 pb-4 border-b border-royal-gold/20">
                <ChefHat className="text-royal-gold hidden md:block" size={28} strokeWidth={1.5} />
                <h3 className="font-playfair font-bold text-2xl md:text-3xl text-royal-gold tracking-wide">
                  Explore Menu
                </h3>
              </div>
              
              {/* Category List (Vertical on all devices) */}
              <div className="flex flex-col gap-2">
                {menuData.map((section) => (
                  <button
                    key={section.category}
                    onClick={() => {
                      setActiveCategory(section.category);
                      if (window.innerWidth < 768) {
                        const el = document.getElementById('menu-items-section');
                        if (el) window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
                      }
                    }}
                    className={`text-left px-5 py-3 md:py-4 rounded-xl text-sm md:text-base transition-all duration-300 font-bold group flex items-center justify-between ${
                      activeCategory === section.category
                        ? 'bg-gradient-to-r from-royal-gold via-yellow-400 to-royal-gold text-royal-maroon shadow-[0_4px_20px_rgba(255,215,0,0.3)] scale-[1.02] translate-x-2'
                        : 'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="tracking-wide">{section.category}</span>
                    {activeCategory === section.category && (
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-maroon animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main id="menu-items-section" className="flex-1 min-w-0">
          
          {/* Controls: Search and Filter */}
          <div className="mb-12 space-y-6 fade-in">
            {/* Veg / Non-Veg Toggle Filter */}
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => setFilterMode('all')}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filterMode === 'all' 
                    ? 'bg-royal-maroon text-white shadow-md shadow-royal-maroon/20' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                All Items
              </button>
              <button 
                onClick={() => setFilterMode('veg')}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filterMode === 'veg' 
                    ? 'bg-green-600 text-white shadow-md shadow-green-600/30' 
                    : 'bg-white text-green-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Leaf size={18} /> Pure Veg
                </div>
              </button>
              <button 
                onClick={() => setFilterMode('nonveg')}
                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  filterMode === 'nonveg' 
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30' 
                    : 'bg-white text-red-700 hover:bg-red-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Drumstick size={18} /> Non-Veg
                </div>
              </button>
            </div>
          </div>

          {/* Render Sections */}
          <div className="space-y-12">
            {menuData.map((section) => {
              const filteredItems = section.items.filter(item => {
                return filterMode === 'all' || item.type === filterMode;
              });

              if (activeCategory !== section.category) return null;

              return (
                <div 
                  key={section.category}
                  className="bg-white rounded-3xl shadow-xl border border-royal-gold/20 overflow-hidden slide-up"
                >
                  {/* Category Banner */}
                  <div className="h-24 md:h-32 w-full relative bg-royal-maroon overflow-hidden">
                    {/* Fallback texture if image fails */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                    <img 
                      src={section.image} 
                      alt={section.category} 
                      className="w-full h-full object-cover relative z-10 transition-opacity duration-500" 
                      onError={(e) => { e.target.style.opacity = '0'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-center justify-center z-20">
                      <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white tracking-widest text-shadow-md">
                        {section.category}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    {filteredItems.length === 0 ? (
                      <div className="text-center py-8">
                        <Leaf size={40} className="mx-auto text-gray-200 mb-3" />
                        <h3 className="text-xl text-gray-400 font-inter">No items found for the selected filter.</h3>
                      </div>
                    ) : (
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                        {filteredItems.map((item, index) => (
                          <li 
                            key={index}
                            className="relative p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(128,0,0,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
                          >
                            {/* Animated Background on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-maroon to-red-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"></div>

                            <div className="relative z-10 flex justify-between items-start sm:items-center gap-4 flex-col sm:flex-row">
                              
                              <div className="flex-1">
                                {/* Modern Pill Badges */}
                                <div className="flex items-center gap-2 mb-4">
                                  {item.type === 'veg' ? (
                                    <span className="bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm group-hover:bg-white/10 group-hover:text-green-300 group-hover:border-green-400 transition-colors duration-500">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Pure Veg
                                    </span>
                                  ) : (
                                    <span className="bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm group-hover:bg-white/10 group-hover:text-red-300 group-hover:border-red-400 transition-colors duration-500">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div> Non-Veg
                                    </span>
                                  )}
                                </div>
                                
                                {/* Dish Title */}
                                <h3 className="text-xl md:text-[22px] font-bold text-gray-900 group-hover:text-white transition-colors duration-500 leading-tight pr-2">
                                  {item.name}
                                </h3>
                              </div>
                              
                              {/* Glowing Price Box */}
                              <div className="bg-gray-50 group-hover:bg-royal-gold border border-gray-100 group-hover:border-royal-gold shadow-sm group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] px-6 py-3.5 rounded-2xl transition-all duration-500 self-start sm:self-center w-full sm:w-auto text-center sm:text-right mt-2 sm:mt-0 flex-shrink-0">
                                <span className="text-2xl md:text-3xl font-sans font-black text-royal-maroon group-hover:text-black tracking-wider block transition-colors duration-500">
                                  {item.price}
                                </span>
                              </div>
                              
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-royal-maroon text-royal-gold py-12 px-4 relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ChefHat size={40} className="mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-playfair mb-4 text-royal-white">KK RESTAURANT</h3>
          <p className="opacity-80 font-light mb-8 max-w-md mx-auto">
            Experience the royal taste of Multi Cuisine dining. Indulge in our carefully curated menu featuring authentic flavors and premium ingredients.
          </p>
          <div className="h-px w-32 bg-royal-gold/30 mx-auto mb-8"></div>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} KK Restaurant Multi Cuisine. All rights reserved.
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 bg-royal-gold text-royal-maroon p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ArrowUp size={24} />
        </button>
      </footer>
    </div>
  );
}

export default App;
