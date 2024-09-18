module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      BackgroundImage:{
        'bg' : "url('./src/assets/imagens/bg.jpg')"
      }
    },
  },
  plugins: [],
}