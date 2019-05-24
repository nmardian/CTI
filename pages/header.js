import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styled from 'styled-components'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
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
	openIB: false,
    openTM: false,
  };

  handleToggleIB = () => {
    this.setState(state => ({ openIB: !state.openIB }));
  };
  
  handleToggleTM = () => {
    this.setState(state => ({ openTM: !state.openTM }));
  };
  
  handleCloseIB = event => {
    if (this.anchorElIB.contains(event.target)) {
      return;
    }
    this.setState({ openIB: false });
  };
  
  handleCloseTM = event => {
    if (this.anchorElTM.contains(event.target)) {
      return;
    }
    this.setState({ openTM: false });
  };
		
	render() {
    const { classes } = this.props;
    const { openIB,openTM } = this.state;

    return (
      <div className={classes.root}>
		  <AppBar position="static" color="primary">
			<Toolbar>
				<Button color="inherit" href="/">Home</Button>
				<Button
				buttonRef={node => {
				  this.anchorElIB = node;
				}}
				aria-owns={openIB ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={this.handleToggleIB}
				color="inherit"
				>
				Industry Background
				</Button>
				<Popper open={openIB} anchorEl={this.anchorElIB} transition disablePortal>
				{({ TransitionProps, placement }) => (
				  <Grow
					{...TransitionProps}
					id="menu-list-grow"
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				  >
					<Paper>
					  <ClickAwayListener onClickAway={this.handleCloseIB}>
						<MenuList>
						<Link href='/industry_background' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseIB}>Background</MenuItem>
						</Link>
						<Link href='/threat_trends' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseIB}>Threat Trends</MenuItem>
						</Link>
						</MenuList>
					  </ClickAwayListener>
					</Paper>
				  </Grow>
				)}
				</Popper>
				<Button
				buttonRef={node => {
				  this.anchorElTM = node;
				}}
				aria-owns={openTM ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={this.handleToggleTM}
				color="inherit"
				>
				Threat Modeling
				</Button>
				<Popper open={openTM} anchorEl={this.anchorElTM} transition disablePortal>
				{({ TransitionProps, placement }) => (
				  <Grow
					{...TransitionProps}
					id="menu-list-grow"
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				  >
					<Paper>
					  <ClickAwayListener onClickAway={this.handleCloseTM}>
						<MenuList>
						<Link href='/critical_assets' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>Critical Assets</MenuItem>
						</Link>
						<Link href='/diamond_models' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>Diamond Models</MenuItem>
						</Link>
						<Link href='/buy_in' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>Buy-In</MenuItem>
						</Link>
						</MenuList>
					  </ClickAwayListener>
					</Paper>
				  </Grow>
				)}
				</Popper>
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