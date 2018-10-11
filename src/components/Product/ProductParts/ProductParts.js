import React, { Component } from 'react';
import PropTypes from 'prop-types';


import PARTS_PRICES from '../../../containers/Data/prices';

class ProductParts extends Component {
    
    render() {
        //type, flavour and total price
        let parts = ["type", "flavour", 0];
        let typePrice = 0;
        let flavourPrice = 0;

    switch(this.props.type) {
        

        case ('bigHookah'):
        parts[0] = (
            <div className="Product-wrapper">
                <div className="product-display Hookah-big"></div>
            </div>
            );
        typePrice = PARTS_PRICES.types.bigHookah;
        parts[2] = typePrice;
        break;

        case ('smallHookah'):
        parts[0] = (
            <div className="Product-wrapper">
                <div className="product-display Hookah-small"></div>
            </div>
            );
        typePrice = PARTS_PRICES.types.smallHookah;
        parts[2] = typePrice;
        break;

        case ('midHookah'):
        parts[0] = (
            <div className="Product-wrapper">
                <div className="product-display Hookah-mid"></div>
            </div>
            );
        typePrice = PARTS_PRICES.types.midHookah;
        parts[2] = typePrice;
        break;
        
        case ('default'): 
        parts[0] = (
            <div className="Product-wrapper">
                <div className="product-display Start-building"></div>
            </div>
            );
            break;

        default: 
        parts = null;
    }


    switch(this.props.flavour) {
        case ('flav-1'):
            parts[1] = (<div className="flav-popup flav flav-1"></div>);
            //flavour price
            flavourPrice = PARTS_PRICES.flavours.flav_1;
            parts[2] = (<div className="price">{typePrice + flavourPrice} BGN</div>);
        break;
        case ('flav-2'):
            parts[1] = (<div className="flav-popup flav flav-2"></div>);
            flavourPrice = PARTS_PRICES.flavours.flav_2;
            parts[2] = (<div className="price">{typePrice + flavourPrice} BGN</div>);
            
        break;
        case ('flav-3'):
            parts[1] = (<div className="flav-popup flav flav-3"></div>);
            flavourPrice = PARTS_PRICES.flavours.flav_3;
            parts[2] = (<div className="price">{typePrice + flavourPrice} BGN</div>);
            
        break;

        case ('default'):
            parts[1] = (<div></div>);
            
            
            
        break;


        default:
        parts = null;
        
    }
   
    
    
    return parts;
 }




}

ProductParts.propTypes = {
    type: PropTypes.string.isRequired
}

export default ProductParts;