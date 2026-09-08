import React from 'react';
import { SneakerVisualConfig } from '../types';

interface SneakerVisualProps {
  visual: SneakerVisualConfig;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  isInteractive?: boolean;
}

export const SneakerVisual: React.FC<SneakerVisualProps> = ({
  visual,
  size = 'md',
  className = '',
  isInteractive = false,
}) => {
  const { silhouette, primaryColor, secondaryColor, accentColor, soleColor, trimColor } = visual;

  // Sizing styles
  const sizeClasses = {
    sm: 'w-24 h-16',
    md: 'w-full h-44',
    lg: 'w-full h-64 md:h-80',
    hero: 'w-full h-72 md:h-96'
  }[size];

  return (
    <div
      id="sneaker-visual-wrapper"
      className={`relative flex items-center justify-center select-none overflow-hidden ${sizeClasses} ${className}`}
    >
      {/* Background ambient glow matching primary color */}
      <div
        className="absolute inset-0 opacity-15 blur-2xl rounded-full scale-75 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Retro Sneaker SVG Graphic */}
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 ${
          isInteractive ? 'hover:scale-105' : ''
        }`}
      >
        <defs>
          <linearGradient id={`grad-upper-${primaryColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={trimColor} />
          </linearGradient>
          <linearGradient id={`grad-sole-${soleColor.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={soleColor} />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>
          <filter id="shadow-drop" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Soft ground shadow */}
        <ellipse cx="200" cy="224" rx="145" ry="12" fill="#000000" fillOpacity="0.18" />

        {/* Sneaker Rendering by Silhouette */}
        {silhouette === 'high-top' ? (
          <g filter="url(#shadow-drop)">
            {/* High Top Ankle Collar */}
            <path
              d="M 120 70 L 155 35 L 210 40 L 220 95 L 180 120 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />
            {/* Padded Collar Liner */}
            <path
              d="M 155 35 Q 185 30 210 40 L 205 50 Q 185 42 160 45 Z"
              fill={accentColor}
            />

            {/* Main Shoe Quarter / Upper */}
            <path
              d="M 110 115 L 175 110 L 240 120 L 290 145 L 340 170 L 335 195 L 75 195 L 70 160 L 90 130 Z"
              fill={primaryColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />

            {/* Toe Box & Front Mudguard */}
            <path
              d="M 270 150 L 320 170 L 345 185 L 345 195 L 285 195 L 260 175 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="2"
            />
            {/* Toe perforations */}
            <circle cx="300" cy="180" r="1.5" fill="#27272a" opacity="0.6" />
            <circle cx="308" cy="183" r="1.5" fill="#27272a" opacity="0.6" />
            <circle cx="316" cy="186" r="1.5" fill="#27272a" opacity="0.6" />
            <circle cx="295" cy="185" r="1.5" fill="#27272a" opacity="0.6" />
            <circle cx="304" cy="188" r="1.5" fill="#27272a" opacity="0.6" />

            {/* Retro Swoop / Side Chevron Flash */}
            <path
              d="M 140 140 Q 210 130 260 155 L 245 168 Q 200 145 135 155 Z"
              fill={accentColor}
              stroke="#18181b"
              strokeWidth="1.5"
            />

            {/* Lacing Stay & Laces */}
            <path
              d="M 180 80 L 205 85 L 245 140 L 225 145 Z"
              fill={trimColor}
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <line x1="175" y1="88" x2="195" y2="92" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="188" y1="102" x2="210" y2="108" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="202" y1="118" x2="225" y2="124" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="216" y1="134" x2="238" y2="140" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

            {/* Heel Counter Reinforcement */}
            <path
              d="M 72 165 C 70 180 73 195 75 195 L 125 195 L 120 160 C 105 160 90 162 72 165 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="2"
            />

            {/* Midsole / Outsole */}
            <path
              d="M 70 195 L 350 195 C 355 205 348 215 330 216 L 85 216 C 72 216 68 208 70 195 Z"
              fill={soleColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />
            {/* Outsole Grip Layer */}
            <path
              d="M 78 214 L 332 214 C 330 220 320 223 310 223 L 95 223 C 85 223 80 220 78 214 Z"
              fill={accentColor}
            />
            {/* Midsole Texture Grooves */}
            <line x1="100" y1="200" x2="100" y2="212" stroke="#71717a" strokeWidth="1.5" opacity="0.6" />
            <line x1="115" y1="200" x2="115" y2="212" stroke="#71717a" strokeWidth="1.5" opacity="0.6" />
            <line x1="130" y1="200" x2="130" y2="212" stroke="#71717a" strokeWidth="1.5" opacity="0.6" />
          </g>
        ) : silhouette === 'runner' ? (
          <g filter="url(#shadow-drop)">
            {/* Runner Wedge Upper */}
            <path
              d="M 95 140 L 140 100 L 195 95 L 235 130 L 295 150 L 355 175 L 348 195 L 80 195 L 75 170 Z"
              fill={primaryColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />

            {/* Suede Mudguard */}
            <path
              d="M 76 175 L 120 170 L 160 178 L 260 178 L 310 168 L 355 175 L 348 195 L 80 195 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="1.5"
            />

            {/* Aerodynamic Side Wing / Lightning Streak */}
            <path
              d="M 130 145 L 240 135 L 265 150 L 180 162 Z"
              fill={accentColor}
              stroke="#18181b"
              strokeWidth="1.5"
            />

            {/* Breathable Mesh Toe Underlay */}
            <path
              d="M 280 152 L 335 170 L 315 180 L 265 175 Z"
              fill="#ffffff"
              opacity="0.85"
            />
            {/* Mesh crosshatch lines */}
            <line x1="285" y1="156" x2="310" y2="178" stroke="#94a3b8" strokeWidth="1" />
            <line x1="298" y1="158" x2="322" y2="176" stroke="#94a3b8" strokeWidth="1" />

            {/* Padded Heel Tab */}
            <path
              d="M 95 140 Q 115 125 140 100 L 155 110 Q 125 135 110 148 Z"
              fill={trimColor}
            />

            {/* Speed Laces */}
            <line x1="170" y1="105" x2="190" y2="110" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="185" y1="116" x2="208" y2="122" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="202" y1="128" x2="225" y2="134" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />

            {/* Cushioned Arch Wedge Midsole */}
            <path
              d="M 75 192 L 350 192 C 358 202 350 214 335 216 L 85 216 C 70 216 66 204 75 192 Z"
              fill={soleColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />

            {/* Visible Air Cushion Bubble Window in Heel */}
            <rect
              x="95"
              y="198"
              width="38"
              height="12"
              rx="4"
              fill="#0f172a"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            <rect x="99" y="201" width="30" height="6" rx="2" fill={accentColor} opacity="0.85" />

            {/* Waffle Lug Tread */}
            <path
              d="M 80 216 L 338 216 L 332 222 L 85 222 Z"
              fill="#18181b"
            />
          </g>
        ) : (
          /* Court / Low-Top / Skate Retro Silhouette */
          <g filter="url(#shadow-drop)">
            {/* Low-Cut Collar & Ankle Scoop */}
            <path
              d="M 105 130 C 120 110 150 115 170 120 L 220 125 L 280 145 L 345 175 L 342 195 L 75 195 L 75 160 Z"
              fill={primaryColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />

            {/* Heel Wrap */}
            <path
              d="M 75 160 Q 75 195 80 195 L 125 195 L 120 155 Q 95 155 75 160 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="1.5"
            />

            {/* Retro Dual Stripe / Court Emblem */}
            <path
              d="M 135 150 L 235 140 L 245 154 L 140 162 Z"
              fill={accentColor}
              stroke="#18181b"
              strokeWidth="1.5"
            />
            <path
              d="M 145 166 L 242 158 L 248 166 L 150 174 Z"
              fill={trimColor}
              opacity="0.8"
            />

            {/* Toe Cap Overlap */}
            <path
              d="M 275 150 L 335 172 L 345 185 L 342 195 L 270 195 Z"
              fill={secondaryColor}
              stroke="#27272a"
              strokeWidth="1.5"
            />
            {/* Perforations */}
            <circle cx="295" cy="178" r="1.5" fill="#18181b" opacity="0.6" />
            <circle cx="304" cy="181" r="1.5" fill="#18181b" opacity="0.6" />
            <circle cx="314" cy="184" r="1.5" fill="#18181b" opacity="0.6" />

            {/* Flat Laces */}
            <line x1="165" y1="124" x2="185" y2="128" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="180" y1="134" x2="202" y2="139" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="196" y1="145" x2="218" y2="150" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

            {/* Cupsole Construction */}
            <path
              d="M 72 192 L 348 192 C 352 204 345 216 330 216 L 85 216 C 72 216 68 206 72 192 Z"
              fill={soleColor}
              stroke="#27272a"
              strokeWidth="2.5"
            />
            {/* Stitching Line across Cupsole */}
            <line x1="82" y1="196" x2="340" y2="196" stroke="#52525b" strokeWidth="1" strokeDasharray="3 2" />

            {/* Bottom Gum Traction Rim */}
            <path
              d="M 78 213 L 334 213 C 330 219 322 222 312 222 L 95 222 C 85 222 80 218 78 213 Z"
              fill={trimColor}
              opacity="0.9"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
