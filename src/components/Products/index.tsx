import * as React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent,CircularProgress, CardActions, Button  } from '@material-ui/core';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../redux/store';
import { AppActions } from '../../redux/actions/AppActions';

import { Product } from '../../redux/interfaces/Product';
import {boundRequestProducts} from '../../redux/actions/ProductActions';
import {getFilters, resetFilters} from '../../redux/actions/FilterActions';

import LeftPannel from '../core/LeftPannel';
import List from './List'

interface Props {}

interface LinkStateProps {
  products: Product[];
  loading : boolean;
  filters: Object
}

interface LinkDispatchProps {
    boundRequestProducts: (filters) => void;
    getFilters: () => void;
    resetFilters: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  products: state.ProductReducer.products,
  filters: state.FiltersReducer.filters,
  loading: state.ProductReducer.loading,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
    boundRequestProducts: bindActionCreators(boundRequestProducts, dispatch),
    getFilters: bindActionCreators(getFilters, dispatch),
    resetFilters: bindActionCreators(resetFilters, dispatch),
});

export class Home extends React.Component<LinkProps> {
    constructor(props: LinkProps) {
        super(props)
    }
    componentDidMount() {
        this.props.getFilters()
        this.props.boundRequestProducts(this.props.filters)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.filters !== nextProps.filters){ 
            this.props.boundRequestProducts(nextProps.filters)
        }
    }

    resetFilter() {
        this.props.boundRequestProducts({});
    };

    render() {
        const {query, selectedCategory} = this.props.filters;
        return (
        <>
            <main className="main">
                <Grid container spacing={3}>
                    <LeftPannel />
                    <Grid item xs={9}>
                        <Typography className="pageHeading">Product List</Typography>
                        {
                        selectedCategory || query
                        ? <Typography className="selectedFilters">Filters(Category/Query):- <small>{selectedCategory ? selectedCategory : '""'}</small>{query ? '/' : '' }<small>{query}</small> <a onClick={() => {this.props.resetFilters()}} >Reset Filters</a></Typography>

                        : null
                        }
                        
                        <Grid container spacing={3}>
                            {
                                this.props.loading 
                                ? <div className="loader">Loading....</div>
                                : this.props.products.length > 0
                                ? <List products={this.props.products} />
                                : <div className="loader">NO results found</div>
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