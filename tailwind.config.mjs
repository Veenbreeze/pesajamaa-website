/**
 * PesaJamaa brand tokens live here — change these in ONE place.
 * PRIMARY is blue (#026DDE); teal (#18B49C) is the secondary accent from the logo.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ---- Brand tokens ----
        primary: {
          DEFAULT: '#026DDE', // primary CTAs, links, key accents
          hover: '#0159B8',
        },
        accent: {
          DEFAULT: '#18B49C', // teal from the logo: secondary highlights, success
          hover: '#15B89C',   // button hover pair
        },
        leaf: {
          DEFAULT: '#0B815E', // green header accent — deep enough for white CTA text
          hover: '#087A58',
          soft: '#E9F8F1',
          ink: '#075E46',
        },
        navy: '#010B2A',       // dark sections / footer background
        slate: '#18303C',      // logo's dark text colour; deep headings on tint
        tint: '#EFF7FF',       // light blue section backgrounds / icon tiles
        'gray-bg': '#F5F5F5',  // alternating section background
        heading: '#212121',    // headings
        muted: '#6B7280',      // body / secondary text
      },
      fontFamily: {
        // Nunito, loaded via Google Fonts in the base layout.
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '8px', // button radius per brand spec
      },
      boxShadow: {
        // Soft, layered shadows for cards.
        soft: '0 1px 2px rgba(16, 24, 40, 0.04), 0 4px 16px rgba(16, 24, 40, 0.06)',
        lift: '0 10px 30px rgba(16, 24, 40, 0.12)',
        glow: '0 10px 40px rgba(2, 109, 222, 0.18)',
        leaf: '0 12px 28px rgba(11, 129, 94, 0.24)',
      },
      maxWidth: {
        container: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'slide-in': 'slide-in 0.4s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
