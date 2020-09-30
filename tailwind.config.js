const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        mode: 'all',
        content: ['./src/**/*.{js,jsx}'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            minWidth: {
                72: '18rem',
            },
        },
        container: {
            center: true,
        },
    },
    experimental: {
        applyComplexClasses: true,
        uniformColorPalette: true,
        extendedSpacingScale: true,
        defaultLineHeights: true,
        extendedFontSizeScale: true,
    },
    variants: {},
    plugins: [],
}
