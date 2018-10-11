import React from 'react';
import plus from '../../../images/Plus.svg';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuVisible: true
        }
    }
   

    showMenu = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        });
    }

    render() {
        return (
            <div className={this.props.isOnScroll ? "Toolbar-element-onscroll" : "Toolbar-element"}>
                <div className="Toolbar">
                    <div className="Logo"></div>

                
                    <div className={this.state.isMenuVisible ? "Menu-Wrapper-Inactive" : "Menu-Wrapper"}>

                    <img src={plus} className="App-plus1" alt="plus" />
                    <img src={plus} className="App-plus2" alt="plus" />
                    <img src={plus} className="App-plus3" alt="plus" />
                    <img src={plus} className="App-plus4" alt="plus" />
                    <img src={plus} className="App-plus5" alt="plus" />


                    <div className={this.state.isMenuVisible ? "wrapper-menu" : "wrapper-menu open"} onClick={this.showMenu}>
                        <div className="line-menu half start"></div>
                        <div className="line-menu"></div>
                        <div className="line-menu half end"></div>
                    </div>
                        <ul className={this.state.isMenuVisible ? "App-menu" : "App-menu-active"}>
                            <li>HOME</li>
                            <li>BUILD</li>
                            <li>ORDER</li>
                            <li>LOGIN</li>
                            <li className="register">REGISTER</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    
}



export default Toolbar;