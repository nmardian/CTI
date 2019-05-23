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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
	maxWidth: 1000,
  },
  paper: {
	  display: 'inline-block',
  },
  card: {
    maxWidth: 400,
	maxHeight: 600,
  },
  media: {
    height: 400,
	width: 400,
  },
});

const theme = createMuiTheme();

class Critical_Assets extends React.Component {
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
	function createData(name, cons) {
	  id += 1;
	  return { id, name, cons,};
	}
	
	const rows = [
	  createData("Research Data", "Company loses investment in research and lead time on competitors and the U.S. loses it’s technological edge to adversaries."),
	  createData("Product Designs", "Adversaries could scrutinize design to determine weaknesses, puts warfighter / flying public at risk."),
	  createData("Test Data", "Adversaries could use performance data to determine vulnerabilities of national defense systems and business competitors could use performance data create competing business plans to capitalize on product shortcomings."),
	  createData("Production Processes", "Company loses its investment in proprietary manufacturing processes and the U.S. loses it’s technological edge to adversaries."),
	  createData("Employee PII", "Employees must spend time and energy dealing with fallout of identity theft and adversaries can use PII to target susceptible employees for coercion."),
	];

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
				Critical Assets
			  </Typography>
			  </Grid>
			  <Grid item xs={6}>
				<Typography variant="h6" align="left">
					Critical Assets of the U.S. Aerospace Industry
				</Typography>
				<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>Asset</TableCell>
						<TableCell align="left">Consequences of Breach / Loss</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.name}
						  </TableCell>
						  <TableCell align="left">{row.cons}</TableCell>
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

Critical_Assets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Critical_Assets);
