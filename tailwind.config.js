/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // https://www.freepik.com/free-photo/top-view-globe-world-map_13358650.htm#fromView=search&page=1&position=22&uuid=11e98997-aa0b-4102-b708-b8ed040bd705
        "hero-img": "linear-gradient(to right bottom, rgba(15, 15, 15, 0.9), rgba(15, 15, 15, 0.3)), url('/images/maps-globe.jpg')"
      },
      colors: {
        // Salmon Main Color
        "main-100": "#F6FBFD",
        "main-200": "#EDF7FC",
        "main-300": "#E1EEF6",
        "main-400": "#D5E2EE",
        "main-500": "#C3D3E3",
        "main-600": "#8EA6C3",
        "main-700": "#627CA3",
        "main-800": "#3E5683",
        "main-900": "#253A6C",

        // Neutral Color
        "neutral-100": "#F4F4F4",
        "neutral-200": "#EAEAEA",
        "neutral-300": "#C1C1C1",
        "neutral-400": "#848484",
        "neutral-500": "#333333",
        "neutral-600": "#2B2525",
        "neutral-700": "#24191B",
        "neutral-800": "#1D1013",
        "neutral-900": "#18090E",

        // Success Color
        "success-100": "#CDFDD6",
        "success-200": "#9BFCB7",
        "success-300": "#69F8A0",
        "success-400": "#43F297",
        "success-500": "#09EA8C",
        "success-600": "#06C98B",
        "success-700": "#04A884",
        "success-800": "#028777",
        "success-900": "#01706E",

        // Warning Color
        "warning-100": "#FFFDD9",
        "warning-200": "#FFFAB3",
        "warning-300": "#FFF78D",
        "warning-400": "#FFF471",
        "warning-500": "#FFEF42",
        "warning-600": "#DBCB30",
        "warning-700": "#B7A821",
        "warning-800": "#938515",
        "warning-900": "#7A6D0C",

        // Info Color
        "info-100": "#D9FDFF",
        "info-200": "#B3F7FF",
        "info-300": "#8DEBFF",
        "info-400": "#71DDFF",
        "info-500": "#42C6FF",
        "info-600": "#309CDB",
        "info-700": "#2176B7",
        "info-800": "#155493",
        "info-900": "#0C3B7A",

        // Danger Color
        "danger-100": "#FFE6DF",
        "danger-200": "#FFC8C0",
        "danger-300": "#FFA5A1",
        "danger-400": "#FF8A90",
        "danger-500": "#FF637A",
        "danger-600": "#DB486B",
        "danger-700": "#B7315E",
        "danger-800": "#931F51",
        "danger-900": "#7A1348",
      },
    },
  },
  plugins: [],
}

