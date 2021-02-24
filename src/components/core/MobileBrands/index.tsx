import * as React from 'react';
import {  Typography, FormGroup, FormControlLabel, Checkbox  } from '@material-ui/core';

export default class MobileBrands extends React.Component {
  render() {
    return (
        <>
            <Typography className="filterHeading">Brand</Typography>
            <FormGroup row>
                <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
            </FormGroup>
        </>
    );
  }
}