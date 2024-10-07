import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#9fe8f6',
        'blue-medium': '#00414f',
        'blue-dark': '#002830',
        'purple-medium': '#66229f',
        'purple-medium-2': '#2f0850',        
        'purple-light': '#d3b5f1',
      },
    },
  },
  plugins: [],
}
export default config
