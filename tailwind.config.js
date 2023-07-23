/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '50%':'50%',
      },
      spacing:
      {
        '200':'640px',
        '100':'25rem',
        '8/10':'80%',
        '40/1':'40%',
        '9/10':'90%',
        '35%':'35%',
        '55':'32%',
        '150':'525px',
        '175':'530px',
      },
      colors:
      {
        'black-t':'rgba(.25, .25, 1, 0.349)',
        'black-st':'rgba(0, 0, 0, 0.45)'
      },
      boxShadow:
      {
        '1md':'0px 0px .5px 1px'
      },
      borderWidth:
      {
        "1":'1px',
      }
    },
  },
  plugins: [],
}

