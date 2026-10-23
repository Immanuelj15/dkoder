export const tokens = {
  ink: '#17181A',
  cream: '#FFFAF0',
  creamLight: '#FFFDF8',
  yellow: '#FCC827',
  yellowBrand: '#FCC419',
  purple: '#4E25A5',
  purpleDark: '#401E87',
  purpleDeep: '#1E0D47',
  purpleDeeper: '#150934',
  muted: '#5F6060',
  border: '#DAD4C8',
  charcoal: '#383530',
  brown: '#68635B',
  gray: '#585858',
  goldDark: '#6E5F36',
  goldAccent: '#9B7522',
  yellowSubtle: '#FFF8E6',
  yellowSoft: '#FFF8E3',
  creamBorder: '#E5DDCD',
  creamDark: '#DED9CC',
  yellowTint: '#FFF1B6',
  beige: '#EBE5D6',
  goldDeep: '#746018',
  yellowLight: '#FFF0BD',
  stone: '#E8E3D9',
  sand: '#F6EDD5',
  taupe: '#786E56',
  stoneLight: '#D0CBC0',
  carbon: '#292929',
  palette: {
    6: '#FFF8E8',
    7: '#F7E6AD',
    8: '#FFFDF8',
    9: '#F0EDDF',
    10: '#FCC827',
    11: '#FFFAF0'
  },
  fonts: {
    heading: "'Space Grotesk', system-ui, sans-serif",
    body: "'DM Sans', system-ui, sans-serif",
    brand: "'Bricolage Grotesque', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace"
  },
  brutalShadow: (color = '#17181A', offset = 10) => `${offset}px ${offset}px 0px ${color}`
};

export const brutalShadow = tokens.brutalShadow;
