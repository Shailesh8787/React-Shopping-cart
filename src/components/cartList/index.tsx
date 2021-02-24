import * as React from 'react';
import { Card, CardContent,CssBaseline, FormControlLabel, ButtonGroup, TextField, CardActions, Button, Typography,Container, AppBar, Grid  } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Footer from '../core/Footer';
import Navigation from '../core/Navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppState } from '../../redux/store';
import { AppActions } from '../../redux/actions/AppActions';

import { Cart } from '../../redux/interfaces/Product';
import {getCartItems, addQuantity, removeFromCart, subQuantity} from '../../redux/actions/CartActions';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

interface Props {}

interface State {
    shippingCharge: number
}

interface LinkStateProps {
  cartItems: Cart[];
}

interface LinkDispatchProps {
  getCartItems: () => void;
  removeFromCart: (product) => void;
  addQuantity: (product) => void;
  subQuantity: (product) => void;
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState): LinkStateProps => ({
  cartItems: state.ShoppinReducer.cartItems
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  getCartItems: bindActionCreators(getCartItems, dispatch),
  removeFromCart: bindActionCreators(removeFromCart, dispatch),
  addQuantity: bindActionCreators(addQuantity, dispatch),
  subQuantity: bindActionCreators(subQuantity, dispatch)
});

export class CartList extends React.Component<LinkProps, State> {
    constructor(Props: LinkProps) {
        super(Props)
    }

    state: State = {
        shippingCharge: 10
    }

    componentDidMount() {
        this.props.getCartItems()
    }

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
        <main className="main">
            <Grid container spacing={3}>
                    <Grid item xs={9} sm={9} md={9}>
                        <Card className="cartItems">
                            <Typography className="cartHeading">Cart({this.props.cartItems.length})</Typography>
                            {this.props.cartItems.map((product) => (
                                <Grid item  xs={12} sm={12} md={12} key={product.id}>
                                    <Card className="cartListCard">
                                        <Grid item xs={3} sm={3} md={3}>
                                            <div className="cartListImage">
                                            <img
                                                className="cartListMedia"
                                                src={product.image} alt={product.title}
                                            />
                                            </div>
                                        </Grid>
                                        <Grid item xs={9} sm={9} md={9}>
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
                                            <Button className="addToCartButton" onClick={() => this.props.removeFromCart(product)} size="small" color="primary"> Remove </Button>
                                            <div>
                                                <ButtonGroup>
                                                    <Button
                                                        aria-label="reduce"
                                                        onClick={() => this.props.subQuantity(product)}
                                                        disabled={product.quantity <= 1}
                                                        className="quantityButton"
                                                    >
                                                        <RemoveIcon fontSize="small" />
                                                    </Button>
                                                    <TextField type="text" disabled aria-readonly={true} className="quantityInput" color="primary" value={product.quantity} variant="outlined" />
                                                    <Button
                                                        onClick={() => this.props.addQuantity(product)}
                                                        aria-label="increase"
                                                        className="quantityButton"
                                                    >
                                                        <AddIcon fontSize="small" />
                                                    </Button>
                                                </ButtonGroup>
                                            </div>
                                            </CardActions>
                                        </Grid>
                                    </Card>
                                </Grid>
                            ))}
                        </Card>
                    </Grid>
                    <Grid  item xs={3} className="leftPaneel right">
                        <Typography className="priceRang">PRICE DETAILS</Typography>
                        <div className="textbox">
                            <Typography className="alignleft">Price ({this.props.cartItems.length} item)</Typography>
                            <Typography className="alignright"><AttachMoneyIcon /> {this.props.cartItems.reduce((sum, i) => (
      sum += i.quantity * i.price
    ), 0).toFixed(2)}</Typography>
                        </div>
                        <div className="textbox">
                            <Typography className="alignleft">Discount(<small>Flat 10 %</small>)</Typography>
                            <Typography className="alignright"> - <AttachMoneyIcon /> {(this.props.cartItems.reduce((sum, i) => (
      sum += i.quantity * i.price
    ), 0)/100 * 10).toFixed(2)}</Typography>
                        </div>
                        <div className="textbox">
                            <Typography className="alignleft">Delivery Charges</Typography>
                            <Typography className="alignright"><AttachMoneyIcon /> {this.state.shippingCharge}</Typography>
                        </div>
                        <div className="total">
                            <Typography className="alignleft">Total Amount</Typography>
                            <Typography className="alignright"><AttachMoneyIcon /> {(this.props.cartItems.reduce((sum, i) => (
      sum += i.quantity * i.price
    ), 0) - this.props.cartItems.reduce((sum, i) => (
        sum += i.quantity * i.price
      ), 0)/100 * 10 + this.state.shippingCharge).toFixed(2)}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </main>
        </Container>
        <Footer />
        </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);