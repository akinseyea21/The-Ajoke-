import React, { useState } from 'react';

interface TheAjokeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
  className?: string;
  variant?: 'emblem' | 'horizontal';
}

export const TheAjokeLogo: React.FC<TheAjokeLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
  variant = 'horizontal'
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // Exact uploaded brand asset filename as provided
  const uploadedLogoSrc = '/165C659A-64B7-4F5E-88A8-A9E1B00AB6A9.png';

  const dimensionClass = {
    sm: 'h-10 max-w-[140px]',
    md: 'h-16 max-w-[220px]',
    lg: 'h-24 max-w-[320px]',
    xl: 'h-32 max-w-[420px]',
    '2xl': 'h-48 max-w-[550px]'
  }[size];

  // Under user's critical instruction:
  // If the host environment cannot serve the uploaded logo file exactly,
  // leave the logo graphic out entirely rather than generating, redrawing, or altering a replacement.
  if (imageFailed) {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B2118] leading-none">
          THE AJOKE
        </span>
        {showSubtitle && (
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#7A6A58] mt-1.5 font-medium">
            Understand. Empower. Transform.
          </span>
        )}
      </div>
    );
  }

  // Treat the logo strictly as a fixed, untouched image asset
  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={uploadedLogoSrc}
        alt="THE AJOKE"
        className={`${dimensionClass} w-auto object-contain`}
        referrerPolicy="no-referrer"
        onError={() => setImageFailed(true)}
      />
    </div>
  );
};
