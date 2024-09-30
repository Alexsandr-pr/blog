/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			serifPro: ['var(--sourceSerifPro)']
  		},
  		colors: {
  			primary: 'var(--primary)',
  			accent: 'var(--accent)',
  			hover: 'var(--hover)',
  			errors: 'var(--errors)',
  			black: 'var(--black)',
  			gray: 'var(--gray)',
  			grey: {
  				dark: 'var(--dark-gray)',
  				light: 'var(--light-gray)',
  				'light-01': 'var(--light-gray-01)'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
