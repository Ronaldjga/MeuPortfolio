module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/patterns/**/*.{js,ts,jsx,tsx}'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/patterns/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yelloPrimary: "#F2BF5E",
        primaryPink: "#831843",
        secondaryPink: "#EE7277",
        darkBluePrimary: "#022026",
        grayPimary: "#022026",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui',],
        serif: ['ui-serif', 'Georgia',],
        mono: ['ui-monospace', 'SFMono-Regular',],
        h1Title: ['Cinzel',],
        h2Title: ['"Domine"',],
        body: ['"Work Sans"',],
      }
    },
  },
  plugins: [],
}
