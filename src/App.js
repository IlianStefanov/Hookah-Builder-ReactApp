import React, { Component } from 'react';
// import logo from './logo.svg';
import plus from './images/Plus.svg';
import './scss/app.scss';

//Components
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Layout from './components/Layout/Layout';
import Builder from './containers/Builder/Builder';



class App extends Component {

  state = {
    isPageOnScroll: false
  } 

  componentDidMount = () => {

     window.addEventListener('scroll', this.handleOnScroll);
  
  }
  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleOnScroll);
  }


handleOnScroll = () => {
  let scrollValue = window.scrollY;
  if (scrollValue > 0) {
     this.setState({
      isPageOnScroll: true
     });
  } else {
    this.setState({
      isPageOnScroll: false
    }); 
  }
}
  render() {
    return (
      <div className="App">
        {/* HEADER HTML START */}
        <header className="App-header">

            <Toolbar isOnScroll={this.state.isPageOnScroll}/>
            
            <img src={plus} className="App-plus1" alt="plus" />
            <img src={plus} className="App-plus2" alt="plus" />
            <img src={plus} className="App-plus3" alt="plus" />
            <img src={plus} className="App-plus4" alt="plus" />
            <img src={plus} className="App-plus5" alt="plus" />
    

            <div className="App-header-content">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}

              

              <h1 className="App-title">BUILDING THE FUTURE<br/>IS NOT EASY JOB. THAT'S WHY<br />WE ARE HERE</h1>
              <button className="App-cta">EXPLORE</button>
            </div>
        </header>
        {/* HEADER HTML END */}
        <div className="App-home">
          
          <Layout>
            <div className="Product-builder">Build your own shisha</div>
            <Builder>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-test">
              TEST
            </p>
            </Builder>
          </Layout>
          
        </div>
      

         
      </div>
    );
  }
}

export default App;
