export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  gradients: {
    top: {
      darkBg:
        'linear-gradient(to  left top,#282828,#212121,#1a1a1a,#131313,#0a0a0a)',
      lightBg:
        'linear-gradient(to left top,#e3e3e3,#dedede,#e5e5e5,#ececec,#f5f5f5)',
      blueBg:
        'linear-gradient(to right top,#1616C8,#2626D8,#3636E8,#4646F8,#5656FF)'
    },
    bottom: {
      darkBg:
        'linear-gradient(to  left bottom,#282828,#212121,#1a1a1a,#131313,#0a0a0a)',
      lightBg:
        'linear-gradient(to left bottom,#e3e3e3,#dedede,#e5e5e5,#ececec,#f5f5f5)',
      blueBg:
        'linear-gradient(to right bottom,#1616C8,#2626D8,#3636E8,#4646F8,#5656FF)'
    }
  },
  colors: {
    primary: '#e6bc53',
    secondary: '#1616C8',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#8F8F8F',
    gray: '#616168',
    darkGray: '#2E2F42',
    red: '#FF6347'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
