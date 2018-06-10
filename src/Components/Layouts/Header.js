import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

export default props => (
	<AppBar position="static" color='secondary'>
		<Toolbar>
			<Typography variant="headline" color='inherit'>
				SPC DevApps
			</Typography>
		</Toolbar>
	</AppBar>
);

