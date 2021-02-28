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
         <h2> Click the buttons to show or hide text!</h2> <br/>
          <button onClick={this._showMessage.bind(null, true)}>Show</button>
          <button onClick={this._showMessage.bind(null, false)}>Hide</button>
          { this.state.showMessage && (<div><p>Portfolio 1 assignment!</p></div>) }
        </div>
      );
    }
  }
  
  export default Clicky;
  