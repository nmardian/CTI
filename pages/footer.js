import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const styles = theme => ({
  root: {
    width: '100%',
	position: 'fixed',
	bottom: 0,
	backgroundColor: '#9e9e9e',
  },
});

class Footer extends React.Component {
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
		  <Typography variant="caption" align="center">
			Disclaimer: All content on this site is for educational purposes only.
		  </Typography>
      </div>
    );
  }
	
	
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);