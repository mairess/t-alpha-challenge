/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-neutral-0': '#101214',
        'dark-neutral-50': '#161A1D',
        'dark-neutral-100': '#1D2125',
        'dark-neutral-200': '#22272B',
        'dark-neutral-250': '#282E33',
        'dark-neutral-300': '#2C333A',
        'dark-neutral-350': '#38414A',
        'dark-neutral-400': '#454F59',
        'dark-neutral-500': '#596773',
        'dark-neutral-600': '#738496',
        'dark-neutral-700': '#8C9BAB',
        'dark-neutral-800': '#9FADBC',
        'dark-neutral-900': '#B6C2CF',
        'dark-neutral-1000': '#C7D1DB',
        'dark-neutral-1100': '#DEE4EA',
        'light-neutral-0': '#FFFFFF',
        'light-neutral-100': '#F7F8F9',
        'light-neutral-200': '#F1F2F4',
        'light-neutral-300': '#DCDFE4',
        'light-neutral-400': '#B3B9C4',
        'light-neutral-500': '#8590A2',
        'light-neutral-600': '#758195',
        'light-neutral-700': '#626F86',
        'light-neutral-800': '#44546F',
        'light-neutral-900': '#2C3E5D',
        'light-neutral-1000': '#172B4D',
        'light-neutral-1100': '#091E42',
        primary: {
          light: '#626F86',
          dark: '#454F59'
        },
        secondary: {
          light: '#8590A2',
          dark: '#738496'
        },
        background: {
          light: '#FFFFFF',
          dark: '#C7D1DB'
        },
        surface: {
          light: '#F7F8F9',
          dark: '#101214'
        },
        text: {
          primary: {
            light: '#2C3E5D',
            dark: '#8C9BAB'
          },
          secondary: {
            light: '#757575',
            dark: '#B6C2CF'
          }
        },
        button: {
          primary: {
            background: {
              light: '#8590A2',
              dark: '#596773'
            },
            text: {
              light: '#FFFFFF',
              dark: '#000000'
            },
            hover: {
              light: '#6B7A92',
              dark: '#4A5A6B'
            }
          },
          secondary: {
            background: {
              light: '#8590A2',
              dark: '#596773'
            },
            text: {
              light: '#000000',
              dark: '#000000'
            },
            hover: {
              light: '#6B7A92',
              dark: '#4A5A6B'
            },
            selected: {
              light: '#3F4A5E',
              dark: '#2C3B44'
            }
          }
        },
        border: {
          light: '#B3B9C4',
          dark: '#738496'
        },
        input: {
          background: {
            light: '#FFFFFF',
            dark: '#2C333A'
          },
          text: {
            light: '#000000',
            dark: '#FFFFFF'
          },
          border: {
            light: '#B3B9C4',
            dark: '#738496'
          },
          hover: {
            light: '#2C333A',
            dark: '#C0C6CC'
          }
        },
        link: {
          light: '#2C3E5D',
          dark: '#8C9BAB'
        },
        error: {
          light: '#B00020',
          dark: '#CF6679'
        },
        warning: {
          light: '#FFB300',
          dark: '#FFC107'
        },
        success: {
          light: '#388E3C',
          dark: '#4CAF50'
        }
      }
    }
  },
  plugins: []
};


