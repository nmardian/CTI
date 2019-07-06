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

class opInt extends React.Component {
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
				Operational Intelligence
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Malware authors utilize common file and process names to allow malware to hide on an infected system
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				This insight should be disseminated to employees through required training in order to help them identify suspicious files and processes.  Additionally, 
				IT / InfoSec should be made aware of this information in order to augment firewall rules and update AV scanner definitions.  AV scanners should be updated to
				scrutinize file hashes and memory footprints in addition to file names to more reliably detect malware.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Adversaries seek to exploit poorly secured or misconfigured SSH servers
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				This insight should be disseminated in the form of enterprise wide common SSH server images.  This will help ensure
				servers have a baseline level of security and help prevent misconfigurations.  Additionally, industry members should take steps to
				scan their networks and locate all SSH servers in order to ensure they are properly secured and configured.  The identified servers should also
				be analyzed to determine if they are required for a business fucntion of can be disposed of.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Executables, PDF documents and compressed files pose the greatest threat to industry members’ systems
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				This insight should be disseminated to both employees through training and IT / InfoSec staff. Employees should be properly trained to scrutinize email attachments
				to help prevent malware infection.  IT / InfoSec staff should update AV and email scanners to help block malicious files before they reach employees.
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

opInt.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(opInt);
