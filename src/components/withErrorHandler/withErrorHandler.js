import React from 'react';

import Modal from '../UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper';

const withErrorHandler = (WrappedComponent) => {

    return (props) => {
        return (
            <Wrapper>
                <Modal show>
                    Something went wrong
                </Modal>
                {/* <WrappedComponent {...props} /> */}
            </Wrapper>
        );
    } 
} 

export default withErrorHandler;