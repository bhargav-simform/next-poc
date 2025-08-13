/* eslint-disable */
interface ColorValues {
  primary: string
  'primary-bg': string
  'primary-100': string
  'primary-border': string
  white: string
  black: string
  'neutral-50': string
  'neutral-60': string
  'neutral-70': string
  'neutral-80': string
  'neutral-100': string
  'neutral-200': string
  'neutral-300': string
  'neutral-400': string
  'neutral-500': string
  'neutral-600': string
  'primary-hover': string
  'border-color': string
  'lime-green': string
  'brown-100': string
  'brown-200': string
  'gray-50': string
  'gray-100': string
  'gray-150': string
  'black-100': string
  'gray-85': string
  'col-nonbillh': string
  'col-billh': string
  'col-totalh': string
  'gray-241': string
  'gray-112': string
  'gray-248': string
  'blue-21': string
  'blue-border': string
  'gray-204': string
  'gray-90': string
  'gray-142': string
  'gray-230': string
  'gray-138': string
  'dark-green': string
  'gray-102': string
  'light-turquoise': string
  turquoise: string
  'light-red': string
  'dark-red': string
  'notify-success': string
  // ==== ==== ==== Stauts Colors ==== ==== ==== //
  'dark-turquoise': string
  'mustard-yellow': string
  'sea-serpant': string
  'royal-orange': string
  'super-pink': string
  'dark-lemon-lime': string
  deer: string
  'dark-tangerine': string
  verdigris: string
  tulip: string
  emrald: string
  'electric-blue': string
  'blue-green': string
  'picton-blue': string
  'rose-pink': string
  'pale-taupe': string
  'brilliant-azure': string
  'bright-lavender': string
  peru: string
  'pewter-blue': string
  'pastel-red': string
  'light-yellow': string
  // ==== ==== ==== ==== ==== ==== ==== ==== ==== //
  'settings-sider': string
  'gray-77': string
  'gray-70': string
  'gray-247': string
}

export const themes: Record<'default' | 'dark', ColorValues> = {
  default: {
    primary: '255, 100, 0',
    'primary-100': '247,249,251',
    'primary-bg': '255,244,239',
    'primary-border': '227,230,235',
    white: '255, 255, 255',
    black: '27, 29, 31',
    'neutral-50': '255, 255, 255',
    'neutral-60': '250, 250, 250',
    'neutral-70': '245, 245, 245',
    'neutral-80': '250, 252, 253',
    'neutral-100': '238, 238, 238',
    'neutral-200': '198, 200, 203',
    'neutral-300': '157, 162, 167',
    'neutral-400': '114, 120, 128',
    'neutral-500': '27, 29, 31',
    'neutral-600': '32, 33, 35',
    'primary-hover': '255, 247, 243',
    'border-color': '235, 235, 235',
    'brown-100': '29, 21, 18',
    'brown-200': '55, 48, 45',
    'gray-50': '236, 238, 239',
    'gray-100': '238, 240, 244',
    'gray-150': '242, 242, 242',
    'black-100': '0, 0, 0',
    'gray-85': '85, 85, 85',
    'col-nonbillh': '250, 173, 81',
    'col-billh': '58, 204, 230',
    'col-totalh': '53, 143, 255',
    'gray-241': '241, 241, 241',
    'gray-112': '112, 112, 112',
    'gray-248': '248, 248, 248',
    'blue-21': '21, 154, 255',
    'blue-border': '59, 153, 252',
    'gray-204': '204, 204, 204',
    'gray-90': '90, 183, 254',
    'gray-142': '142, 142, 142',
    'gray-230': '230, 230, 230',
    'gray-138': '138, 138, 138',
    'dark-green': '27, 139, 79',
    'gray-102': '102, 102, 102',
    'light-turquoise': '178, 235, 243',
    turquoise: '0, 173, 227',
    'light-red': '255, 233, 233',
    'dark-red': '249, 106, 101',
    'notify-success': '53, 197, 119',
    // ==== ==== ==== Stauts Colors ==== ==== ==== //
    'dark-turquoise': '13, 211, 211',
    'mustard-yellow': '226, 185, 16',
    'sea-serpant': '97, 191, 193',
    'royal-orange': '242, 136, 64',
    'super-pink': '211, 89, 170',
    'dark-lemon-lime': '131, 183, 39',
    deer: '181, 138, 97',
    'dark-tangerine': '255, 172, 20',
    verdigris: '72, 183, 180',
    tulip: '247, 139, 132',
    emrald: '87, 192, 101',
    'electric-blue': '1, 142, 205',
    'blue-green': '9, 149, 186',
    'lime-green': '116, 203, 128',
    'picton-blue': '51, 197, 242',
    'rose-pink': '255, 101, 203',
    'pale-taupe': '183, 157, 125',
    'brilliant-azure': '59, 146, 255',
    'bright-lavender': '186, 131, 242',
    peru: '211, 133, 74',
    'pewter-blue': '153, 168, 189',
    'pastel-red': '245, 107, 98',
    'light-yellow': '254, 247, 227',
    // ==== ==== ==== ==== ==== ==== ==== ==== ==== //
    'settings-sider': '247,247,247',
    'gray-77': '77, 77, 79',
    'gray-70': '70, 70, 70',
    'gray-247': '247, 247, 247'
  },
  dark: {
    primary: '255, 100, 0',
    'primary-bg': '255,244,239',
    'primary-100': '247,249,251',
    'primary-border': '227,230,235',
    white: '255, 255, 255',
    black: '27, 29, 31',
    'neutral-50': '23, 27, 33',
    'neutral-60': '30, 34, 40',
    'neutral-70': '40, 44, 48',
    'neutral-80': '250, 252, 253',
    'neutral-100': '46, 49, 51',
    'neutral-200': '62, 64, 67',
    'neutral-300': '85, 88, 90',
    'neutral-400': '137, 143, 150',
    'neutral-500': '255, 255, 255',
    'neutral-600': '32, 33, 35',
    'primary-hover': '255, 247, 243',
    'border-color': '235, 235, 235',
    'brown-100': '29, 21, 18',
    'brown-200': '56, 49, 46',
    'gray-50': '236, 238, 239',
    'gray-100': '238, 240, 244',
    'gray-150': '242, 242, 242',
    'black-100': '0, 0, 0',
    'gray-85': '85, 85, 85',
    'col-nonbillh': '250, 173, 81',
    'col-billh': '58, 204, 230',
    'col-totalh': '53, 143, 255',
    'gray-241': '241, 241, 241',
    'gray-112': '112, 112, 112',
    'gray-248': '248, 248, 248',
    'blue-21': '21, 154, 255',
    'blue-border': '59, 153, 252',
    'gray-204': '204, 204, 204',
    'gray-90': '90, 183, 254',
    'gray-142': '142, 142, 142',
    'gray-230': '230, 230, 230',
    'gray-138': '138, 138, 138',
    'dark-green': '27, 139, 79',
    'lime-green': '116, 203, 128',
    'gray-102': '102, 102, 102',
    'light-turquoise': '178, 235, 243',
    turquoise: '0, 173, 227',
    'light-red': '255, 233, 233',
    'dark-red': '249, 106, 101',
    'notify-success': '53, 197, 119',
    // ==== ==== ==== Stauts Colors ==== ==== ==== //
    'dark-turquoise': '13, 211, 211',
    'mustard-yellow': '226, 185, 16',
    'sea-serpant': '97, 191, 193',
    'royal-orange': '242, 136, 64',
    'super-pink': '211, 89, 170',
    'dark-lemon-lime': '131, 183, 39',
    deer: '181, 138, 97',
    'dark-tangerine': '255, 172, 20',
    verdigris: '72, 183, 180',
    tulip: '247, 139, 132',
    emrald: '87, 192, 101',
    'electric-blue': '1, 142, 205',
    'blue-green': '9, 149, 186',
    'picton-blue': '51, 197, 242',
    'rose-pink': '255, 101, 203',
    'pale-taupe': '183, 157, 125',
    'brilliant-azure': '59, 146, 255',
    'bright-lavender': '186, 131, 242',
    peru: '211, 133, 74',
    'pewter-blue': '153, 168, 189',
    'pastel-red': '245, 107, 98',
    'light-yellow': '254, 247, 227',
    // ==== ==== ==== ==== ==== ==== ==== ==== ==== //
    'settings-sider': '247,247,247',
    'gray-77': '77, 77, 79',
    'gray-70': '70, 70, 70',
    'gray-247': '247, 247, 247'
  }
}

export const breakpoints = {
  xs: '(max-width: 439px)',
  sm: '(max-width: 575px)',
  md: '(max-width: 767px)',
  lg: '(max-width: 991px)',
  xl: '(max-width: 1199px)',
  xxl: '(max-width: 1599px)'
}

export const spacingValues = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 25, 28, 32, 36, 40, 48, 60
]
export const widthValues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

export const fontSizes = [
  6, 8, 10, 12, 14, 15, 15.5, 16, 18, 20, 24, 30, 36, 48, 60
]

export const fontWeights = [300, 400, 500, 600, 700, 800, 900]

export const radiusValues = [0, 2, 4, 6, 8, 12, 16, 24, 1000]

export const displayValues = [
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'grid'
]

export const alignItemsValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'baseline'
]

export const justifyContentValues = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
]
export const flexDirectionValues = [
  'column',
  'column-reverse',
  'row',
  'row-reverse'
]

export const rem = (pxValue: number | number[]): string => {
  const ratio = 16
  if (!pxValue) {
    return ''
  }
  const pxToConvert = Array.isArray(pxValue) ? pxValue[0] : pxValue
  const parsedPxValue = parseInt((pxToConvert ?? 0).toString(), 10)
  return `${parsedPxValue / ratio}rem`
}

export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number; a: number } => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(
    shorthandRegex,
    (r: string, g: string, b: string, a: string) => {
      return r + r + g + g + b + b + a + a
    }
  )
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex
  )
  if (!result) {
    throw new Error('Invalid hex color format')
  }
  return {
    r: parseInt(result[1] ?? '0', 16),
    g: parseInt(result[2] ?? '0', 16),
    b: parseInt(result[3] ?? '0', 16),
    a: parseInt(result[4] ?? '0', 16)
  }
}

export const rgba = (hex: string, alpha: number) => {
  const rgbColor = hexToRgb(hex)
  return `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${rgbColor?.b}, ${alpha})`
}
