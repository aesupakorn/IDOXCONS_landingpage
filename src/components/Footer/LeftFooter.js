import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
const LeftFooter = () => {
  return (
    <Stack direction={'column'} gap={2}>
					<Stack gap={1}>
						<Typography variant='h6' fontWeight={500}>
							ติดต่อส่วนกลาง
						</Typography>
						<Typography variant='h6' fontWeight={300}>
							โทร 02-9218683 , 061-7461221 , 061-0819366
						</Typography>
						<Typography variant='h6' fontWeight={300}>
							อีเมล admin@imapasia.com
						</Typography>
						<Typography variant='h6' fontWeight={300}>
							เวลาทำการ จันทร์ - เสาร์ 08.00-17.00 น.
						</Typography>
					</Stack>
					<Stack direction={'row'} gap={2}>
						<Stack
							direction={'column'}
							justifyContent='center'
							alignItems='center'
							gap={1}
						>
							<Typography variant='h6' fontWeight={400}>
								Line @idoxcons
							</Typography>
							<Box
								component='img'
								alt='Idoxcons Logo'
								src={'img/lineadd.png'}
							></Box>
						</Stack>
						<Stack direction={'column'} gap={1}>
							<Typography variant='h6' fontWeight={400}>
								Social Media
							</Typography>
							<Stack direction={'row'} justifyContent='center' gap={0}>
								<IconButton component='label'>
									<YouTubeIcon
										fontSize='large'
										sx={{
											color: 'white',
											bgcolor: 'red',
											height: 40,
											width: 40,
											borderRadius: '4px',
										}}
									/>
								</IconButton>
								<IconButton component='label'>
									<FacebookIcon
										fontSize='large'
										sx={{
											color: 'white',
											bgcolor: '#1877F2',
											height: 40,
											width: 40,
											borderRadius: '4px',
										}}
									/>
								</IconButton>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
  )
}

export default LeftFooter