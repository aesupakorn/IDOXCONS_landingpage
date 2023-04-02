import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Container,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import { QAInfo } from '../utils/QAInfo';

import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const QA = () => {
	return (
		<Container sx={{ height: '50vh' }} >
			<Toolbar
				sx={{
					bgcolor: '#036566',
					color: 'white',
					justifyContent: 'center',
				}}
			>
				<Typography variant='h5'> คำถามที่พบบ่อย</Typography>
			</Toolbar>
			{QAInfo.map((element, index) => {
				return (
					<Accordion sx={{ borderRadius: '0px !important' }} key={element.Q}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'
						>
							<Typography fontWeight={500} fontSize={18}>
								{element.Q}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>{element.A}</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</Container>
	);
};

export default QA;
