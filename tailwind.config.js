/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FBF8F1',
          100: '#F6EFE0',
          200: '#ECCFA2',
          300: '#E1B871',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B08A45',
          700: '#8E6B30',
          800: '#6C4F22',
          900: '#4D3617',
        },
        onyx: {
          800: '#18181B',
          900: '#0F172A',
          950: '#0A0F1D',
        },
        warm: {
          50: '#FAF9F6',
          100: '#F5F2EB',
          200: '#EAE5DD',
          300: '#DCD4C8',
        },
        concrete: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          400: '#94A3B8',
          600: '#475569',
          800: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.25)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
