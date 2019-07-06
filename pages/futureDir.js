/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Footer from './footer';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: 0,
	paddingLeft: 0,
	paddingRight: 0,
  },
  table: {
    minWidth: 200,
	maxWidth: 500,
  },
  paper: {
	  display: 'inline-block',
  },
});

const theme = createMuiTheme();

class futureDir extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
		<Header />
			<Grid
				container
				spacing={16}
				direction="column"
				alignItems="left"
				justify="center"
				style={{minHeight: '75vh' }}
				>
			  <Grid item xs={6}>
			  <Typography variant="h2" align="left" paragraph="true">
				Future Directions
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Integrate real-time network traffic analysis
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Real-time network traffic analysis would allow industry members to identify anomalous network events.  These events could then be scrutinized 
				in order to determine if they are tied to malware attempting to exfiltrate data off the network.  This platform currently relies on UnderAttack
				suspicious events, but these events are taking place on the Internet at large and are not specific to industry members' networks.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Create a “Need to Share” portal for industry members to share intelligence amongst themselves
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Industry members are targeted by the same adversaries / APTs.  Sharing information amongst industry members would help to ensure adversary TTPs are 
				known and defended agaisnt across the industry.  A portal for industry members would be built in order to allow members to share the TTPs witnessed.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Automate collection and analysis
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Currently, the scripts to collect data for this platform, as well as the clustering, malware analysis and IP reputation analysis, are run by hand. 
				These processes can all be automated and the results automatically pushed to the platform so updates can be seen in real time.  This will allow for a 
				more dashboard-like experience instead of the static experience that exists now.
			  </Typography>
			  </Grid>
			  <Grid item xs={12}>
				<Footer />
			  </Grid>
		  </Grid>
      </div>
    );
  }
}

futureDir.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(futureDir);
