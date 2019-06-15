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
  paper: {
	  display: 'inline-block',
  },
});

const theme = createMuiTheme();

class ds_uat extends React.Component {
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
	
	let id = 0;
	function createData(name, attr, ttp) {
	  id += 1;
	  return { id, name, attr, ttp };
	}

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
					UnderAttack
				</Typography>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Background:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				https://portal.underattack.today/
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				UnderAttack today is a free intelligence feed of recent suspicious events ocurring on the internet.
				The feed relevant to the U.S. Aerospace industry as industry members need to know what events are occuring on the internet
				in order to protect their networks from them.  The feed is updated daily and can be used to create IP blacklists and DNS sinkholes
				to protect industry memebers' networks and systems from attack and data exfiltration.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				A complete list of events can be requested for the previous day.  Approximately 200 events occur per day.
				Each event lists:
				<ListItem>
					<ListItemText primary=" Indicator – IP where event originates"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Country – Geographic location of the IP"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" ASN – Autonomous system to which the IP belongs"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Start – Timestamp of event start"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" End – Timestamp of event end"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Tags – Information about the event (ex: ssh, telnet, IoT, Botnet etc)"/>
				</ListItem>
			  </Typography>
			   <Typography variant="h4" align="left" paragraph="true">
				Why was this source selected?
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Diamond models 2, 4, 6, 8 and 10 deal with APTs exfiltrating data from a target system using common protocols. 
				These events will enable industry members to track what protocols are being used from suspicous IPs in order to 
				block those protocols from those IPs.  Further, the IPs can be used in IP reputation analysis and event correlation analysis.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data Collection
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Daily:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				The previous day's list of suspicious IPs are requested from the web portal.  These IPs are appended to a master list of
				IPs, with duplicates being removed.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Weekly:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				A script is run that iterates over the collected IPs, requesting the events associated with the IPs.  These events are written out to a CSV.
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

ds_uat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ds_uat);
