import * as React from 'react';
import { CssBaseline, Typography,Container, AppBar, makeStyles  } from '@material-ui/core';

import Footer from '../core/Footer';
import Navigation from '../core/Navigation';
import Products from '../Products'

export default class Home extends React.Component {
  render() {
    return (
      <>
      <AppBar position="relative">
            <Container>
        <CssBaseline />
        <Navigation />
      </Container>
      </AppBar>
      <Container>
        <Products />
      </Container>
      <Footer />
      </>
    );
  }
}