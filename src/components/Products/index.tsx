import * as React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent,CircularProgress, CardActions, Button  } from '@material-ui/core';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../redux/store';
import { AppActions } from '../../redux/actions/AppActions';

import { Product } from '../../redux/interfaces/Product';
import {boundRequestProducts} from '../../redux/actions/ProductActions';

import LeftPannel from '../core/LeftPannel';
import List from './List'

interface Props {}

interface LinkStateProps {
  products: Product[];
  loading : boolean;
}

interface LinkDispatchProps {
    boundRequestProducts: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  products: state.ProductReducer.products,
  loading: state.ProductReducer.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
    boundRequestProducts: bindActionCreators(boundRequestProducts, dispatch),
});

export class Home extends React.Component<LinkProps> {
    componentDidMount() {
        this.props.boundRequestProducts()
    }

    render() {
        return (
        <>
            <main className="main">
                <Grid container spacing={3}>
                    <LeftPannel />
                    <Grid item xs={9}>
                        <Typography className="pageHeading">Product List</Typography>
                        <Grid container spacing={3}>
                            {
                                this.props.loading 
                                ? <div className="loader">Loading....</div>
                                : <List products={this.props.products} />
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);