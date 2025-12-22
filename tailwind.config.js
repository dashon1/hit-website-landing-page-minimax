/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#0a192f', // Dark Navy
        foreground: '#e6f1ff', // Light Blue/White
        primary: {
          DEFAULT: '#00f3ff', // Electric Cyan
          foreground: '#0a192f',
        },
        secondary: {
          DEFAULT: '#112240', // Lighter Navy
          foreground: '#00f3ff',
        },
        accent: {
          DEFAULT: '#64ffda', // Mint/Teal
          foreground: '#0a192f',
        },
        destructive: {
          DEFAULT: '#ff5555', // Red Alert
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#8892b0', // Slate Blue
          foreground: '#e6f1ff',
        },
        popover: {
          DEFAULT: '#112240',
          foreground: '#e6f1ff',
        },
        card: {
          DEFAULT: '#112240',
          foreground: '#e6f1ff',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 10px #00f3ff' },
          '50%': { opacity: .8, boxShadow: '0 0 20px #00f3ff' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
