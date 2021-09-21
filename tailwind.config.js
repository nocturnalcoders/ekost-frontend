module.exports = {
    theme: {
      extend: {
        boxShadow: {
          outline: '0 0 0 1px rgba(66, 153, 225, 0.5)',
        },
        colors: {
          'orange-button': '#FF872E',
          'green-button': '#1ABC9C',
          'purple-hover': '#00BEF8',
          'purple-hover-stroke': '#8286FF',
          'purple-progress': '#66a5ad',
        },
        borderRadius: {
          20: '20px',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    variants: {},
    plugins: [],
    purge: {
      content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`,
      ],
    },
  }
  