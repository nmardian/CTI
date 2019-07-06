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

class i_and_i extends React.Component {
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
			  <Typography variant="h2" align="left" paragraph="true">
				Insights and Intelligence
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Malware authors utilize common file and process names to allow malware to hide on an infected system
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Based on the word clouds created from MALDATABASE malware process and file names, the top file names included:
				<ListItem>
					<ListItemText primary=" svchost.exe – windows process"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" spoolsv.exe – windows process"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" setup.exe – common name for installer"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" explorer.exe – windows process"/>
				</ListItem>
				and the top process names included: 
				<ListItem>
					<ListItemText primary=" taskkill.exe – windows process"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" cmd.exe – windows command line"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" rundll32.exe – windows process"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" svchost.exe – windows process"/>
				</ListItem>
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Adversaries seek to exploit poorly secured or misconfigured SSH servers
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				56% of witnessed events from UnderAttack involved the SSH protocol.  Misconfigured or poorly configured SSH servers
				can be exploited by adversaries to create a beachhead into a network for further intrusion and exfiltration of sensitive data.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Executables, PDF documents and compressed files pose the greatest threat to industry members’ systems
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Executables made up 63% of MALDATABASE malware samples analyzed, of which AV scanners were able to detect 50%.
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				PDF documents made up 5.5% percent of samples analyzed but less than 1% of the samples were detected by AV scanners.
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Compressed files made up 5.6% of samples analyzed while only 1% were detected by AV scanners.
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

i_and_i.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(i_and_i);
