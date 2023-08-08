/** @type {import('tailwindcss').Config} */
module.exports = {
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

      screens: {
        xs: "640px",
        phone: {'min': '300px', 'max': '640px'},
        sphone: {'min': '1px', 'max': '299px'},
        zxl: "1900px", 

        
      },
    },
  },
  plugins: [
    
  ],
}
