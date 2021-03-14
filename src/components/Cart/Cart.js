import styled from 'styled-components';
const Th = styled.th`
    text-align: center;
`
const Cart = (props) => {
    const {children} = props;
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table" id="cart-table">
                    <thead>
                    <tr>
                        <Th>Ảnh</Th>
                        <Th>Tên Sản Phẩm</Th>
                        <Th>Giá</Th>
                        <Th>
                            <span>Số Lượng</span>
                        </Th>
                        <Th>Tổng Cộng</Th>
                        <Th/>
                    </tr>
                    </thead>
                    <tbody>
                    {children}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Cart;