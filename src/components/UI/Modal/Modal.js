import React from 'react';

import OrderSummary from '../../../components/Product/OrderSummary/OrderSummary';
import Backdrop from '../Backdrop/Backdrop';
import Spinner from '../Spinner/Spinner';

class Modal extends React.Component {
    


    render() {
        let orderSummary = ( <div>
                                <OrderSummary orderType={this.props.orderType} orderFlavour={this.props.orderFlavour}/>
                                <button className="Close-modal" type="button" onClick={this.props.closeModal}>CLOSE</button>
                                <button className="Checkout" type="button" onClick={this.props.checkout}>CHECK OUT</button>
                             </div>
        );

        if(this.props.loading) {
            orderSummary = <Spinner /> 
        }

        return (
        <Backdrop>
            <div className="Modal">
                
                
                {orderSummary}
                
            </div>
        </Backdrop>
        );
    }
}

export default Modal;