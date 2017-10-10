import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "./actions";
import products from './data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
    products: products,
    filter: ""
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {
    console.log(initialState);
    let newData;
    let newState;
    // When a `FILTER_PRODUCTS` is provided, return a new state
    // Be sure not to mutate state
    // Use the `update` operator provided by `immutability-helper`
    // to update the the state property describing current state of filterable data
    // provided by the `action.payload`
    switch (action.payload) {
        case "overTwenty": 
           newData = initialState.products.filter(product => {
               return product.price > 20;
           })
           newState = {
               products: newData,
               filter: action.payload
           }
           return newState;
            
        case "underTwenty": 
            newData = initialState.products.filter(product => {
                return product.price <= 20;
            })
            newState = {
                products: newData,
                filter: action.payload
            }
            return newState;
        
        case "all": 
            newData = products;
            newState = {
                products: newData,
                filter: action.payload
            }
            return newState;
             
        default: 
            return initialState;
        
        }
    }

export default reducer;
