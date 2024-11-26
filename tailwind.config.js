/** @type {import('tailwindcss').Config} */
// const { Mode } = require('@mui/icons-material');
// const { theme } = require('@mui/material/styles');
const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  // presets: [],
  // darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        76: "4.75rem", // Adjust this to the value you want for h-76
      },
      // colors: {
      //   primary: theme.palette.primary.main,
      //   secondary: theme.palette.secondary.main,
      // },
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      print: { raw: "print" },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow, 
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6', // blue-500 as the primary color
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      // Define base theme colors
      default: {
        primary: "#6366f1",
        secondary: "#a855f7",
      },
      brand: { 
        primary: "#3b82f6",
        secondary: "#0ea5e9"
		 },
      teal: { 
        primary: "#14b8a6", 
        secondary: "#0d9488" 
      },
      rose: { 
        primary: "#f43f5e", 
        secondary: "#db2777" 
      },
      purple: { 
        primary: "#8b5cf6", 
        secondary: "#7c3aed" 
      },
      amber: { 
        primary: "#f59e0b",
         secondary: "#f97316" 
        },
    },
    // colors: {
    // 	transparent: 'transparent',
    // 	current: 'currentColor',
    // 	black: '#22292F',
    // 	white: '#fff',
    // 	grey: {
    // 		50: '#FAFAFA',
    // 		100: '#F5F5F5',
    // 		200: '#EEEEEE',
    // 		300: '#E0E0E0',
    // 		400: '#BDBDBD',
    // 		500: '#9E9E9E',
    // 		DEFAULT: '#9E9E9E',
    // 		600: '#757575',
    // 		700: '#616161',
    // 		800: '#424242',
    // 		900: '#212121',
    // 		A100: '#D5D5D5',
    // 		A200: '#AAAAAA',
    // 		A400: '#303030',
    // 		A700: '#616161'
    // 	},
    // 	gray: {
    // 		50: '#FAFAFA',
    // 		100: '#F5F5F5',
    // 		200: '#EEEEEE',
    // 		300: '#E0E0E0',
    // 		400: '#BDBDBD',
    // 		500: '#9E9E9E',
    // 		DEFAULT: '#9E9E9E',
    // 		600: '#757575',
    // 		700: '#616161',
    // 		800: '#424242',
    // 		900: '#212121',
    // 		A100: '#D5D5D5',
    // 		A200: '#AAAAAA',
    // 		A400: '#303030',
    // 		A700: '#616161'
    // 	},
    // 	red: {
    // 		50: '#FFEBEE',
    // 		100: '#FFCDD2',
    // 		200: '#EF9A9A',
    // 		300: '#E57373',
    // 		400: '#EF5350',
    // 		500: '#F44336',
    // 		DEFAULT: '#F44336',
    // 		600: '#E53935',
    // 		700: '#D32F2F',
    // 		800: '#C62828',
    // 		900: '#B71C1C',
    // 		A100: '#FF8A80',
    // 		A200: '#FF5252',
    // 		A400: '#FF1744',
    // 		A700: '#D50000'
    // 	},
    // 	orange: {
    // 		50: '#FFF3E0',
    // 		100: '#FFE0B2',
    // 		200: '#FFCC80',
    // 		300: '#FFB74D',
    // 		400: '#FFA726',
    // 		500: '#FF9800',
    // 		DEFAULT: '#FF9800',
    // 		600: '#FB8C00',
    // 		700: '#F57C00',
    // 		800: '#EF6C00',
    // 		900: '#E65100',
    // 		A100: '#FFD180',
    // 		A200: '#FFAB40',
    // 		A400: '#FF9100',
    // 		A700: '#FF6D00'
    // 	},
    // 	'deep-orange': {
    // 		50: '#FBE9E7',
    // 		100: '#FFCCBC',
    // 		200: '#FFAB91',
    // 		300: '#FF8A65',
    // 		400: '#FF7043',
    // 		500: '#FF5722',
    // 		DEFAULT: '#FF5722',
    // 		600: '#F4511E',
    // 		700: '#E64A19',
    // 		800: '#D84315',
    // 		900: '#BF360C',
    // 		A100: '#FF9E80',
    // 		A200: '#FF6E40',
    // 		A400: '#FF3D00',
    // 		A700: '#DD2C00'
    // 	},
    // 	yellow: {
    // 		50: '#FFFDE7',
    // 		100: '#FFF9C4',
    // 		200: '#FFF59D',
    // 		300: '#FFF176',
    // 		400: '#FFEE58',
    // 		500: '#FFEB3B',
    // 		DEFAULT: '#FFEB3B',
    // 		600: '#FDD835',
    // 		700: '#FBC02D',
    // 		800: '#F9A825',
    // 		900: '#F57F17',
    // 		A100: '#FFFF8D',
    // 		A200: '#FFFF00',
    // 		A400: '#FFEA00',
    // 		A700: '#FFD600'
    // 	},
    // 	green: {
    // 		50: '#E8F5E9',
    // 		100: '#C8E6C9',
    // 		200: '#A5D6A7',
    // 		300: '#81C784',
    // 		400: '#66BB6A',
    // 		500: '#4CAF50',
    // 		DEFAULT: '#4CAF50',
    // 		600: '#43A047',
    // 		700: '#388E3C',
    // 		800: '#2E7D32',
    // 		900: '#1B5E20',
    // 		A100: '#B9F6CA',
    // 		A200: '#69F0AE',
    // 		A400: '#00E676',
    // 		A700: '#00C853'
    // 	},
    // 	'light-green': {
    // 		50: '#F1F8E9',
    // 		100: '#DCEDC8',
    // 		200: '#C5E1A5',
    // 		300: '#AED581',
    // 		400: '#9CCC65',
    // 		500: '#8BC34A',
    // 		DEFAULT: '#8BC34A',
    // 		600: '#7CB342',
    // 		700: '#689F38',
    // 		800: '#558B2F',
    // 		900: '#33691E',
    // 		A100: '#CCFF90',
    // 		A200: '#B2FF59',
    // 		A400: '#76FF03',
    // 		A700: '#64DD17'
    // 	},
    // 	teal: {
    // 		50: '#E0F2F1',
    // 		100: '#B2DFDB',
    // 		200: '#80CBC4',
    // 		300: '#4DB6AC',
    // 		400: '#26A69A',
    // 		500: '#009688',
    // 		DEFAULT: '#009688',
    // 		600: '#00897B',
    // 		700: '#00796B',
    // 		800: '#00695C',
    // 		900: '#004D40',
    // 		A100: '#A7FFEB',
    // 		A200: '#64FFDA',
    // 		A400: '#1DE9B6',
    // 		A700: '#00BFA5'
    // 	},
    // 	blue: {
    // 		50: '#E3F2FD',
    // 		100: '#BBDEFB',
    // 		200: '#90CAF9',
    // 		300: '#64B5F6',
    // 		400: '#42A5F5',
    // 		500: '#2196F3',
    // 		DEFAULT: '#2196F3',
    // 		600: '#1E88E5',
    // 		700: '#1976D2',
    // 		800: '#1565C0',
    // 		900: '#0D47A1',
    // 		A100: '#82B1FF',
    // 		A200: '#448AFF',
    // 		A400: '#2979FF',
    // 		A700: '#2962FF'
    // 	},
    // 	'light-blue': {
    // 		50: '#E1F5FE',
    // 		100: '#B3E5FC',
    // 		200: '#81D4FA',
    // 		300: '#4FC3F7',
    // 		400: '#29B6F6',
    // 		500: '#03A9F4',
    // 		DEFAULT: '#03A9F4',
    // 		600: '#039BE5',
    // 		700: '#0288D1',
    // 		800: '#0277BD',
    // 		900: '#01579B',
    // 		A100: '#80D8FF',
    // 		A200: '#40C4FF',
    // 		A400: '#00B0FF',
    // 		A700: '#0091EA'
    // 	},
    // 	indigo: {
    // 		50: '#E8EAF6',
    // 		100: '#C5CAE9',
    // 		200: '#9FA8DA',
    // 		300: '#7986CB',
    // 		400: '#5C6BC0',
    // 		500: '#3F51B5',
    // 		DEFAULT: '#3F51B5',
    // 		600: '#3949AB',
    // 		700: '#303F9F',
    // 		800: '#283593',
    // 		900: '#1A237E',
    // 		A100: '#8C9EFF',
    // 		A200: '#536DFE',
    // 		A400: '#3D5AFE',
    // 		A700: '#304FFE'
    // 	},
    // 	purple: {
    // 		50: '#F3E5F5',
    // 		100: '#E1BEE7',
    // 		200: '#CE93D8',
    // 		300: '#BA68C8',
    // 		400: '#AB47BC',
    // 		500: '#9C27B0',
    // 		DEFAULT: '#9C27B0',
    // 		600: '#8E24AA',
    // 		700: '#7B1FA2',
    // 		800: '#6A1B9A',
    // 		900: '#4A148C',
    // 		A100: '#EA80FC',
    // 		A200: '#E040FB',
    // 		A400: '#D500F9',
    // 		A700: '#AA00FF'
    // 	},
    // 	'deep-purple': {
    // 		50: '#EDE7F6',
    // 		100: '#D1C4E9',
    // 		200: '#B39DDB',
    // 		300: '#9575CD',
    // 		400: '#7E57C2',
    // 		500: '#673AB7',
    // 		DEFAULT: '#673AB7',
    // 		600: '#5E35B1',
    // 		700: '#512DA8',
    // 		800: '#4527A0',
    // 		900: '#311B92',
    // 		A100: '#B388FF',
    // 		A200: '#7C4DFF',
    // 		A400: '#651FFF',
    // 		A700: '#6200EA'
    // 	},
    // 	pink: {
    // 		50: '#FCE4EC',
    // 		100: '#F8BBD0',
    // 		200: '#F48FB1',
    // 		300: '#F06292',
    // 		400: '#EC407A',
    // 		500: '#E91E63',
    // 		DEFAULT: '#E91E63',
    // 		600: '#D81B60',
    // 		700: '#C2185B',
    // 		800: '#AD1457',
    // 		900: '#880E4F',
    // 		A100: '#FF80AB',
    // 		A200: '#FF4081',
    // 		A400: '#F50057',
    // 		A700: '#C51162'
    // 	},
    // 	lime: {
    // 		50: '#F9FBE7',
    // 		100: '#F0F4C3',
    // 		200: '#E6EE9C',
    // 		300: '#DCE775',
    // 		400: '#D4E157',
    // 		500: '#CDDC39',
    // 		DEFAULT: '#CDDC39',
    // 		600: '#C0CA33',
    // 		700: '#AFB42B',
    // 		800: '#9E9D24',
    // 		900: '#827717',
    // 		A100: '#F4FF81',
    // 		A200: '#EEFF41',
    // 		A400: '#C6FF00',
    // 		A700: '#AEEA00'
    // 	},
    // 	amber: {
    // 		50: '#FFF8E1',
    // 		100: '#FFECB3',
    // 		200: '#FFE082',
    // 		300: '#FFD54F',
    // 		400: '#FFCA28',
    // 		500: '#FFC107',
    // 		DEFAULT: '#FFC107',
    // 		600: '#FFB300',
    // 		700: '#FFA000',
    // 		800: '#FF8F00',
    // 		900: '#FF6F00',
    // 		A100: '#FFE57F',
    // 		A200: '#FFD740',
    // 		A400: '#FFC400',
    // 		A700: '#FFAB00'
    // 	},
    // 	brown: {
    // 		50: '#EFEBE9',
    // 		100: '#D7CCC8',
    // 		200: '#BCAAA4',
    // 		300: '#A1887F',
    // 		400: '#8D6E63',
    // 		500: '#795548',
    // 		DEFAULT: '#795548',
    // 		600: '#6D4C41',
    // 		700: '#5D4037',
    // 		800: '#4E342E',
    // 		900: '#3E2723',
    // 		A100: '#D7CCC8',
    // 		A200: '#BCAAA4',
    // 		A400: '#8D6E63',
    // 		A700: '#5D4037'
    // 	},
    // 	'blue-gray': {
    // 		50: '#ECEFF1',
    // 		100: '#CFD8DC',
    // 		200: '#B0BEC5',
    // 		300: '#90A4AE',
    // 		400: '#78909C',
    // 		500: '#607D8B',
    // 		DEFAULT: '#607D8B',
    // 		600: '#546E7A',
    // 		700: '#455A64',
    // 		800: '#37474F',
    // 		900: '#263238',
    // 		A100: '#CFD8DC',
    // 		A200: '#B0BEC5',
    // 		A400: '#78909C',
    // 		A700: '#455A64'
    // 	},
    // 	cyan: {
    // 		50: '#E0F7FA',
    // 		100: '#B2EBF2',
    // 		200: '#80DEEA',
    // 		300: '#4DD0E1',
    // 		400: '#26C6DA',
    // 		500: '#00BCD4',
    // 		DEFAULT: '#00BCD4',
    // 		600: '#00ACC1',
    // 		700: '#0097A7',
    // 		800: '#00838F',
    // 		900: '#006064',
    // 		A100: '#84FFFF',
    // 		A200: '#18FFFF',
    // 		A400: '#00E5FF',
    // 		A700: '#00B8D4'
    // 	}
    // },

    // backgroundColor: theme => theme('colors'),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--gradient-color-stops))",
      "gradient-to-tr":
        "linear-gradient(to top right, var(--gradient-color-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--gradient-color-stops))",
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--gradient-color-stops))",
      "gradient-to-b":
        "linear-gradient(to bottom, var(--gradient-color-stops))",
      "gradient-to-bl":
        "linear-gradient(to bottom left, var(--gradient-color-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--gradient-color-stops))",
      "gradient-to-tl":
        "linear-gradient(to top left, var(--gradient-color-stops))",
    },
    fill: {
      current: "currentColor",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontFamily: {
      sans: ['"Inter var"', "Roboto", "Helvetica", "Arial", "sans-serif"],
      // sans: [
      // 	'Muli',
      // 	'Roboto',
      // 	'-apple-system',
      // 	'BlinkMacSystemFont',
      // 	'"Segoe UI"',
      // 	'Roboto',
      // 	'"Helvetica Neue"',
      // 	'Arial',
      // 	'"Noto Sans"',
      // 	'sans-serif',
      // 	'"Apple Color Emoji"',
      // 	'"Segoe UI Emoji"',
      // 	'"Segoe UI Symbol"',
      // 	'"Noto Color Emoji"'
      // ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: ["Consolas", '"Liberation Mono"', "Menlo", "Courier", "monospace"],
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  // variants: {
  // 	accessibility: ['responsive', 'focus-within', 'focus'],
  // 	alignContent: ['responsive'],
  // 	alignItems: ['responsive'],
  // 	alignSelf: ['responsive'],
  // 	animation: ['responsive'],
  // 	appearance: ['responsive'],
  // 	backgroundAttachment: ['responsive'],
  // 	backgroundClip: ['responsive'],
  // 	backgroundColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	backgroundImage: ['responsive'],
  // 	backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	backgroundPosition: ['responsive'],
  // 	backgroundRepeat: ['responsive'],
  // 	backgroundSize: ['responsive'],
  // 	borderCollapse: ['responsive'],
  // 	borderColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	borderOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	borderRadius: ['responsive'],
  // 	borderStyle: ['responsive'],
  // 	borderWidth: ['responsive'],
  // 	boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	boxSizing: ['responsive'],
  // 	clear: ['responsive'],
  // 	container: ['responsive'],
  // 	cursor: ['responsive'],
  // 	display: ['responsive', 'hover', 'focus'],
  // 	divideColor: ['responsive'],
  // 	divideOpacity: ['responsive'],
  // 	divideStyle: ['responsive'],
  // 	divideWidth: ['responsive'],
  // 	fill: ['responsive'],
  // 	flex: ['responsive'],
  // 	flexDirection: ['responsive'],
  // 	flexGrow: ['responsive'],
  // 	flexShrink: ['responsive'],
  // 	flexWrap: ['responsive'],
  // 	float: ['responsive', 'direction'],
  // 	fontFamily: ['responsive'],
  // 	fontSize: ['responsive'],
  // 	fontSmoothing: ['responsive'],
  // 	fontStyle: ['responsive', 'hover', 'focus'],
  // 	fontVariantNumeric: ['responsive'],
  // 	fontWeight: ['responsive', 'hover', 'focus'],
  // 	gap: ['responsive'],
  // 	gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
  // 	gridAutoColumns: ['responsive'],
  // 	gridAutoFlow: ['responsive'],
  // 	gridAutoRows: ['responsive'],
  // 	gridColumn: ['responsive'],
  // 	gridColumnEnd: ['responsive'],
  // 	gridColumnStart: ['responsive'],
  // 	gridRow: ['responsive'],
  // 	gridRowEnd: ['responsive'],
  // 	gridRowStart: ['responsive'],
  // 	gridTemplateColumns: ['responsive'],
  // 	gridTemplateRows: ['responsive'],
  // 	height: ['responsive'],
  // 	inset: ['responsive', 'direction'],
  // 	justifyContent: ['responsive'],
  // 	justifyItems: ['responsive'],
  // 	justifySelf: ['responsive'],
  // 	letterSpacing: ['responsive'],
  // 	lineHeight: ['responsive'],
  // 	listStylePosition: ['responsive'],
  // 	listStyleType: ['responsive'],
  // 	margin: ['responsive', 'direction'],
  // 	maxHeight: ['responsive'],
  // 	maxWidth: ['responsive'],
  // 	minHeight: ['responsive'],
  // 	minWidth: ['responsive'],
  // 	objectFit: ['responsive'],
  // 	objectPosition: ['responsive'],
  // 	opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	order: ['responsive'],
  // 	outline: ['responsive', 'focus-within', 'focus'],
  // 	overflow: ['responsive'],
  // 	overscrollBehavior: ['responsive'],
  // 	padding: ['responsive', 'direction'],
  // 	placeContent: ['responsive'],
  // 	placeItems: ['responsive'],
  // 	placeSelf: ['responsive'],
  // 	placeholderColor: ['responsive', 'focus'],
  // 	placeholderOpacity: ['responsive', 'focus'],
  // 	pointerEvents: ['responsive'],
  // 	position: ['responsive'],
  // 	resize: ['responsive'],
  // 	ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
  // 	ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
  // 	ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
  // 	ringOpacity: ['responsive', 'focus-within', 'focus'],
  // 	ringWidth: ['responsive', 'focus-within', 'focus'],
  // 	rotate: ['responsive', 'hover', 'focus'],
  // 	scale: ['responsive', 'hover', 'focus'],
  // 	skew: ['responsive', 'hover', 'focus'],
  // 	space: ['responsive'],
  // 	stroke: ['responsive'],
  // 	strokeWidth: ['responsive'],
  // 	tableLayout: ['responsive'],
  // 	textAlign: ['responsive', 'direction'],
  // 	textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	textOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
  // 	textOverflow: ['responsive'],
  // 	textTransform: ['responsive'],
  // 	transform: ['responsive'],
  // 	transformOrigin: ['responsive'],
  // 	transitionDelay: ['responsive'],
  // 	transitionDuration: ['responsive'],
  // 	transitionProperty: ['responsive'],
  // 	transitionTimingFunction: ['responsive'],
  // 	translate: ['responsive', 'hover', 'focus'],
  // 	userSelect: ['responsive'],
  // 	verticalAlign: ['responsive'],
  // 	visibility: ['responsive'],
  // 	whitespace: ['responsive'],
  // 	width: ['responsive'],
  // 	wordBreak: ['responsive'],
  // 	zIndex: ['responsive', 'focus-within', 'focus']
  // },
  plugins: [],
};
