import React from 'react';


class Clicky extends React.Component {

    constructor() {
      super(); 
      this.state = { showMessage: false }
    }
  
    _showMessage = (bool) => {
      this.setState({
        showMessage: bool
      });
    }
  
    render() {
      return (
        <div>
         <p> Click the buttons to show or hide text!</p> <br/>
          <button onClick={this._showMessage.bind(null, true)}>Show</button>
          <button onClick={this._showMessage.bind(null, false)}>Hide</button>
          { this.state.showMessage && (<div><h1>Portfolio 1 assignment!</h1></div>) }
        </div>
      );
    }
  }
  
  export default Clicky;
  