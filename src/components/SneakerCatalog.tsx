import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowRight, CheckCircle2, Tag } from 'lucide-react';
import { Sneaker, AvailabilityStatus } from '../types';
import { SneakerVisual } from './SneakerVisual';

interface SneakerCatalogProps {
  sneakers: Sneaker[];
  onSelectSneaker: (sneaker: Sneaker) => void;
  collectionIds: string[];
}

export const SneakerCatalog: React.FC<SneakerCatalogProps> = ({
  sneakers,
  onSelectSneaker,
  collectionIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const availabilityFilters: string[] = ['All', 'In Stock', 'Limited Release', 'Vault Reserve'];

  const filteredSneakers = useMemo(() => {
    return sneakers.filter((sneaker) => {
      const matchesSearch =
        sneaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sneaker.colorway.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sneaker.releaseYear.toString().includes(searchQuery);

      const matchesFilter =
        selectedFilter === 'All' || sneaker.availability === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [sneakers, searchQuery, selectedFilter]);

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
    <section id="sneaker-catalog-screen" className="w-full">
      {/* Top Banner / Hero Intro */}
      <div id="catalog-header-section" className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800 pb-5">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Retro Sneaker Vault
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg mt-1">
              Browse archival court, track, and skate icons from 1984 to 2000.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs sm:text-sm font-semibold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            <Tag className="w-4 h-4 text-orange-400" />
            <span>{sneakers.length} Archive Models</span>
          </div>
        </div>

        {/* Search and Availability Filter Controls */}
        <div id="catalog-controls" className="mt-5 space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
            <input
              id="catalog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by silhouette name, colorway, or year..."
              className="w-full min-h-[48px] bg-zinc-900 border border-zinc-800 rounded-xl pl-12 pr-4 text-white text-base placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>

          {/* Availability Filter Chips */}
          <div id="catalog-filter-chips" className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <SlidersHorizontal className="w-4 h-4 text-zinc-400 shrink-0 ml-1 mr-1 hidden sm:inline" />
            {availabilityFilters.map((filter) => (
              <button
                key={filter}
                id={`filter-chip-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-zinc-100 text-zinc-950 shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      {filteredSneakers.length === 0 ? (
        <div id="catalog-empty-state" className="text-center py-16 px-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/80 my-8">
          <p className="text-zinc-300 text-lg font-medium">No retro sneakers found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('All');
            }}
            className="mt-4 px-5 py-2.5 min-h-[44px] bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div
          id="sneakers-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {filteredSneakers.map((sneaker) => {
            const isSaved = collectionIds.includes(sneaker.id);
            return (
              <div
                key={sneaker.id}
                id={`sneaker-card-${sneaker.id}`}
                onClick={() => onSelectSneaker(sneaker)}
                className="group relative bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-zinc-700 p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
              >
                {/* Visual Canvas Card Header */}
                <div>
                  <div className="relative bg-zinc-950 rounded-xl p-3 border border-zinc-800/80 mb-4 overflow-hidden">
                    {/* Top status chips */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-zinc-700">
                        {sneaker.releaseYear}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getAvailabilityBadge(
                          sneaker.availability
                        )}`}
                      >
                        {sneaker.availability}
                      </span>
                    </div>

                    {/* Sneaker Graphic Illustration */}
                    <SneakerVisual visual={sneaker.visual} size="md" isInteractive={true} />

                    {/* In Collection Indicator */}
                    {isSaved && (
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-emerald-950/90 text-emerald-400 border border-emerald-600/70 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>In Collection</span>
                      </div>
                    )}
                  </div>

                  {/* Core Card Details */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {sneaker.name}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base font-medium mt-1">
                    {sneaker.colorway}
                  </p>
                </div>

                {/* Footer with Price and View Details Action */}
                <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block">
                      Original MSRP
                    </span>
                    <span className="text-2xl font-black text-white">
                      ${sneaker.price}
                    </span>
                  </div>

                  <button
                    id={`view-details-btn-${sneaker.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSneaker(sneaker);
                    }}
                    className="min-h-[44px] px-4 py-2 bg-zinc-800 hover:bg-orange-600 group-hover:bg-orange-600 text-white rounded-xl text-sm font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
