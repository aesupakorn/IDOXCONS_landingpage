import { Box } from '@mui/material';
import React from 'react';

const RightContent = () => {
	return (
		<Box width='60%' sx={{position:'relative',display:{mobile:'none',laptop:'block'}}}>
			<Box
				component='img'
				sx={{
					position: 'relative',
                    top:"-50px",
					height: {laptop:'420px',desktop:'600px',},
					zIndex: 2,

				}}
				alt='Idoxcons Logo'
				src={'img/introduce.png'}
			></Box>
		</Box>
	);
};

export default RightContent;
