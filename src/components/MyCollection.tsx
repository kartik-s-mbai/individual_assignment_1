import React from 'react';
import { Trash2, ExternalLink, Bookmark, Compass, Sparkles } from 'lucide-react';
import { Sneaker } from '../types';
import { SneakerVisual } from './SneakerVisual';

interface MyCollectionProps {
  collectionSneakers: Sneaker[];
  onRemoveSneaker: (sneakerId: string) => void;
  onSelectSneaker: (sneaker: Sneaker) => void;
  onBrowseCatalog: () => void;
}

export const MyCollection: React.FC<MyCollectionProps> = ({
  collectionSneakers,
  onRemoveSneaker,
  onSelectSneaker,
  onBrowseCatalog,
}) => {
  const totalValue = collectionSneakers.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="my-collection-screen" className="w-full pb-12">
      {/* Collection Header & Summary Metrics */}
      <div id="collection-header-section" className="mb-8 border-b border-zinc-800 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider mb-1">
              <Bookmark className="w-4 h-4 fill-orange-400" />
              <span>Personal Vault</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              My Sneaker Collection
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg mt-1">
              Review and curate your personal archive of selected retro grails.
            </p>
          </div>

          {/* Quick Stats Pill */}
          {collectionSneakers.length > 0 && (
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-3 px-5 self-start md:self-auto">
              <div>
                <span className="text-xs uppercase font-semibold text-zinc-400 block">
                  Saved Pairs
                </span>
                <span className="text-2xl font-black text-white">
                  {collectionSneakers.length}
                </span>
              </div>
              <div className="h-8 w-px bg-zinc-800" />
              <div>
                <span className="text-xs uppercase font-semibold text-zinc-400 block">
                  Archive Value
                </span>
                <span className="text-2xl font-black text-emerald-400">
                  ${totalValue}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Collection List */}
      {collectionSneakers.length === 0 ? (
        <div
          id="collection-empty-state"
          className="text-center py-16 px-6 bg-zinc-900/60 rounded-3xl border border-zinc-800 my-4 flex flex-col items-center justify-center max-w-lg mx-auto"
        >
          <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-4 text-zinc-400">
            <Bookmark className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Your collection is currently empty
          </h2>
          <p className="text-zinc-400 text-base mb-6 leading-relaxed">
            Browse the retro catalog, inspect your favorite silhouettes, and tap &ldquo;Add to My Collection&rdquo; to build your personalized vault.
          </p>
          <button
            id="empty-browse-catalog-btn"
            onClick={onBrowseCatalog}
            className="min-h-[48px] px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-base font-bold flex items-center gap-2 shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>Explore Sneaker Catalog</span>
          </button>
        </div>
      ) : (
        <div
          id="collection-items-list"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
        >
          {collectionSneakers.map((sneaker) => (
            <div
              key={sneaker.id}
              id={`collection-item-${sneaker.id}`}
              className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-700 transition-all shadow-md"
            >
              <div className="flex gap-4 items-start">
                {/* Visual Thumbnail */}
                <div
                  onClick={() => onSelectSneaker(sneaker)}
                  className="w-28 sm:w-36 h-24 sm:h-28 shrink-0 bg-zinc-950 rounded-xl border border-zinc-800 p-2 flex items-center justify-center cursor-pointer hover:border-orange-500/50 transition-colors"
                  title="Click to view details"
                >
                  <SneakerVisual visual={sneaker.visual} size="sm" />
                </div>

                {/* Information Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 border border-zinc-800">
                      {sneaker.releaseYear}
                    </span>
                    <span className="text-xs font-medium text-zinc-400 truncate">
                      {sneaker.availability}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectSneaker(sneaker)}
                    className="text-lg sm:text-xl font-bold text-white tracking-tight hover:text-orange-400 cursor-pointer truncate transition-colors"
                  >
                    {sneaker.name}
                  </h3>

                  <p className="text-zinc-400 text-sm font-medium mt-0.5 truncate">
                    {sneaker.colorway}
                  </p>

                  <div className="mt-2 text-xl font-black text-white">
                    ${sneaker.price}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Inspect & Remove */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  id={`collection-view-btn-${sneaker.id}`}
                  onClick={() => onSelectSneaker(sneaker)}
                  className="min-h-[44px] px-3.5 py-2 text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-800 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-zinc-800"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Details</span>
                </button>

                <button
                  id={`collection-remove-btn-${sneaker.id}`}
                  onClick={() => onRemoveSneaker(sneaker.id)}
                  className="min-h-[44px] px-3.5 py-2 text-rose-400 hover:text-rose-200 bg-rose-950/40 hover:bg-rose-950/80 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-rose-900/60"
                  aria-label={`Remove ${sneaker.name} from collection`}
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
