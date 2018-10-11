import React from 'react';
import axios from '../../axios-orders';

import ProductParts from './ProductParts/ProductParts';
import BuildControls from './BuildControls/BuildControls';
import stock from '../../containers/Data/stock';
import Modal from '../UI/Modal/Modal';

import PRICES from '../../containers/Data/prices';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prices: PRICES,
            data: stock,
            type: "default",
            flavour: "default",
            price: 0,
            loading: false,
            isModalVisible: false
        }
    }


    render() {
       
        const handleClickType = (event)  => {
           event.preventDefault();
        
            
           let chooseType = event.target.value;

           this.setState({
               type: chooseType,
               
           });
        }

       

        const handleClickFlavour = (event) => {
           event.preventDefault();

           let chooseFlavour = event.target.value;
           this.setState({
               flavour: chooseFlavour
           });
     
  
        }

        const handleCloseModal = () => {
            this.setState({
                isModalVisible: false
            });
        }

        const handleCheckout = () => {
            this.setState({ loading: true });

            const order = {
                type: this.state.type,
                flavour: this.state.flavour
            }

            
           
            axios.post('/orders.json', order)
                 .then(response => {
                     this.setState({
                         loading: false,
                         isModalVisible: false
                     });
                 }).catch(error => {
                    this.setState({
                        loading: false,
                        isModalVisible: false
                    });
                 });
        }

        const handleSubmit = (event) => {
           event.preventDefault();
            

           

           this.setState({
                isModalVisible: !this.state.isModalVisible
           });
     
           return this.state.isModalVisible;
        }

        

        
        

        let showModal = this.state.isModalVisible ? <Modal 
                                                          orderType={this.state.type}
                                                          orderFlavour={this.state.flavour}
                                                          closeModal={handleCloseModal}
                                                          show={this.state.isModalVisible}
                                                          checkout={handleCheckout}
                                                          loading={this.state.loading}
                                                          ></Modal> : <div></div>
       
        return (
            <div className="Product">

                <BuildControls 
                    clickedType={handleClickType} 
                    clickedFlavour={handleClickFlavour} 
                    controlDataType={this.state.data.stockType}
                    controlDataFlavour={this.state.data.stockFlavour}
                    type={this.state.type}
                    submitForm={handleSubmit}
                    priceValue={this.state.price}
                    />
   
                <ProductParts type={this.state.type} flavour={this.state.flavour} priceValue={this.state.price} />
            
                {showModal}

            </div>
        );
    }
} 
    // let transformedParts = Object.keys(props.parts).map(part => {
    //     console.log(props.parts);
       
    //     return [...Array(props.parts[part])]
    //     .map((_, i) => {
    //         console.log("this is part: " + props.parts[part]);
    //         return <ProductParts key={part + i}  type={part}/>
    //     });
    // });
    
    




    // if (transformedParts.length === 0) {
    //     transformedParts = <p>Start Building your Hookah</p>
    // }



export default Product;