/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCC419',
          'yellow-light': '#FFF1BF',
          'yellow-subtle': '#FFF8E6',
          dark: '#17181A',
          purple: '#4E25A5',
          'purple-dark': '#1E0D47',
          'purple-deep': '#150934',
          cream: '#FFFDF8',
          'cream-warm': '#FFFAF0',
          'cream-border': '#E5DDCD'
        }
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
        brand: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      },
      boxShadow: {
        'brutal': '4px 4px 0px #17181A',
        'brutal-lg': '6px 6px 0px #17181A',
        'brutal-xl': '10px 10px 0px #4E25A5',
        'brutal-yellow': '4px 4px 0px #FCC419'
      }
    },
  },
  plugins: [],
}
