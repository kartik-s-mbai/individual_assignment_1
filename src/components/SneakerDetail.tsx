import React from 'react';
import { ArrowLeft, BookmarkPlus, Check, Calendar, DollarSign, Activity, PackageCheck, Layers } from 'lucide-react';
import { Sneaker, AvailabilityStatus } from '../types';
import { SneakerVisual } from './SneakerVisual';

interface SneakerDetailProps {
  sneaker: Sneaker;
  onBackToCatalog: () => void;
  isInCollection: boolean;
  onToggleCollection: (sneaker: Sneaker) => void;
}

export const SneakerDetail: React.FC<SneakerDetailProps> = ({
  sneaker,
  onBackToCatalog,
  isInCollection,
  onToggleCollection,
}) => {
  const getAvailabilityBadge = (status: AvailabilityStatus) => {
    switch (status) {
      case 'In Stock':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60';
      case 'Limited Release':
        return 'bg-amber-950/80 text-amber-300 border-amber-700/60';
      case 'Vault Reserve':
        return 'bg-purple-950/80 text-purple-300 border-purple-700/60';
      case 'Restocking Soon':
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <article id="sneaker-detail-screen" className="w-full pb-12">
      {/* Top Back Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <button
          id="detail-back-button"
          onClick={onBackToCatalog}
          className="min-h-[44px] px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-base font-semibold flex items-center gap-2 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Catalog</span>
        </button>

        <span className="text-sm font-mono text-zinc-400">
          ID: {sneaker.id.toUpperCase()}
        </span>
      </div>

      {/* Main Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Hero Larger Visual */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div
            id="detail-visual-card"
            className="relative bg-zinc-950 rounded-3xl border border-zinc-800 p-6 sm:p-10 flex flex-col items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Year & Availability Header Inside Frame */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="text-sm font-mono font-bold px-3 py-1 rounded-lg bg-zinc-900/90 text-zinc-200 border border-zinc-700 shadow-sm">
                Vintage {sneaker.releaseYear}
              </span>
              <span
                className={`text-xs sm:text-sm font-semibold px-3.5 py-1 rounded-full border shadow-sm ${getAvailabilityBadge(
                  sneaker.availability
                )}`}
              >
                {sneaker.availability}
              </span>
            </div>

            {/* Large Visual Display */}
            <div className="w-full py-8 sm:py-12">
              <SneakerVisual visual={sneaker.visual} size="hero" />
            </div>

            {/* Colorway Palette Chips */}
            <div className="w-full pt-4 border-t border-zinc-900 flex items-center justify-center gap-3">
              <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                Palette Specs:
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm"
                  style={{ backgroundColor: sneaker.visual.primaryColor }}
                  title="Primary Upper"
                />
                <span
                  className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm"
                  style={{ backgroundColor: sneaker.visual.secondaryColor }}
                  title="Secondary Overlay"
                />
                <span
                  className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm"
                  style={{ backgroundColor: sneaker.visual.accentColor }}
                  title="Accent Detail"
                />
                <span
                  className="w-4 h-4 rounded-full border border-zinc-700 shadow-sm"
                  style={{ backgroundColor: sneaker.visual.soleColor }}
                  title="Outsole Base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Details, Specs & Collection CTA */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header Title Block */}
          <div id="detail-header-block" className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-7 shadow-lg">
            <div className="space-y-1.5">
              <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-orange-400 bg-orange-950/60 px-2.5 py-0.5 rounded-md border border-orange-800/40">
                {sneaker.visual.silhouette.toUpperCase()} SILHOUETTE
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {sneaker.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300">
                {sneaker.colorway}
              </p>
            </div>

            {/* Price and Year High-Impact Metrics */}
            <div className="mt-6 pt-5 border-t border-zinc-800 grid grid-cols-2 gap-4">
              <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Release Price</span>
                </div>
                <div className="text-3xl font-black text-white">
                  ${sneaker.price}
                </div>
              </div>

              <div className="bg-zinc-950/80 rounded-2xl p-3.5 border border-zinc-800/80">
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                  <span>Archival Year</span>
                </div>
                <div className="text-3xl font-black text-white">
                  {sneaker.releaseYear}
                </div>
              </div>
            </div>

            {/* Collection CTA Button */}
            <div className="mt-6">
              <button
                id="detail-add-collection-btn"
                onClick={() => onToggleCollection(sneaker)}
                className={`w-full min-h-[52px] px-6 py-3 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg active:scale-98 ${
                  isInCollection
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30 ring-2 ring-emerald-500'
                    : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30'
                }`}
              >
                {isInCollection ? (
                  <>
                    <Check className="w-6 h-6 stroke-[3]" />
                    <span>Saved in My Collection</span>
                  </>
                ) : (
                  <>
                    <BookmarkPlus className="w-6 h-6" />
                    <span>Add to My Collection</span>
                  </>
                )}
              </button>
              {isInCollection && (
                <p className="text-center text-xs text-zinc-400 mt-2">
                  Click again anytime to toggle or remove from collection.
                </p>
              )}
            </div>
          </div>

          {/* Description Section */}
          <div id="detail-description-section" className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-7 shadow-lg">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-orange-400" />
              <span>Design History & Materials</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {sneaker.description}
            </p>
          </div>

          {/* Available Sizes Section */}
          <div id="detail-sizes-section" className="bg-zinc-900/90 rounded-3xl border border-zinc-800 p-6 sm:p-7 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <PackageCheck className="w-4 h-4 text-emerald-400" />
                <span>Available Collector Sizes</span>
              </h2>
              <span className="text-xs text-zinc-400 font-medium">Standard Unisex Fit</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {sneaker.availableSizes.map((size) => (
                <div
                  key={size}
                  id={`size-badge-${size.replace(/\s+/g, '-')}`}
                  className="min-h-[44px] flex items-center justify-center px-3 py-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-xl text-sm sm:text-base font-semibold text-zinc-200"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
