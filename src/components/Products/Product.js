import React from 'react';
import * as Message from "../../constants/MessageType";

const Product = (props) => {
    const {product} = props;
    const showRating = () => {
        let result = [];
        if (product.star > 0) {
            for (let i = 0; i < product.star; i++) {
                result.push(<li key={i}>
                    <i className="fa fa-star"/>
                </li>)
            }
        }
        return result;
    }
    const onAddToCart = (product) => {
        props.onAddTocart(product);
        props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img
                        src={product.image}
                        className="img-fluid" alt=""/>
                    <a href={"/"}>
                        <div className="mask waves-light waves-effect waves-light"/>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <span>{product.name}</span>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {showRating()}
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <div className="left">
                            <button className="btn btn-primary">
                                {product.price}$
                            </button>
                        </div>
                        <span className="right">
                            <button className="btn btn-dark" data-toggle="tooltip"
                                    data-placement="top" onClick={() => onAddToCart(product)}>
                                Add To Cart
                            </button>
                            <i className="bi bi-cart"/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;