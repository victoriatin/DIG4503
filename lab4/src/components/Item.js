import React from 'react';

function MarketItem (props) {
    return (
        <div>
            {/* MarketItem accepts props
            component accepts a property count
            invoke the component by passing the count property*/}
            <p>Item {props.count}</p>
        </div>
    );
}

export default MarketItem;