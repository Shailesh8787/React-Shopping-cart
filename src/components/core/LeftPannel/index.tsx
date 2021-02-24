import * as React from 'react';
import { Grid, Typography  } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import Category from '../Category';
import MobileBrands from '../MobileBrands'

export default class LeftPannel extends React.Component {
  render() {
    return (
        <Grid item xs={3} className="leftPaneel">
            <Typography className="filter">Filters</Typography>
            <Category />
            <MobileBrands />
        </Grid>
    );
  }
}