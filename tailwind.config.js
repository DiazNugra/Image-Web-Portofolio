/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,    
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'Montserrat Alternates',
      secondary : 'Jost',
      alternate : 'Cinzel'
    },    
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a'
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#CCB372',
        },
      },
      backgroundImage: {
        heroMain: 'url(https://i.ibb.co.com/2YPTKmx/hero-main.png)',
        heroMobile : 'url(https://i.ibb.co.com/pP7HFwN/hero-mobile.png)',
      },
    },
  },
  plugins: [],
}

