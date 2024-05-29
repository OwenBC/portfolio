import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FEF2E8',
        main: '#FFDC58',
        mainAccent: '#ffc800',
      },
      borderRadius: {
        DEFAULT: '20px'
      },
      boxShadow: {
        base: '5px 5px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '5px',
        boxShadowY: '5px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      }
    }
  },
  safelist: [
    'rounded-full'
  ],
  plugins: []
} satisfies Config
