import * as React from 'react';
import { Toolbar, Grid } from '@material-ui/core';
import { Link } from "react-router-dom"; 

import Cart from '../Cart'
import SearchBox from '../SearchBox'


export default class Navigation extends React.Component {
  render() {
    return (
        <Toolbar>
            <Grid item xs={3}>
                <Link to="/">
                    <img
                        src={require('../../../images/logo.png')} alt="Logo"
                    />
                </Link>
                
            </Grid>
            <Grid item xs={7}>
                <SearchBox />
          </Grid>
            <Grid item xs={2}>
                <Cart />
            </Grid>
        </Toolbar>
    );
  }
}