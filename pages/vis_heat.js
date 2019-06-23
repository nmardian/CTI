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
    maxWidth: 1100,
	maxHeight: 800,
  },
  media: {
    height: 600,
	width: 1100,
  },
});

const theme = createMuiTheme();

class vis_heat extends React.Component {
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
			<Typography variant="h2" align="left" paragraph="true">
				UnderAttack Suspicious Events Heatmap
			</Typography>
		  <Grid
			container
			spacing={0}
			direction="row"
			alignItems="center"
			justify="center"
			style={{minHeight: '100vh' }}
			>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
						image="/static/UAT_Map_Heat.png"
						title="UnderAttack Events Heatmap"
						/>
					<CardContent>
						<Typography component="p">
							A heatmap displaying the frequency at which suspicious events originate in each country.
							Events gathered from UnderAttack.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
	  <Grid item xs={12}>
		<Footer />
	  </Grid>
  </Grid>
      </div>
    );
  }
}

vis_heat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(vis_heat);
