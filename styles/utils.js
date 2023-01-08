export const breakpoints = {
  xxs: 0,
  xs: 768,
  sm: 960,
  md: 1024,
  lg: 1280,
  xlg: 1480,
  xxlg: 1510
}

export const breakpointMin = size => `@media (min-width: ${breakpoints[size]}px)`

export const breakpointMax = size => `@media (max-width: ${breakpoints[size] - 1}px)`

export const breakpointBetween = (lower, upper) =>
  `@media (min-width: ${breakpoints[lower]}px) and (max-width: ${breakpoints[upper] - 1}px)`

export const placeholder = styles => ({
  '&::-webkit-input-placeholder': {
    /* Chrome/Opera/Safari */
    ...styles
  },
  '&::-moz-placeholder': {
    /* Firefox 19+ */
    ...styles
  },
  '&:-ms-input-placeholder': {
    /* IE 10+ */
    ...styles
  },
  '&:-moz-placeholder': {
    /* Firefox 18- */
    ...styles
  }
})

export const backgroundCover = () => ({
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

export const backgroundContain = () => ({
  backgroundPosition: 'center',
  backgroundSize: 'contain'
})

export const truncateText = () => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})
