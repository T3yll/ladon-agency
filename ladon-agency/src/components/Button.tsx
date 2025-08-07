import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'nav' | 'primary' | 'glass' | 'dark' | 'white';
  size?: 'nav' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  variant = 'glass',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const baseStyles = "font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none relative overflow-hidden";
  
  const variants = {
    nav: `
      backdrop-blur-md 
      bg-white/5 
      hover:bg-white/10 
      border border-white/10 
      hover:border-white/20 
      text-white 
      shadow-lg 
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-white/5 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
    `,
    primary: `
      backdrop-blur-md 
      bg-gradient-to-r from-emerald-500/20 to-teal-500/20 
      hover:from-emerald-500/30 hover:to-teal-500/30 
      border border-emerald-400/30 
      hover:border-emerald-400/50 
      text-white 
      shadow-xl shadow-emerald-500/20 
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-white/10 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
    `,
    glass: `
      backdrop-blur-lg 
      bg-white/8 
      hover:bg-white/12 
      border border-white/15 
      hover:border-white/25 
      text-white 
      shadow-2xl shadow-black/20 
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
    `,
    dark: `
      backdrop-blur-md 
      bg-gray-600/60 
      hover:bg-gray-800/70 
      border border-gray-700/50 
      hover:border-gray-600/70 
      text-white 
      shadow-xl 
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-white/5 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
    `,
    white: `
      bg-white 
      hover:bg-gray-50
      text-black 
      shadow-lg 
      hover:shadow-xl 
      border-0
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-gray-100/50 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 
      before:transition-opacity before:duration-300
    `
  };
  
  const sizes = {
    nav: "px-6 py-3 text-sm",
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-18 py-3 text-lg font-semibold"
  };
  
  const disabledStyles = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "cursor-pointer hover:scale-[1.02] active:scale-[0.98]";
  
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        ${className}
      `.trim()}
      style={{ fontFamily: 'Inter Tight, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GlassButton;