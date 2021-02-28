import React from 'react';

class Hobbies extends React.Component {
    render (fun) {
        return (
        <p>In my free time I like to play {this.props.funHobby}</p>
        );
    }
}

export default Hobbies;