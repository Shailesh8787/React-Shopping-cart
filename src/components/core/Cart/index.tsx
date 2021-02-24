import * as React from 'react';
import { Link } from "react-router-dom"; 
import { Badge, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../../redux/store';
import { AppActions } from '../../../redux/actions/AppActions';

import { Cart } from '../../../redux/interfaces/Product';
import {getCartItems} from '../../../redux/actions/CartActions';

interface Props {
  products: any
}

interface LinkStateProps {
  cartItems: Cart[];
}

interface LinkDispatchProps {
  getCartItems: () => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  cartItems: state.ShoppinReducer.cartItems
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  getCartItems: bindActionCreators(getCartItems, dispatch),
});


export class HeaderCart  extends React.Component<LinkProps> {
  componentDidMount() {
    this.props.getCartItems()
  }

  render() {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    return (
        <>
          {
            currentPath == '/' 
            ?  <Link to="/cart">
            <IconButton className="cart" color="inherit">
                <Badge badgeContent={this.props.cartItems.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
          </Link>
          :
            <Link to="/" className="cart">Home</Link>
          }
         
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart);