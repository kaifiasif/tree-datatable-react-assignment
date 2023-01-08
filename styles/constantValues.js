export const defaultEasings = {
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}

export const defaultFonts = {
  monaco: 'monaco, sans-serif',
  primaryFontFamily: 'proxima-nova, sans-serif'
}

export const defaultSwatch = {
  blue: {
    100: '#f8fafc',
    200: '#d0e5ff',
    400: '#2297f0',
    500: '#1a91eb',
    600: '#1584d7',
    700: '#2184cf',
    800: '#0c73c1',
    900: '#196baa',

    A200: '#7f8fa4'
  },
  green: {
    100: '#66b92e',
    200: '#1bb934',
    300: '#45b854',
    400: '#34aa44',
    500: '#1e9d09',
    600: '#1e930b',
    700: '#187a08',
    800: '#1a740b',
    900: '#0e7940',

    A100: '#2fcc66',
    A200: '#0057b8'
  },
  grey: {
    100: '#e6eaee',
    200: '#f5f8fa',
    300: '#f2f4f7',
    400: '#dfe3e9',
    500: '#b7c0cd',
    600: '#8d98a9',
    700: '#7f8fa4',
    800: '#5b6779',
    900: '#353c48',

    A100: '#fbfcfc',
    A200: '#eff3f6',
    A300: '#ced0da',
    A400: '#c5d0de',
    A500: '#c2cad4',
    A600: '#a1a7af',
    A700: '#a8aab7',
    A800: '#848C98',
    A900: '#959595',

    B100: '#586C86',
    B500: '#dfe2e5',
    B600: '#F1F4F8'
  },
  indigo: {
    200: '#337bbf',
    300: '#3073b5',
    400: '#34659f',
    500: '#354052',
    600: '#373f52',
    700: '#2B2F41',
    800: '#222c3c'
  },
  purple: '#7E00B9',
  red: {
    100: '#f2dede',
    500: '#ed1c24',
    700: '#cf2a2a',
    900: '#a52a2a'
  },
  teal: {
    500: '#018989',
    700: '#1c3e4b'
  },
  yellow: {
    100: '#fff3cd',
    400: '#F6C342',
    800: '#967b19'
  },
  black: '#000',
  white: '#fff',
  orange: '#f79722'
}

export const defaultPalette = {
  code: {
    background: '#f6f8fa',
    primary: '#d73a49'
  },
  main: {
    primary: defaultSwatch.blue.A200
  },
  text: {
    primary: defaultSwatch.indigo[500],
    light: '#fff'
  },
  border: {
    primary: defaultSwatch.grey[100],
    primaryDark: defaultSwatch.grey[400]
  },
  background: {
    light: '#fff',
    dark: defaultSwatch.indigo[800],
    input: defaultSwatch.grey[300]
  },
  icon: {
    primary: defaultSwatch.grey.A600,
    secondary: defaultSwatch.grey.A400
  },

  success: defaultSwatch.green[200],
  error: defaultSwatch.red[500],
  overlay: 'rgba(19, 24, 32, 0.8)'
}
