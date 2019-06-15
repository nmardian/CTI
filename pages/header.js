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
	openDS: false,
	openData: false,
  };

  handleToggleIB = () => {
    this.setState(state => ({ openIB: !state.openIB }));
  };
  
  handleToggleTM = () => {
    this.setState(state => ({ openTM: !state.openTM }));
  };
  handleToggleDS = () => {
    this.setState(state => ({ openDS: !state.openDS }));
  };
  handleToggleData = () => {
    this.setState(state => ({ openData: !state.openData }));
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
  
  handleCloseDS = event => {
    if (this.anchorElDS.contains(event.target)) {
      return;
    }
    this.setState({ openDS: false });
  };
  
  handleCloseData = event => {
    if (this.anchorElData.contains(event.target)) {
      return;
    }
    this.setState({ openData: false });
  };
		
	render() {
    const { classes } = this.props;
    const { openIB,openTM, openDS, openData } = this.state;

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
				<Button
				buttonRef={node => {
				  this.anchorElDS = node;
				}}
				aria-owns={openDS ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={this.handleToggleDS}
				color="inherit"
				>
				Data Sources
				</Button>
				<Popper open={openDS} anchorEl={this.anchorElDS} transition disablePortal>
				{({ TransitionProps, placement }) => (
				  <Grow
					{...TransitionProps}
					id="menu-list-grow"
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				  >
					<Paper>
					  <ClickAwayListener onClickAway={this.handleCloseDS}>
						<MenuList>
						<Link href='/ds_uat' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseIB}>UnderAttack</MenuItem>
						</Link>
						<Link href='/ds_bambenek' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseIB}>Bambenek Consulting C&C Servers</MenuItem>
						</Link>
						<Link href='/ds_mdb' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseIB}>Malware Database</MenuItem>
						</Link>
						</MenuList>
					  </ClickAwayListener>
					</Paper>
				  </Grow>
				)}
				</Popper>
				<Button
				buttonRef={node => {
				  this.anchorElData = node;
				}}
				aria-owns={openData ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={this.handleToggleData}
				color="inherit"
				>
				Data
				</Button>
				<Popper open={openData} anchorEl={this.anchorElData} transition disablePortal>
				{({ TransitionProps, placement }) => (
				  <Grow
					{...TransitionProps}
					id="menu-list-grow"
					style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
				  >
					<Paper>
					  <ClickAwayListener onClickAway={this.handleCloseData}>
						<MenuList>
						<Link href='/data_uat' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>UnderAttack</MenuItem>
						</Link>
						<Link href='/data_bambenek' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>Bambenek Consulting C&C Servers</MenuItem>
						</Link>
						<Link href='/data_mdb' style={{ textDecoration: 'none' }}>
						  <MenuItem onClick={this.handleCloseTM}>Maldatabase</MenuItem>
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