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

class Data_UAT extends React.Component {
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
	function createData(ip, country, asn, start, stop, tags) {
	  id += 1;
	  return { id, ip, country, asn, start, stop, tags };
	}
	
	const rows = [
		createData('1.193.13.79', 'China', '17785', 'Thu May 30 00:15:22 PDT 2019', 'Thu May 30 17:09:41 PDT 2019', 'botnet;ssh;common password;iot;bruteforce;'),
		createData('2.94.177.240', 'Russia', '8402', 'Thu May 30 14:21:26 PDT 2019', 'Thu May 30 14:31:24 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('2.179.89.189', 'Iran', '48159', 'Thu May 30 06:04:21 PDT 2019', 'Thu May 30 06:01:43 PDT 2019', 'common password;iot;botnet;telnet;'),
		createData('5.55.255.43', 'Greece', '3329', 'Thu May 30 19:50:36 PDT 2019', 'Thu May 30 19:47:07 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('5.166.89.59', 'Russia', '50512', 'Thu May 30 01:29:08 PDT 2019', 'Thu May 30 01:43:25 PDT 2019', 'telnet;'),
		createData('5.196.68.203', 'France', '16276', 'Thu Apr 04 15:32:29 PDT 2019', 'Fri Apr 05 11:46:41 PDT 2019', 'ssh;'),
		createData('5.196.68.203', 'France', '16276', 'Fri Mar 01 11:02:10 PST 2019', 'Tue Mar 12 10:42:22 PDT 2019', 'ssh;'),
		createData('5.196.68.203', 'France', '16276', 'Wed Mar 20 10:48:41 PDT 2019', 'Wed Mar 20 10:55:33 PDT 2019', 'ssh;'),
		createData('5.196.68.203', 'France', '16276', 'Wed Apr 10 19:34:03 PDT 2019', 'Wed Apr 10 19:42:55 PDT 2019', 'ssh;'),
		createData('5.196.68.203', 'France', '16276', 'Wed Apr 17 12:08:43 PDT 2019', 'Wed Apr 17 12:34:08 PDT 2019', 'ssh;'),
		createData('5.196.68.203', 'France', '16276', 'Thu May 30 03:33:29 PDT 2019', 'Thu May 30 03:38:19 PDT 2019', 'ssh;'),
		createData('24.103.74.180', 'United States', '12271', 'Thu May 30 06:00:00 PDT 2019', 'Thu May 30 05:59:06 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('27.71.232.58', 'Vietnam', '7552', 'Wed May 15 19:44:09 PDT 2019', 'Thu May 16 14:50:40 PDT 2019', 'ssh;'),
		createData('27.71.232.58', 'Vietnam', '7552', 'Thu May 23 09:11:16 PDT 2019', 'Fri May 24 09:01:54 PDT 2019', 'ssh;'),
		createData('27.71.232.58', 'Vietnam', '7552', 'Thu May 30 12:27:21 PDT 2019', 'Thu May 30 12:29:02 PDT 2019', 'ssh;'),
		createData('31.163.155.139', 'Russia', '35531', 'Wed May 29 06:53:52 PDT 2019', 'Thu May 30 01:48:04 PDT 2019', 'telnet;'),
		createData('31.163.168.69', 'Russia', '35531', 'Thu May 30 21:46:02 PDT 2019', 'Thu May 30 21:50:11 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('34.76.178.10', 'United States', 'None', 'Thu May 30 00:34:09 PDT 2019', 'Thu May 30 00:34:54 PDT 2019', 'ssh;'),
		createData('35.237.216.116', 'United States', 'None', 'Fri May 24 04:04:45 PDT 2019', 'Tue Jun 04 12:26:30 PDT 2019', 'unknown protocol;ssh;'),
		createData('36.83.54.207', 'Indonesia', '17974', 'Thu May 30 16:23:25 PDT 2019', 'Thu May 30 16:33:39 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('37.6.217.154', 'Greece', '25472', 'Thu May 30 03:10:04 PDT 2019', 'Thu May 30 03:19:54 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('37.49.225.32', 'Netherlands', '50673', 'Wed May 08 05:18:00 PDT 2019', 'Thu May 09 08:05:12 PDT 2019', 'unknown protocol;'),
		createData('37.49.225.32', 'Netherlands', '50673', 'Fri May 17 11:00:58 PDT 2019', 'Sun Jun 02 13:07:10 PDT 2019', 'telnet;botnet;common password;iot;'),
		createData('37.187.193.19', 'France', '16276', 'Mon Apr 01 19:18:41 PDT 2019', 'Mon Apr 01 19:23:47 PDT 2019', 'ssh;'),
		createData('37.187.193.19', 'France', '16276', 'Tue Mar 05 16:41:08 PST 2019', 'Tue Mar 19 14:07:33 PDT 2019', 'ssh;'),
		createData('37.187.193.19', 'France', '16276', 'Tue Mar 26 03:46:40 PDT 2019', 'Tue Mar 26 03:34:06 PDT 2019', 'ssh;'),
		createData('37.187.193.19', 'France', '16276', 'Mon Apr 08 17:21:07 PDT 2019', 'Fri Apr 12 21:53:46 PDT 2019', 'ssh;'),
		createData('37.187.193.19', 'France', '16276', 'Mon Apr 22 20:00:09 PDT 2019', 'Wed Apr 24 07:25:39 PDT 2019', 'ssh;'),
		createData('37.187.193.19', 'France', '16276', 'Tue Apr 30 09:20:05 PDT 2019', 'Wed Jun 05 18:49:22 PDT 2019', 'unknown protocol;ssh;'),
		createData('37.189.158.91', 'Portugal', '3243', 'Sat May 25 12:54:52 PDT 2019', 'Thu Jun 06 09:53:06 PDT 2019', 'ssh;'),
		createData('39.105.109.78', 'China', 'None', 'Thu May 23 11:53:13 PDT 2019', 'Thu May 30 13:30:33 PDT 2019', 'ssh;'),
		createData('39.106.23.128', 'China', 'None', 'Fri Mar 08 10:47:10 PST 2019', 'Fri Mar 08 10:38:13 PST 2019', 'ssh;'),
		createData('39.106.23.128', 'China', 'None', 'Thu May 30 22:34:56 PDT 2019', 'Thu May 30 22:41:45 PDT 2019', 'telnet;'),
		createData('40.124.4.131', 'United States', '8075', 'Mon Mar 04 18:56:31 PST 2019', 'Thu Mar 07 05:42:14 PST 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Mon Apr 01 22:38:56 PDT 2019', 'Mon Apr 01 22:38:02 PDT 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Mon Apr 08 18:11:40 PDT 2019', 'Mon Apr 08 18:11:14 PDT 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Wed Mar 13 12:16:11 PDT 2019', 'Tue Mar 19 01:19:34 PDT 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Wed Apr 17 17:49:03 PDT 2019', 'Sat Apr 20 14:45:13 PDT 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Mon May 06 22:57:04 PDT 2019', 'Tue May 14 01:00:35 PDT 2019', 'ssh;'),
		createData('40.124.4.131', 'United States', '8075', 'Fri May 24 04:58:29 PDT 2019', 'Tue Jun 04 05:33:43 PDT 2019', 'ssh;unknown protocol;'),
		createData('41.39.79.160', 'Egypt', '8452', 'Wed Apr 10 14:25:35 PDT 2019', 'Wed Apr 10 14:17:03 PDT 2019', 'ssh;'),
		createData('41.39.79.160', 'Egypt', '8452', 'Thu May 30 12:18:27 PDT 2019', 'Thu May 30 12:21:35 PDT 2019', 'ssh;'),
		createData('42.114.13.106', 'Vietnam', '18403', 'Thu May 30 12:12:35 PDT 2019', 'Thu May 30 12:24:01 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('45.28.140.219', 'United States', '7018', 'Tue Apr 23 10:29:55 PDT 2019', 'Wed Apr 24 17:42:46 PDT 2019', 'ssh;'),
		createData('45.28.140.219', 'United States', '7018', 'Thu May 23 08:48:56 PDT 2019', 'Thu May 30 19:08:53 PDT 2019', 'ssh;'),
		createData('45.55.41.15', 'United States', '393406', 'Thu May 30 04:28:14 PDT 2019', 'Fri May 31 11:32:18 PDT 2019', 'botnet;iot;common password;telnet;'),
		createData('45.221.10.12', 'Uganda', 'None', 'Thu May 30 11:20:09 PDT 2019', 'Thu May 30 11:17:43 PDT 2019', 'telnet;common password;iot;botnet;'),
		createData('46.21.108.43', 'Sweden', '43948', 'Thu May 23 13:48:11 PDT 2019', 'Mon Jun 03 13:20:13 PDT 2019', 'ssh;unknown protocol;'),
		createData('46.101.211.229', 'Germany', '201229', 'Mon May 13 22:47:11 PDT 2019', 'Mon May 13 22:47:11 PDT 2019', 'telnet;'),
		createData('46.101.211.229', 'Germany', '201229', 'Wed May 22 18:32:40 PDT 2019', 'Wed May 22 18:32:40 PDT 2019', 'telnet;'),
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
						UnderAttack.today Events
					</Typography>
					<Table className={classes.table}>
					<TableHead>
					  <TableRow>
						<TableCell>IP</TableCell>
						<TableCell align="left">Country</TableCell>
						<TableCell align="left">ASN</TableCell>
						<TableCell align="left">Start</TableCell>
						<TableCell align="left">End</TableCell>
						<TableCell align="left">Tags</TableCell>
					  </TableRow>
					</TableHead>
					<TableBody>
					  {rows.map(row => (
						<TableRow key={row.id}>
						  <TableCell component="th" scope="row">
							{row.ip}
						  </TableCell>
						  <TableCell align="left">{row.country}</TableCell>
						  <TableCell align="left">{row.asn}</TableCell>
						  <TableCell align="left">{row.start}</TableCell>
						  <TableCell align="left">{row.stop}</TableCell>
						  <TableCell align="left">{row.tags}</TableCell>
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

Data_UAT.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Data_UAT);
