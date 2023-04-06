import React from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
const RightFooter = () => {
	return (
		<Stack gap={1}>
			<Typography variant='h5' fontWeight={500}>
				ติดต่อฝ่ายขาย
			</Typography>
			<Typography variant='h6' fontWeight={300}>
				โทร 099-108-1667
			</Typography>
			<Typography variant='h6' fontWeight={300}>
				อีเมล teerapan.j@imapasia.com
			</Typography>
			<Typography variant='h6' fontWeight={300}>
				เวลาทำการ ทุกวัน 09.00-20.00 น.
			</Typography>
			<br />
			<Typography variant='h5' fontWeight={500}>
				ที่อยู่
			</Typography>
			<Typography variant='h6' fontWeight={300}>
				99/75 หมู่ 5 ต.ไทรม้า อ.เมือง จ.นนทบุรี 11000
			</Typography>
		</Stack>
	);
};

export default RightFooter;
