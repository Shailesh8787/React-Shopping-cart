import * as React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../redux/store';
import { AppActions } from '../../redux/actions/AppActions';

import { Cart } from '../../redux/interfaces/Product';
import {addToCart, removeFromCart} from '../../redux/actions/CartActions';

interface Props {
  products: any
}

interface LinkStateProps {
  cartItems: Cart[];
}

interface LinkDispatchProps {
  addToCart: (product) => void;
  removeFromCart: (product) => void
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  cartItems: state.ShoppinReducer.cartItems
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  addToCart: bindActionCreators(addToCart, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
});

export class List extends React.Component<LinkProps> {
  constructor(props) {
    super(props)
  }

  /**
   * Show hide add to cart.
   * @param {Number} id
   */
  isShowAddToCart(id) {
    const itemExist = this.props.cartItems.find(item => item.id == id)
    if(itemExist) {
      return true;
    }
    return false;
  }
  render() {
    return (
        <>
        {this.props.products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className="card">
                <div className="productImage">
                  <img
                    className="cardMedia"
                      src={product.image} alt={product.title}
                  />
                </div>
                <CardContent className="cardContent">
                  <Typography className="title" gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography className="description">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions className="actions">
                  <Typography className="price">
                    <AttachMoneyIcon /> {product.price}
                  </Typography>
                  {
                   this.isShowAddToCart(product.id) ? <Button className="addToCartButton" onClick={() => this.props.removeFromCart(product)} size="small" color="primary">
                      Remove
                    </Button>
                    :<Button className="addToCartButton" onClick={() => this.props.addToCart(product)} size="small" color="primary">
                    Add To Cart
                  </Button>
                  }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);