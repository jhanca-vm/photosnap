import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)']
      },
      letterSpacing: {
        widest: '0.1666666em'
      },
      maxWidth: {
        '6xl': '69.375rem'
      }
    }
  }
}

export default config
