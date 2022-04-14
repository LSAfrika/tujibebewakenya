module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: 
    {
fontFamily:{
  poppins:['poppins','sans-serif']
},

      keyframes: {
        'fade-in-right': {
            '0%': {
                opacity: '0',
                transform: 'translateX(400px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateX(0px)'
            },
        },
        'fade-in-left': {
          '0%': {
              opacity: '0',
              transform: 'translateX(-200px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateX(0px)'
          },
      },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-400px)' 
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
      },
      'opacity-in':{

        '0%': {
          opacity: '0',
          transform: 'scale(0)'
      },
      '100%': {
          opacity: '1',
          transform: 'scale(1)'
      },

      }

     
    },
    
  

    
    animation: {
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out ',
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'opacity-in':'opacity-in 1s ease-out'

    }


    },
  },
  plugins: [

    require('tailwind-scrollbar')
  ],
}
