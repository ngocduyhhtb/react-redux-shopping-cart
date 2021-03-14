import Card from '../components/Cart/Cart';
import {connect} from 'react-redux';
import * as Message from '../constants/MessageType';
import CartItem from "../components/Cart/CartItem";
import CartResult from "../components/Cart/CartResult";
import * as action from '../actions/index'

const CartContainer = (props) => {
    const {cart} = props;
    const showCartItem = (cart) => {
        let result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((product, index) => {
                return (
                    <CartItem key={index} product={product} index={index} onAddToCart={props.onAddToCart}
                              onRemoveFromCart={props.onRemoveFromCart}
                              onDeleteItemFromCart={props.onDeleteItemFromCart}
                              onChangeMessage={props.onChangeMessage}/>
                )
            })
        }
        return result;
    }
    const showTotalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }
    return (
        <Card>
            {showCartItem(cart)}
            {showTotalAmount(cart)}
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.AddToCard(product));
        },
        onRemoveFromCart: (product) => {
            dispatch(action.RemoveFromCart(product));
        },
        onDeleteItemFromCart: (product) => {
            dispatch(action.DeleteItemFromCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(action.onChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);