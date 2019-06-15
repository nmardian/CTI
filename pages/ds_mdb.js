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

class ds_mdb extends React.Component {
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
					MALDATABASE
				</Typography>
			  </Grid>
			  <Grid item xs={6}>
			  <Typography variant="h4" align="left" paragraph="true">
				Background:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				https://maldatabase.com/
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				MALDATABASE is a database of malware samples.  There are tiered levels of access from the free student/researcher
				tier to the premium enterprise tier.  This source is relevant to the U.S. Aerospace Industry members because of the threat
				APTs and their malware pose to the industry.  The feed is updated daily and can be used to create scan signature lists and
				indicators of compromise lists for industry members.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				50 samples can be requested per day with the free tier account.
				Each sample lists:
				<ListItem>
					<ListItemText primary=" SHA256 – Hash of the malware payload"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Size – Size on disk of the malware payload"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Type – File type of the malware"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Domains – Domains associated with the malware"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Processes – Process names used by the malware"/>
				</ListItem>
				<ListItem>
					<ListItemText primary=" Files – Files created by the malware"/>
				</ListItem>
			  </Typography>
			   <Typography variant="h4" align="left" paragraph="true">
				Why was this source selected?
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Diamond models 2, 4, 6, 8 and 10 deal with APTs utilizing malware to steal information from U.S. Aerospace Industry members.
				The samples contained in this database can be used at network borders to block files with matching SHA256 hashes.  Additionally,
				AV scanners can be updated to look for these specific hashes as well as the file and process names provided.  The domain lists 
				can be used to configure firewalls and DNS sinkholes.
			  </Typography>
			  <Typography variant="h4" align="left" paragraph="true">
				Data Collection
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Daily:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				Request samples, store retrieved JSON entries as a flat file.
			  </Typography>
			  <Typography variant="h6" align="left" paragraph="true">
				Weekly:
			  </Typography>
			  <Typography variant="body" align="left" paragraph="true">
				A script is run to iterate over all samples and write them out as a CSV.
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

ds_mdb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ds_mdb);
