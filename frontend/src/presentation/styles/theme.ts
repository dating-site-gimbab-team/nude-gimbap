export const surface = {
  lowest: '#FBFCFE',
  low: '#F1F4F8',
  middle: '#E4E7ED',
  high: '#D7DCE4',
  deem: 'rgba(0, 0, 0, 0.40)',
  base: '#F1F2F7',
} as const;

export const border = {
  default: '#DCE0E7',
  pressed: '#BBC1C8',
} as const;

export const colors = {
  neutral: {
    0: '#FFF',
    1: '#F2F4F8',
    2: '#DDE1E6',
    3: '#C1C7CD',
    4: '#A2A9B0',
    5: '#878D96',
    6: '#697077',
    7: '#4D5358',
    8: '#343A3F',
    9: '#21272A',
    10: '#080E11',
  },
  primary: {
    1: '#F7EAFB',
    2: '#EBC0F4',
    3: '#DEA8F0',
    4: '#D193EC',
    5: '#C482E9',
    6: '#B876E5',
    7: '#8859C1',
    8: '#6B4B9A',
    9: '#6B4B9A',
    10: '#1F172B',
  },
  secondary: {
    1: '#F6F6F8',
    2: '#ECEDF4',
    3: '#D7D8E2',
    4: '#B5B7CA',
    5: '#898DA4',
    6: '#565E76',
    7: '#2D384D',
    8: '#1D232F',
    9: '#0C0F13',
  },
  info: {
    1: '#F6F9FF',
    2: '#C7DEFF',
    3: '#98C3FF',
    4: '#6DAAFF',
    5: '#4290FF',
    6: '#1677FF',
    7: '#0958d9',
    8: '#0B428F',
    9: '#06295B',
    10: '#011025 ',
  },
  success: {
    1: '#F8FCF6',
    2: '#D5F0C8',
    3: '#B3E49A',
    4: '#92DA6F',
    5: '#72CF45',
    6: '#52C41A',
    7: '#3F9613',
    8: '#2D6D0E',
    9: '#1C4408',
    10: '#0B1B03',
  },
  warning: {
    1: '#FEFBF6',
    2: '#FDEBC6',
    3: '#FCDA98',
    4: '#FBCB6C',
    5: '#FABC40',
    6: '#FAAD14',
    7: '#C0850E',
    8: '#8C600A',
    9: '#593D05',
    10: '#241800',
  },
  error: {
    1: '#FEF6F7',
    2: '#FCCACC',
    3: '#FA9DA2',
    4: '#F8747B',
    5: '#F64B54',
    6: '#F5222D',
    7: '#BD1921',
    8: '#891117',
    9: '#57090D',
    10: '#240103',
  },
  github: '#1F2329',
  support: {
    sproutGreen: {
      1: '#E2F3B6',
      2: '#D7EC82',
      3: '#4E7D40',
      4: '#233D1B',
    },
    cherishPink: {
      1: '#FDE0E0',
      2: '#FA9DB3',
      3: '#D25873',
      4: '#6C1625',
    },
    livelyOrange: {
      1: '#FDE8BD',
      2: '#FCBF81',
      3: '#E9821A',
      4: '#6A3804',
    },
    brightYellow: {
      1: '#FDF4A5',
      2: '#FFDF6F',
      3: '#DAAA00',
      4: '#8B5700',
    },
    royalBlue: {
      1: '#EDECFD',
      2: '#6683F4',
      3: '#3453CF',
      4: '#10263F',
    },
  },
} as const;

export const token = {
  background: {
    lowest: surface.lowest,
    low: surface.low,
    middle: surface.middle,
    high: surface.high,
    deem: surface.deem,
  },
  border: {
    low: colors.neutral[1],
    middle: colors.neutral[2],
    high: colors.neutral[3],
  },
  text: {
    primary: colors.neutral[10],
    secondary: colors.neutral[9],
    placeholder: colors.neutral[5],
    onColorLight: colors.neutral[10],
    onColorDark: colors.neutral[0],
    helper: colors.neutral[6],
    error: colors.error[6],
    info: colors.info[6],
    success: colors.success[6],
    warning: colors.warning[6],
    disabled: colors.neutral[6],
  },
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
} as const;

export const fontSize = {
  xxxs: 8,
  xxs: 10,
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  max: 48,
  maxPlus: 60,
  giant: 96,
} as const;

// NOTE: 문자열 보간 (string interpolation)으로 type 안정성 확보
export const typo = {
  titleMedium: {
    fontWeight: fontWeight.medium,
    fontSize: fontSize.xxxl,
  },
} as const;

export const breakPoints = {
  // https://webflow.com/blog/3-new-larger-breakpoints-in-webflow 기준
  desktopL: '1920px',
  desktopM: '1440px',
  desktopS: '1280px',
  tablet: '991px',
  mobileLandscape: '767px', // Landscape 모드
  mobileL: '412px', // Landscape 모드
  mobileM: '390px', // Portrait 모드
  mobileS: '375px', // iPhone Mini 와 같은 작은 디바이스
} as const;

export const defaultTheme = {
  surface,
  border,
  colors,
  token,
  fontWeight,
  fontSize,
  typo,
  breakPoints,
};
