import React, {useEffect} from 'react';

const Product = (props) => {
    const {product} = props;
    useEffect(() => {
        console.log(product)
    }, [product]);
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
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <a href={"/"} className="btn-floating blue-gradient" data-toggle="tooltip"
                               data-placement="top">
                                <i className="fa fa-shopping-cart"/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;