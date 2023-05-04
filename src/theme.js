import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
	palette: {
		primary: {
			main: '#1F9DA6',
			light: '#2eb1b3',
		},
		secondary: {
			main: '#11111',
		},
		third: {
			main: '#9EC21D',
		},
		fourth: {
			main: '#FFFFFF',
		},
	},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1380,
    },
  },

	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthLg: {
					'&.MuiContainer-maxWidthLg': {
						maxWidth: 1280,
					},
				},
			},
		},
	},
});
theme = responsiveFontSizes(theme);
export { theme };
