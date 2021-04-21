import React from 'react';

class LocationSearch extends React.Component {
    readLocation(event) {
        //prevent the 'default' form action
        event.preventDefault();
//find the element with the id = "location"
        let element = document.querySelector("#location");
        //uses fetch(), and updates the reporting area
        fetch("/locations/" + element.value)
          .then((res) => {
            return res.json(); //parse the data and create a json object to return
          })
          .then((processed) => {
            let reporting = document.querySelector("#reportingArea");

            //if processes object has an error, the reporting variable will be equal to error message
            if (processed.error) {
              reporting.innerHTML = processed.error;
            } else {
              reporting.innerHTML = processed.name;
            }
          });
          element.value = "";
      }
      render() {
          return (
           <div>
                <h2>Location</h2>
            <form onSubmit={this.readLocation}>
                <input id="location" type="text" />
                <button>Submit</button>
            </form>
            </div>
          )
      }
    }

    export default LocationSearch;