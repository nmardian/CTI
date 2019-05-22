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

class Threat_Trends extends React.Component {
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
	
	const rows = [
	  createData('APT40', "China", "Spear-phishing, Malware"),
	  createData('APT33', "Iran", "Spear-phishing, Malware"),
	  createData('APT28', "Russian Govt.", "Malware"),
	  createData('APT18', "China", "Zero-day, Malware"),
	  createData('APT12', "China", "Phishing, Malware"),
	  createData('APT10', "China", "Spear-phishing, Malware"),
	  createData('APT3', "China", "Phishing, Malware"),
	  createData('APT1', "China PLA", "Spear-phishing, Backdoors, Malware"),
	];

    return (
      <div className={classes.root}>
		<Header />
			<Typography variant="h1">
				U.S. Aerospace Industry
			</Typography>
			<Grid
				container
				spacing={16}
				direction="column"
				alignItems="left"
				justify="center"
				style={{minHeight: '75vh' }}
				>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Threat Trends
			  </Typography>
			  <Typography variant="h6" align="left" paragraphy="true">
				APTs
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Advanced Persistent Threat (APT) groups are and will continue to be a major threat source for the industry.  APTs are often either
				tied directly to or are working on behalf of nation states.  They often seek to erode the U.S. technological edge through stealing 
				technical information from the U.S. Aerospace Industry.
			  </Typography>
			  </Grid>
			  <Grid item xs={6}>
				<Typography variant="h6" align="left">
					APTs Targeting the U.S. Aerospace Industry
				</Typography>
				<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>APT</TableCell>
						<TableCell align="left">Attribution</TableCell>
						<TableCell align="left">TTPs</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.name}
						  </TableCell>
						  <TableCell align="left">{row.attr}</TableCell>
						  <TableCell align="left">{row.ttp}</TableCell>
						</TableRow>
					  ))}
					</TableBody>
				  </Table>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h6" align="left" paragraphy="true">
				Insider Threat
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Additionally, the industry has come under increasing attack from insiders.  A 2018 survey performed by Cybersecurity Insiders 
				found that 53% of companies had experienced an attack from within twelve months.  Asked about insider threat programs, Doug Thomas,
				the Director of Counterintelligence for industry member Lockheed Martin has this to say:
			  </Typography>
			  <Typography variant="body2" align="left" paragraph="true">
				"Quite frankly, I don’t understand how a company or government agency can afford not to have a program like this,
				 because the threat is so pervasive"
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

Threat_Trends.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Threat_Trends);
