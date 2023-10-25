/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        screens: {
        'xf': '250px',
        'mf': '350px',
        'xs': '390px',
        // => @media (min-width: 390px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        'axl':'1300px',
        '2xl': '1536px',

        // => @media (min-width: 1536px) { ... }
        },
        aspectRatio: {
        '9/16': '9 / 16',
        },
    },
    },
    variants: {
    extend: {
        backgroundClip: ['hover', 'focus'], // Add any necessary variants here
    },
    },
    corePlugins: {
    aspectRatio: false,
    },
  plugins: [],
}

