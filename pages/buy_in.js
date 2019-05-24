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

class Buy_In extends React.Component {
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
					Intelligence Buy-In
				</Typography>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Cost of Breaches Due to APTs
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				<ListItem>
					<ListItemText primary=" - Cyber espionage is the most expensive type of security breach."/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" - 46% of surveyed organizations reported losing “sensitive data” to a breach."/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" - Organizations pay $1.14 million per cyber espionage breach in direct and indirect costs."/>
				</ListItem>
			  </Typography>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Cost of Breaches Due to Insider Threats
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				<ListItem>
					<ListItemText primary=" - 1/3 of organizations surveyed had experienced between 1 and 5 insider attacks in the last year."/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" - 1/5 had experienced six or more."/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" - Between $100K and $500K in costs incurred per successful attack"/>
				</ListItem>
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

Buy_In.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buy_In);
