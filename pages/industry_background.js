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
    paddingTop: theme.spacing.unit * 0,
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

class Industry_Background extends React.Component {
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
	function createData(name, rev) {
	  id += 1;
	  return { id, name, rev };
	}
	
	const rows = [
	  createData('The Boeing Company', "$93.4"),
	  createData('United Technologies', "$59.8"),
	  createData('Lockheed Martin', "$51"),
	  createData('Honeywell International, Inc', "$40.5"),
	  createData('General Dynamics Corp', "$31"),
	];

    return (
      <div className={classes.root}>
		<Header />
			<Grid
				container
				spacing={8}
				direction="column"
				alignItems="left"
				justify="center"
				style={{minHeight: '75vh' }}
				>
				<Grid item xs={6}>
					<Typography variant="h2">
					U.S. Aerospace Industry
					</Typography>
				</Grid>
				<Grid item xs={6}>
				<Typography variant="h4" align="left" paragraph="true">
						Background
				</Typography>
				<Typography variant="body" align="left" paragraph = "true">
					The U.S. Aerospace Industry is the largest aerospace industry in the world today.  It reported $872 billion in sales revenue in 2016
					and was responsible for $146 billion and $143 billion in exports for 2016 and 2017 respectively.
				</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h6" align="left">
						Key services and products provided by the U.S. Aerospace Industry include:
					</Typography>
					<Typography variant="body" align="left" paragraph="true">
						<ListItem>
							<ListItemText primary=" - General Aviation"/>
						</ListItem>
						<ListItem>
							<ListItemText primary=" - Military Aircraft"/>
						</ListItem>
						<ListItem>
							<ListItemText primary=" - Space"/>
						</ListItem>
						<ListItem>
							<ListItemText primary=" - Commercial Airliners"/>
						</ListItem>
						<ListItem>
							<ListItemText primary=" - Missiles"/>
						</ListItem>
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="h6" align="left">
						The five largest Aerospace firms based on revenue are:
					</Typography>
					<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>Company</TableCell>
						<TableCell align="left">Revenue (in billions)</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.name}
						  </TableCell>
						  <TableCell align="left">{row.rev}</TableCell>
						</TableRow>
					  ))}
					</TableBody>
				  </Table>
			  </Grid>
			  <Grid item xs={12}>
				<Footer />
			  </Grid>
		  </Grid>
      </div>
    );
  }
}

Industry_Background.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Industry_Background);
