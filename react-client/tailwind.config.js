/** @type {import('tailwindcss').Config} */
module.exports = {
  //Within tailwind.config.cjs, you will see a content key. This is where you will define 
  //which files in your project TailwindCSS should be aware of when scanning through your 
  //code and deciding which of its classes and utilities you are using. This is how TailwindCSS 
  //determines what needs to be bundled into its built and minified output.
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

