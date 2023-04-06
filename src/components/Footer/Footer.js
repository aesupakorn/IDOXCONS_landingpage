import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';


const Footer = () => {
	return (
		<>
			<Stack
				p={10}
				px={20}
				bgcolor={'#404041'}
				color='white'
				direction={'row'}
				justifyContent='space-between'
			>
				<LeftFooter/>



				<RightFooter/>
			</Stack>

			{/* <Box component='img' sx={{}} alt='Footer' src={'img/footer.png'}></Box> */}
		</>
	);
};

export default Footer;
