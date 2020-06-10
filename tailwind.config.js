module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: 
      {
        'lightshade' : '#f7f4f1',
        'lightaccent': '#7f9eb2',
        'brand': '#f5b725',
        'darkaccent': '#a5454a',
        'darkshade': '#232c3f'

      }
    },
  },
  variants: {},
  plugins: [],
}
