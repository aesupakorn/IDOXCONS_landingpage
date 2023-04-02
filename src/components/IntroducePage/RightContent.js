import { Box } from '@mui/material';
import React from 'react';

const RightContent = () => {
	return (
		<Box width='60%' sx={{position:'relative'}}>
			<Box
				component='img'
				sx={{
					position: 'relative',
                    top:"-50px",
					height: 600,
					zIndex: 2,
				}}
				alt='Idoxcons Logo'
				src={'img/introduce.png'}
			></Box>
		</Box>
	);
};

export default RightContent;
