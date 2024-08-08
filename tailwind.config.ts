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
        background: '#F3F6FD',
        sidebarBlue: '#363F72',
        hoverGray: '#667085',
        titleBlue: '#145389',
      },
    },
  },
  plugins: [],
}
export default config
