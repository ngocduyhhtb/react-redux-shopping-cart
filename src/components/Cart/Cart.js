import CartResult from "./CartResult";

const Cart = (props) => {
    const {children} = props;
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table" style={{textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th/>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>
                            <span>Số Lượng</span>
                        </th>
                        <th>Tổng Cộng</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {children}
                    <CartResult/>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Cart;