const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      keyframes: {
        jump: {
          '0%': { transform: 'translateY(0.2em)', opacity: '0' },
          '50%': { transform: 'translateY(-0.2em)' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        jump: 'jump 0.5s ease-out forwards'
      }
    },
  },

  plugins: [],
};

module.exports = config;
