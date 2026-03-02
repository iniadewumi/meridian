import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Meridian S&O design tokens (match meridian-so.html)
        'dark-bg': '#f8f7f4', // paper
        'dark-surface': '#f2f0eb', // warm
        'dark-border': '#d4d2cd', // rule
        'dark-text': '#1a1d23', // ink
        'dark-text-secondary': '#2c5f4a', // accent
        'dark-text-muted': '#6b6e76', // stone
        'dark-hover': '#e8f0ec', // accent-light
        'accent-hover': '#234d3b', // primary button hover
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
