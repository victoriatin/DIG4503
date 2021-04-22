
import React from 'react';

class AddNew extends React.Component {
createPerson(event) {
    event.preventDefault();

    let name = document.querySelector("#personName");

    let age = document.querySelector("#personAge");

    let location = document.querySelector("#personLocation");

    fetch("/employee/" + name.value + "/" + age.value + "/" + location.value, {
      method: "post",
    })
      .then((res) => {
        return res.json(); //parse the data and create a json object to return
      })
      .then((processed) => {
        console.log(processed);
      });
  }

render () {
    return (
        <div>
          <h1> Add new employee</h1>
<form onsubmit={this.createPerson}>
  <h2>Enter name to add</h2>
  <input id="personName" type="text" />
  <h2>Enter age to add</h2>
  <input id="personAge" type="text" />
  <h2>Enter location to add</h2>
  <input id="personLocation" type="text" />
  <button>Submit</button>
</form>
        </div>
    )
}
}


export default AddNew;