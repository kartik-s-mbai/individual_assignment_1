import React from 'react';
import { Sparkles, Bookmark, Compass } from 'lucide-react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  collectionCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  collectionCount,
}) => {
  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Identity */}
        <button
          id="nav-brand-button"
          onClick={() => onNavigate('catalog')}
          className="flex items-center gap-2.5 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1 transition-transform active:scale-95"
          aria-label="SneakerFreaks Home Catalog"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase block leading-none">
              Sneaker<span className="text-orange-500">Freaks</span>
            </span>
            <span className="text-[11px] font-medium tracking-widest text-zinc-400 uppercase block mt-0.5">
              Retro Vault &bull; Est. 1984
            </span>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav id="nav-screen-tabs" className="flex items-center gap-2">
          <button
            id="nav-catalog-btn"
            onClick={() => onNavigate('catalog')}
            className={`min-h-[44px] px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              currentScreen === 'catalog' || currentScreen === 'detail'
                ? 'bg-zinc-800 text-white shadow-sm ring-1 ring-zinc-700'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <span>Catalog</span>
          </button>

          <button
            id="nav-collection-btn"
            onClick={() => onNavigate('collection')}
            className={`min-h-[44px] px-3.5 sm:px-5 py-2 rounded-xl text-sm sm:text-base font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              currentScreen === 'collection'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 ring-1 ring-orange-500'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
            }`}
          >
            <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">My Collection</span>
            <span className="xs:hidden">Collection</span>
            <span
              id="nav-collection-badge"
              className={`inline-flex items-center justify-center text-xs font-bold px-2 py-0.5 rounded-full ${
                currentScreen === 'collection'
                  ? 'bg-white text-orange-700 font-extrabold'
                  : 'bg-zinc-800 text-zinc-300'
              }`}
            >
              {collectionCount}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
