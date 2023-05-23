import {
	Box,
	Button,
	
	Paper,
	Stack,
	styled,
	Typography,
	Link,
} from '@mui/material';

import React from 'react';

import CheckIcon from '@mui/icons-material/Check';

import { useTranslation } from 'react-i18next';

const TextTypography = styled(Typography)({
	color: '#FFFFFF',
});
const VidBand = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<Paper
			elevation={0}
			sx={{
				height: '',
				backgroundColor: '#599FDF',
				borderRadius: '0px',
				width: '100%',
				p: '2rem',
				mt: '10vh',
			}}
			id="about-us"
		>
			<Stack
				justifyContent='center'
				alignItems='center'
				sx={{
					backgroundColor: '',
					height: 'max-content',
					width: '100%',
					margin: 'auto',
					flexDirection: { mobile: 'column', tablet: 'row' },
					gap: { mobile: 3, laptop: 10 },
				}}
			>
				<Stack
					direction='column'
					// justifyContent="space-between"
					alignItems='s'
					gap={4}
				>
					<Typography variant='h6' color='#FFFFFF'>
						{t('VidBand.SuggestionHead')}
					</Typography>
					<Stack gap={2}>
						<TextTypography variant='h5' fontWeight={500}>
							{t('VidBand.SuggestionTitle')}
						</TextTypography>
						<Box fontWeight='300' color='#FFFFFF'>
							<ul style={{ listStyleType: 'none' }}>
								{t('VidBand.SuggestionChoice', { returnObjects: true }).map(
									(element, index) => {
										return (
											<li key={index}>
												<CheckIcon /> {element}
											</li>
										);
									}
								)}
							</ul>
						</Box>
					</Stack>

					<Button variant='contained' color='primary' size='large'>
						<Link href='https://www.youtube.com/watch?v=iNgCyiKJVN0'>
							<Typography color={'white'}>{t('VidBand.Watch')}</Typography>
						</Link>
					</Button>
				</Stack>

				<Box>
					<Box
						sx={{
							width: 'max-content',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Box
							component='img'
							sx={{
								height: { mobile: '100vw', tablet: '50vw', laptop: '30vw' },
								margin: 'auto',

								borderRadius: '10px',
							}}
							alt='Idoxcons Logo'
							src={'img/Cover.png'}
						></Box>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
};

export default VidBand;
