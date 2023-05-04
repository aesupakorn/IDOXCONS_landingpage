import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';


const Footer = () => {
	return (
		<>
			<Stack
				p={10}
				px={2}
				bgcolor={'#404041'}
				color='white'

				justifyContent='space-around'

				sx={{flexWrap:'wrap',flexDirection:{mobile:"column",laptop:"row"},alignItems:{mobile:'center',laptop:"start"}}}
				gap={3}

			>
				<LeftFooter/>



				<RightFooter/>
			</Stack>


		</>
	);
};

export default Footer;
