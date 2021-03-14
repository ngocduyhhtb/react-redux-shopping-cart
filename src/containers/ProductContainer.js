import ListProducts from "../components/Products/ListProducts";
import * as action from '../actions/index'
import {connect} from 'react-redux';
import Product from "../components/Products/Product";

const ProductContainer = (props) => {
    const {products} = props;
    const showProducts = (products) => {
        let result = null;
        const {onAddToCart} = props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddTocart={onAddToCart}
                                onChangeMessage={props.onChangeMessage}/>
            })
        }
        return result;
    }
    return (
        <ListProducts>
            {showProducts(products)}
        </ListProducts>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(action.AddToCard(product));
        },
        onChangeMessage: (message) => {
            dispatch(action.onChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);