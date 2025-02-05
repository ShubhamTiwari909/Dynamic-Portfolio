import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      transitionTimingFunction: {
        slow: 'cubic-bezier(.405, 0, .025, 1)',
      },
      transitionDuration: {
        mid: '3s',
      },
      keyframes: {
        slideOutToLeftFull: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideOutToRightFull: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'slide-out-to-left-full': 'slideOutToLeftFull 2s ease-out forwards',
        'slide-out-to-right-full': 'slideOutToRightFull 2s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
