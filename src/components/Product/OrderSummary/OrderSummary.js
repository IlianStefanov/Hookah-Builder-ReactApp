import React from 'react';

import Wrapper from '../../../hoc/Wrapper';
import ProductParts from '../ProductParts/ProductParts';



class OrderSummary extends React.Component {
   
    
    render() {
        return (
            <Wrapper>
                <ProductParts type={this.props.orderType} flavour={this.props.orderFlavour}/>
                <h1 className="OrderCheckout">You ordered</h1>
                <p className="OrderType">{this.props.orderType}</p>
                <p className="OrderFlavour">{this.props.orderFlavour}</p>
            </Wrapper>
        );
    }
}
export default OrderSummary;