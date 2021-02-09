import React, {Component} from 'react';
import MarketItem from './Item'

class Market extends Component {
      /* use this.state to set the initial state in the constructor 
     when a constructor() is invoked, the super() method is invoked inside of it
     else the parent’s constructor won’t be executed*/
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

    render () {
        return (
            <div>
                <MarketItem count= {this.state.count}/>
                   {/* when clicked - incrementing state value by 1
                   arrow function in render creates a new function each time the component renders*/}
                <button onClick={() => this.setState({count: this.state.count + 1})}>Add MarketItem</button>
            </div>
        );
    }
}

export default Market;