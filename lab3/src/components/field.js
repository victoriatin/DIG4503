import React from 'react';

class Field extends React.Component {
    render (study) {
        return (
        <h2>After graduation I will be pursuing jobs as a {this.props.studyCareer}</h2>
        );
    }
}

export default Field;