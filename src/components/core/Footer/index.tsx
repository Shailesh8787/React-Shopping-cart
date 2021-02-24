import * as React from 'react';
import { Typography, Container } from '@material-ui/core';

export default class Footer extends React.Component {
  render() {
    return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright © ${new Date().getFullYear()} .`}
      </Typography>
    </footer>
    );
  }
}