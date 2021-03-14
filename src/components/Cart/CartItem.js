import styled from 'styled-components';
import * as Message from '../../constants/MessageType'

const Tr = styled.tr`
  text-align: center;
`
const CartItem = (props) => {
    const {product} = props;
    const subTotal = (price, quantity) => {
        return price * quantity;
    }
    const onAddToCart = () => {
        props.onAddToCart(product);
        props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    const onRemoveFromCart = () => {
        props.onRemoveFromCart(product);
        props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
    const onDeleteItemFromCart = () => {
        props.onDeleteItemFromCart(product);
        props.onChangeMessage(Message.MSG_DELETE_PRODUCT_SUCCESS);
    }
    return (
        <Tr>
            <th scope="row">
                <img
                    src={product.image}
                    alt="" className="img-fluid z-depth-0"/>
            </th>
            <td>
                <strong>{product.name}</strong>
            </td>
            <td>
                <strong>
                    {product.price}$
                </strong>
            </td>
            <td>
                <span>{product.quantity}</span>
            </td>
            <td>
                <strong>
                    {subTotal(product.price, product.quantity)}$
                </strong>
            </td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={onAddToCart}><strong>+</strong></button>
                    <button type="button" className="btn btn-warning" onClick={onRemoveFromCart}>-</button>
                </div>
            </td>
            <td>
                <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top" onClick={onDeleteItemFromCart}>
                    X
                </button>
            </td>
        </Tr>
    )
}
export default CartItem;