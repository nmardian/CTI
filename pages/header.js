import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 0,
  },
});

class Header extends React.Component {
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
		  <AppBar position="static" color="primary">
			<Toolbar>
				<Button color="inherit" href="/">Home</Button>
				<Button color="inherit">Industry Background</Button>
				<Button color="inherit">Threat Modeling</Button>
				<Button color="inherit" href="/about">About</Button>
			</Toolbar>
		  </AppBar>
      </div>
    );
  }
	
	
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);