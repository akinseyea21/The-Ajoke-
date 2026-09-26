import React, { useState } from 'react';

// Use the generated official brand emblem asset
import brandEmblemUrl from '../assets/images/ajoke_brand_emblem_1790388820804.jpg';

interface TheAjokeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'emblem' | 'horizontal';
}

export const TheAjokeLogo: React.FC<TheAjokeLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
  variant = 'emblem'
}) => {
  const [imageError, setImageError] = useState(false);

  const dimensionClass = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36'
  }[size];

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <div className={`relative ${dimensionClass} rounded-full overflow-hidden shrink-0 border border-[#6B4A34]/20 shadow-xs bg-[#F3EBDD]`}>
          {!imageError ? (
            <img
              src={brandEmblemUrl}
              alt="THE AJOKE official emblem"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-1 text-[#3E2A1E]">
              <span className="font-serif italic font-semibold text-xs">The Ajoke</span>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B2118] leading-none">
            THE AJOKE
          </span>
          {showSubtitle && (
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#7A6A58] mt-1 font-medium">
              Understand. Empower. Transform.
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className={`relative ${dimensionClass} rounded-full overflow-hidden border border-[#6B4A34]/25 shadow-xs bg-[#F3EBDD] transition-transform duration-300 hover:scale-[1.02]`}>
        {!imageError ? (
          <img
            src={brandEmblemUrl}
            alt="THE AJOKE official logo - Understanding. Empowering. Transforming."
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full border border-[#6B4A34] flex flex-col items-center justify-center p-2 text-[#3E2A1E]">
            <div className="text-[10px] tracking-widest text-[#7A6A58] uppercase">The</div>
            <div className="font-serif italic font-bold text-lg leading-none">Ajoke</div>
            <div className="text-[7px] tracking-widest uppercase mt-1 text-[#6B4A34]">
              Understand · Empower · Transform
            </div>
          </div>
        )}
      </div>
      {showSubtitle && (
        <div className="mt-2 text-center">
          <p className="font-serif text-base font-bold text-[#2B2118] tracking-tight">THE AJOKE</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A6A58] font-medium">
            Understand. Empower. Transform.
          </p>
        </div>
      )}
    </div>
  );
};
