/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {

        slideProgress:{
          '0%':{transform: 'scaleX(0)'},
          '100%':{transform: 'scaleX(1)'},
        },

        slideDown:{
          '0%':{'margin-top' : '-100%'},
          '100%':{'margin-top' : '0%'},
        },

        slideUp:{
          '0%':{'margin-top' : '100%'},
          '100%':{'margin-top' : '0%'},
        }

      },      
      animation:{
        'slideProgress' : '1.8s slideProgress',
        'slide-down' : '1s slideDown',
        'slide-up' : '1.5s slideUp' ,
        
      }
    },
  },
  plugins: [],
}