import React, { useState, useEffect } from 'react';
import { Screen, Sneaker } from './types';
import { SNEAKERS_DATA } from './data/sneakers';
import { Navbar } from './components/Navbar';
import { SneakerCatalog } from './components/SneakerCatalog';
import { SneakerDetail } from './components/SneakerDetail';
import { MyCollection } from './components/MyCollection';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('catalog');
  const [selectedSneakerId, setSelectedSneakerId] = useState<string | null>(null);

  // Initialize collection from localStorage if available, or default to empty
  const [collectionIds, setCollectionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sneakerfreaks_collection');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Keep collection synchronized with localStorage for seamless mobile testing
  useEffect(() => {
    try {
      localStorage.setItem('sneakerfreaks_collection', JSON.stringify(collectionIds));
    } catch {
      // storage unavailable fallback
    }
  }, [collectionIds]);

  const selectedSneaker = selectedSneakerId
    ? SNEAKERS_DATA.find((s) => s.id === selectedSneakerId) || null
    : null;

  const collectionSneakers = SNEAKERS_DATA.filter((s) =>
    collectionIds.includes(s.id)
  );

  const handleSelectSneaker = (sneaker: Sneaker) => {
    setSelectedSneakerId(sneaker.id);
    setCurrentScreen('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setCurrentScreen('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCollection = (sneaker: Sneaker) => {
    setCollectionIds((prev) => {
      if (prev.includes(sneaker.id)) {
        return prev.filter((id) => id !== sneaker.id);
      } else {
        return [...prev, sneaker.id];
      }
    });
  };

  const handleRemoveFromCollection = (sneakerId: string) => {
    setCollectionIds((prev) => prev.filter((id) => id !== sneakerId));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        collectionCount={collectionIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {currentScreen === 'catalog' && (
          <SneakerCatalog
            sneakers={SNEAKERS_DATA}
            onSelectSneaker={handleSelectSneaker}
            collectionIds={collectionIds}
          />
        )}

        {currentScreen === 'detail' && selectedSneaker && (
          <SneakerDetail
            sneaker={selectedSneaker}
            onBackToCatalog={handleBackToCatalog}
            isInCollection={collectionIds.includes(selectedSneaker.id)}
            onToggleCollection={handleToggleCollection}
          />
        )}

        {currentScreen === 'collection' && (
          <MyCollection
            collectionSneakers={collectionSneakers}
            onRemoveSneaker={handleRemoveFromCollection}
            onSelectSneaker={handleSelectSneaker}
            onBrowseCatalog={() => handleNavigate('catalog')}
          />
        )}
      </main>

      {/* Accessible Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 text-zinc-400 py-6 px-4 text-center text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-zinc-400">
            SneakerFreaks &bull; Fictional Retro Sneaker Archive
          </p>
          <p className="text-zinc-400">
            MGMT 6110 Human-AI Collaboration &bull; Problem Set 1
          </p>
        </div>
      </footer>
    </div>
  );
}
