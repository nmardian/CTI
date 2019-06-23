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

class aa_kmeans extends React.Component {
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
				<i>k</i>-means Clustering
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				<i>k</i>-means clustering was applied to the UnderAttack suspicious internet events data set.  This analytical approach
				was selected in order to determine similarities in the detected events as these similarities could point to common actors
				creating these evetns.  Assuming common actors were able to be discovered, common countermeasures could then be applied against them.
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				<i>k</i>-means clustering provides the U.S. Aerospace industry with relevant, timely and actionable CTI.  Clustering 
				enables industry members to identify common attack patterns used by adversaries which would lead to more accurate attribution
				of events as well as "game-plan" for future attacks that fit discovered patterns.
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

aa_kmeans.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(aa_kmeans);
