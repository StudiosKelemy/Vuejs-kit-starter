// tailwind.config.js
module.exports = {
    theme: {
        extend: {},
        screens: {
            'sm': '570px',
            // => @media (min-width: 570px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 992px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }
        }
    },
    variants: {},
    plugins: []
}
