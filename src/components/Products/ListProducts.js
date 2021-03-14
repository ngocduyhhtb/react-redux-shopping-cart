import React from 'react';

const ListProducts = (props) => {
    const {children} = props;
    return (
        <React.Fragment>
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {children}
                </div>
            </section>
        </React.Fragment>
    )
}

export default ListProducts;