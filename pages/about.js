/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Header from './header';
import Footer from './footer';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 0,
  },
  card: {
    maxWidth: 500,
	height: 250,
  },
  media: {
    height: 200,
  },
});

function About(props) {
  const { classes } = props;

  return (
	<div className={classes.root}>
		<Header />
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{minHeight: '75vh' }}
				>
				<Grid item xs={3}>
					<Card className={classes.card}>
						<CardMedia
							className={classes.media}
							image="/static/nick.jpg"
							title="Nick"
							/>
						<CardContent>
							<Typography component="p">
							This site was created by Nick Mardian (right) for MIS 562.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		<Footer />
	</div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
