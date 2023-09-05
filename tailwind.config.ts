import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'usemove': {
          '100%': {
            transform: 'translate(20px,20px)',
          },
        },
        'smallBallmove': {
          '100%': {
            transform: 'translate(0px,10px)',
          },
        },
        'bigBallmove': {
          '0%': {},
          '25%': {
            transform: 'translate(5px,0px)',
          },
          '50%': {
            transform: 'translate(5px,5px)',
          },
          '75%': {
            transform: 'translate(0px,5px)',
          },
          '100%': {
            transform: 'translate(0px,0px)',
          }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
