import React from 'react';

class HomePage extends React.Component {
    render (fname) {
        return (
        <h1>My name is {this.props.firstName}</h1>
        );
    }
}

export default HomePage;