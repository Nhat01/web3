/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         fontFamily: {
            sans: ["var(--font-inter)"],
            mono: ["var(--font-roboto-mono)"],
         },
         spacing: {
            "size-space": "var(--size-space)",
            "logo-space": "var(--logo-space)",
            "nav-size": "var(--nav-size)",
         },
         height: {
            "nav-height": "var(--nav-height)",
         },
         screens: {
            sm: "641px",
            // => @media (min-width: 640px) { ... }

            md: "769px",
            // => @media (min-width: 768px) { ... }

            lg: "1025px",
            // => @media (min-width: 1024px) { ... }

            xl: "1441px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1537px",
            // => @media (min-width: 1536px) { ... }
         },
      },
   },
   plugins: [],
};
