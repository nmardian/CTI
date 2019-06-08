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
	maxWidth: 1000,
  },
  paper: {
	  display: 'inline-block',
  },
});

const theme = createMuiTheme();

class Data_Bambenek extends React.Component {
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
	function createData(ip, date, malware) {
	  id += 1;
	  return { id, ip, date, malware };
	}
	
	const rows = [
		createData('5.79.79.209', '2019-06-01 20:03', 'banjori'),
		createData('23.105.99.15', '2019-06-01 20:03', 'banjori'),
		createData('23.107.124.53', '2019-06-01 20:03', 'banjori'),
		createData('23.110.13.197', '2019-06-01 20:03', 'banjori'),
		createData('23.236.62.147', '2019-06-01 20:03', 'banjori'),
		createData('23.89.102.179', '2019-06-01 20:03', 'banjori'),
		createData('23.89.20.107', '2019-06-01 20:03', 'banjori'),
		createData('27.124.28.149', '2019-06-01 20:03', 'banjori'),
		createData('31.11.33.228', '2019-06-01 20:03', 'banjori'),
		createData('35.169.58.188', '2019-06-01 20:03', 'banjori'),
		createData('43.230.142.125', '2019-06-01 20:03', 'banjori'),
		createData('43.241.196.105', '2019-06-01 20:03', 'banjori'),
		createData('47.105.216.140', '2019-06-01 20:03', 'banjori'),
		createData('52.58.78.16', '2019-06-01 20:03', 'banjori'),
		createData('54.208.77.124', '2019-06-01 20:03', 'banjori'),
		createData('54.72.11.253', '2019-06-01 20:03', 'banjori'),
		createData('62.149.142.219', '2019-06-01 20:03', 'banjori'),
		createData('62.4.17.220', '2019-06-01 20:03', 'banjori'),
		createData('64.95.103.187', '2019-06-01 20:03', 'banjori'),
		createData('67.229.184.183', '2019-06-01 20:03', 'banjori'),
		createData('74.208.236.219', '2019-06-01 20:03', 'banjori'),
		createData('74.220.199.8', '2019-06-01 20:03', 'banjori'),
		createData('74.220.207.152', '2019-06-01 20:03', 'banjori'),
		createData('78.24.9.52', '2019-06-01 20:03', 'banjori'),
		createData('78.46.156.194', '2019-06-01 20:03', 'banjori'),
		createData('81.169.145.159', '2019-06-01 20:03', 'banjori'),
		createData('81.169.145.160', '2019-06-01 20:03', 'banjori'),
		createData('81.169.145.88', '2019-06-01 20:03', 'banjori'),
		createData('83.137.194.79', '2019-06-01 20:03', 'banjori'),
		createData('85.158.203.201', '2019-06-01 20:03', 'banjori'),
		createData('89.188.24.70', '2019-06-01 20:03', 'banjori'),
		createData('89.35.39.50', '2019-06-01 20:03', 'banjori'),
		createData('91.195.240.87', '2019-06-01 20:03', 'banjori'),
		createData('91.195.240.94', '2019-06-01 20:03', 'banjori'),
		createData('92.53.96.22', '2019-06-01 20:03', 'banjori'),
		createData('96.30.52.60', '2019-06-01 20:03', 'banjori'),
		createData('103.70.226.182', '2019-06-01 20:03', 'banjori'),
		createData('103.71.236.189', '2019-06-01 20:03', 'banjori'),
		createData('104.171.24.25', '2019-06-01 20:03', 'banjori'),
		createData('104.171.24.26', '2019-06-01 20:03', 'banjori'),
		createData('104.18.56.87', '2019-06-01 20:03', 'banjori'),
		createData('104.18.57.87', '2019-06-01 20:03', 'banjori'),
		createData('104.192.84.85', '2019-06-01 20:03', 'banjori'),
		createData('107.158.31.120', '2019-06-01 20:03', 'banjori'),
		createData('107.175.239.2', '2019-06-01 20:03', 'banjori'),
		createData('107.180.20.91', '2019-06-01 20:03', 'banjori'),
		createData('108.187.67.6', '2019-06-01 20:03', 'banjori'),
		createData('108.59.12.99', '2019-06-01 20:03', 'banjori'),
		createData('109.70.4.246', '2019-06-01 20:03', 'banjori'),
		createData('109.71.51.55', '2019-06-01 20:03', 'banjori'),
	];

    return (
      <div className={classes.root}>
		<Header />
			<Grid
				container
				spacing={8}
				direction="row"
				alignItems="center"
				justify="center"
				style={{minHeight: '75vh' }}
				>
				<Grid item xs={12}>
					<Typography variant="h6" align="left">
						Bambenek Consulting Malware C&C Servers
					</Typography>
					<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>IP</TableCell>
						<TableCell align="left">Date</TableCell>
						<TableCell align="left">Malware</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.ip}
						  </TableCell>
						  <TableCell align="left">{row.date}</TableCell>
						  <TableCell align="left">{row.malware}</TableCell>
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

Data_Bambenek.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Data_Bambenek);
