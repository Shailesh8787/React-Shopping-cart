import * as React from 'react';
import { FormGroup, FormControlLabel, FormControl, Typography, Radio } from '@material-ui/core';

export default class Category extends React.Component {
  render() {
    return (
        <>
            <Typography className="filterHeading">Category</Typography>
            <FormGroup row>
                <Typography>Mobiles & Accessories</Typography>
            </FormGroup>
        </>
    );
  }
}