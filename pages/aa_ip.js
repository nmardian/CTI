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

class aa_ip extends React.Component {
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
			  <Typography variant="h4" align="left" paragraph="true">
				IP Reputation Analysis
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				IP Reputation Analysis was applied to the UnderAttack and Bambenek C&C Server data sets.  This analytical approach was selected as
				way to easily protect industry members' critical assets by blocking both inbound and outbound network access to 
				IPs with poor reputations.
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				IP Reputation Analysis provides relevant, actionable and timely CTI to the U.S. Aerospace industry by giving 
				industry members the information to protect themselves from (spear) phishing attempts and data exfiltration.  Incoming emails from 
				IPs with poor reputations as well as emails containing links to IPs with poor reputations can be blocked at the network perimeter.  
				Outgoing connections to IPs with poor reputations can be DNS sink-holed to prevent information from being exfiltrated from the network.
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

aa_ip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aa_ip);
