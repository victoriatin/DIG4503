import React from 'react';

class NameSearch extends React.Component {
    readName(event) {
        //prevent the 'default' form action
        event.preventDefault();
//find the element with the id = "name"
        let element = document.querySelector("#name");
        //uses fetch(), and updates the reporting area
        fetch("/employees/" + element.value)
          .then((res) => {
            return res.json(); //parse the data and create a json object to return
          })
          .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            //if processes object has an error, the reporting variable will be equal to error message
            if (processed.error) {
              reporting.innerHTML = processed.error;
            } else {
              reporting.innerHTML = processed.age;
            }
          });
          element.value = "";
      }
      render() {
          return (
           <div>
                <h2>Name</h2>
            <form onSubmit={this.readName}>
                <input id="name" type="text" />
                <button>Submit</button>
            </form>
            </div>
          )
      }
    }

    export default NameSearch;