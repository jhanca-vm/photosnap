import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(27deg, #ffc593, #bc7198 43%, #5A77ff 83%)'
      },
      flexBasis: {
        min: 'min-content'
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)']
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
        '5xl': ['2.5rem', '3rem']
      },
      letterSpacing: {
        wider: '0.1em',
        widest: '0.1666666em'
      },
      maxWidth: {
        '6xl': '69.375rem'
      },
      spacing: {
        18: '4.5rem',
        152: '38rem'
      }
    }
  }
}

export default config
