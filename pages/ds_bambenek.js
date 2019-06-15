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

class ds_bambenek extends React.Component {
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
					Bambenek Consulting C&C Server List
				</Typography>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Background:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				http://osint.bambenekconsulting.com/feeds/c2-ipmasterlist.txt
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				The Bambenek Consulting C&C Server List is a free list of malware command and control servers.
				The feed relevant to the U.S. Aerospace industry as industry members should be informed of what malware 
				is currently at large and arm them with the ability to cut off any infections from their command and control servers.
				The feed is updated every ten minutes and can be used to create IP blacklists and DNS sinkholes
				to protect industry memebers' networks and systems from attack and data exfiltration.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				A complete list of C&C servers can be requested every day.  
				Approximately 1500 servers have been collected.
				Each event lists:
				<ListItem>
					<ListItemText primary=" IP address of the C&C server"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Specific malware that communicates with the server"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Time/Date of the detection"/>
				</ListItem>
			  </Typography>
			   <Typography variant="h4" align="left" paragraph="true">
				Why was this source selected?
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Diamond models 2, 4, 6, 8 and 10 detail APT controlled malware exfiltrating data from a target system.  
				The APTs' malware communicates with the C&C servers listed in this feed and having this list will enable 
				industry members to cut infected machines off from their command servers to prevent the malware from operating 
				and exfiltrating data.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data Collection
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Daily:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				The server list is downloaded from the Bambenek Consulting website.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Weekly:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				A script is run that iterates over the collected servers, removes duplicates and writes the master list out to CSV.
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

ds_bambenek.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ds_bambenek);
