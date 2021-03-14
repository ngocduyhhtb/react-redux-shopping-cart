const CartItem = (props) => {
    const {item} = props;
    const subTotal = (price, quantity) => {
        return price * quantity;
    }
    return (
        <tr>
            <th scope="row">
                <img
                    src={item.image}
                    alt="" className="img-fluid z-depth-0"/>
            </th>
            <td>
                <strong>{item.name}</strong>
            </td>
            <td>
                <strong>
                    {item.price}
                </strong>
            </td>
            <td>
                <span>{item.quantity}</span>
            </td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger"><strong>+</strong></button>
                    <button type="button" className="btn btn-warning">-</button>
                </div>
            </td>
            <td>
                <strong>
                    {subTotal(item.price, item.quantity)}
                </strong>
            </td>
            <td>
                <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top">
                    X
                </button>
            </td>
        </tr>
    )
}
export default CartItem;