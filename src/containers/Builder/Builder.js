import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper'; 

import Product from '../../components/Product/Product';




class Builder extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }

    state = {
        parts: {
            // smallHookah: 0,
            // bigHookah: 1
        },
        
    }

 


    render () {

        
        return (
            <Wrapper>
                
              
                <Product />
                
                <div>{this.props.children}</div>

            </Wrapper>
        );
    }
}

export default Builder;