import React, {Component} from 'react';
import {connect} from 'react-redux'

import Product from "../components/Product";

class ProductList extends Component {

    render() {
        // Create a dynamically populated list of `<Product />` components
        // Each `<Product />` component should have a single object from the `products` state property (array)
        // applied to the component as a `product` property
        return (
            <ul className="ProductList">
                {this.props.products.map(product => {
                    return(
                    <Product key={product.listing_id} product={product}/>
                    )
                })}
            </ul>
        );
    }
}

// Using the `mapStateToProps` function, filter the array stored in the 
// state `products` property based on 3 criterea:
// - `underTwenty`
// - `overTwenty`
// - `all` or the default
const mapStateToProps = function(state) {
    return {products: state.products}
}

export default connect(mapStateToProps)(ProductList);
