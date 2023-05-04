import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { logoName } from '../../utils/LogoInfo';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ display: 'none' }} />;
}
function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ display: 'none' }} />;
}

function Customer() {
	const [t, i18n] = useTranslation('global');

	let mobileSize = window.matchMedia('(min-width: 0px)');
	let tabletSize = window.matchMedia('(min-width: 640px)');
	let laptopSize = window.matchMedia('(min-width: 1024px)');
	let x = 0;
	if (laptopSize.matches) {
		x = 4;
	} else if (tabletSize.matches) {
		x = 3;
	} else if (mobileSize.matches) {
		x = 2;
	}
	const setting = {
		infinite: true,
		slidesToShow: x,
		// slidesToScroll:2,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 0,
		cssEase: 'linear',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<Stack direction='column' gap={4}>
			<Typography
				onClick={() => {
					console.log(x);
				}}
				variant='h5'
				color='#404041'
				sx={{ mb: { mobile: '1rem', desktop: '0px' } }}
			>
				{t("Customer.OurCustomers")}
			</Typography>
			<Slider {...setting}>
				{logoName.map((element, index) => {
					return (
						<Stack key={index}>
							<img height={140} src={'img/logoslider/' + element} />
						</Stack>
					);
				})}
			</Slider>
		</Stack>
	);
}

export default Customer;
