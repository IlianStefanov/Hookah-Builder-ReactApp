import React from 'react';


class BuildControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            type: "",
            flavour: "",
            price: this.props.priceValue
            
        }
    }
    
    toggleActiveType(event) {
        event.preventDefault();
       
        let value = event.target.value;
       
        this.setState({
            addClassType: value,
            
        });
        
        return this.state.addClassType;
    }

    toggleActiveFlavour(event) {
        event.preventDefault();
       
        let flavValue = event.target.value;
        
        
        this.setState({
            addClassFlavour: flavValue
        });

       
        
        return this.state.addClassFlavour;
    }
    
  
    render() {
   
        let stockType = this.props.controlDataType;
        let stockFlavour = this.props.controlDataFlavour;
        
    

        let globalClass = "prod prod-btn-";
        let globalClassFlavours = "flav-btn prod-btn-";
        
        const listProductTypes = stockType.map((typeIndex, i) => 
            
                <input key={i.toString()} 
                       className={typeIndex === this.state.addClassType ?  globalClass + typeIndex + " active" : globalClass + typeIndex}
                       type="button" 
                       onClick={(event) => {
                                this.toggleActiveType(event)
                                this.props.clickedType(event);
                       }} 
                       value={typeIndex} />
         
        );

        const listProductFlavours = stockFlavour.map((flavourIndex, i) => 
                <input key={i.toString()}   
                       className={flavourIndex === this.state.addClassFlavour ?  globalClassFlavours + flavourIndex + " active" : globalClassFlavours + flavourIndex}
                       type="button" 
                       onClick={(event) => {
                                this.toggleActiveFlavour(event)
                                this.props.clickedFlavour(event);
                       }}
                       value={flavourIndex} />  
        );
        
        
        return (
            <div className="BuildControls">
                    <div className="BuildControl"> 
                    <div className="BuildControl-label"></div>




                    <form onSubmit={this.props.submitForm} className="modal-form">
                           <hr />
                           {listProductTypes}
                           <hr />
                           {listProductFlavours}
                           <hr />

                           <button 
                                className="BuildControl-btn-add bg-gradient1 pop-onhover" 
                                type="submit"><i className="icon"></i><span>Order</span></button>
                    </form>
                </div>
            </div> 
        );
    }
}

export default BuildControls;


