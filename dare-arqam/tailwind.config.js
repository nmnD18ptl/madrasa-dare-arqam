/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jamia: {
          primary: '#0D9488',        // Modern Teal
          'primary-dark': '#0F766E', // Darker Teal
          'primary-light': '#14B8A6', // Light Teal
          accent: '#F97316',         // Orange/Amber
          'accent-light': '#FB923C', // Light Orange
          'accent-dark': '#EA580C',  // Dark Orange
          text: '#1F2937',           // Dark Gray
          'text-light': '#6B7280',   // Light Gray
          bg: '#F9FAFB',             // Light Background
          white: '#FFFFFF',
        },
        // Keep old names for backward compatibility
        islamic: {
          green: '#0D9488',
          'green-light': '#14B8A6',
          'green-dark': '#0F766E',
          gold: '#F97316',
          'gold-light': '#FB923C',
          'gold-dark': '#EA580C',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'body': ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        'urdu': ['Noto Nastaliq Urdu', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '2560px',
      },
      backgroundImage: {
        'pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D9488' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

