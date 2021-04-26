
import React from 'react';

class Role extends React.Component {
readJob(event) {
//prevent the 'default' form action
event.preventDefault();
//find the element with the id = "location"
        let element = document.querySelector("#role");
        //uses fetch(), and updates the reporting area
        fetch("/jobs/" + element.value)
          .then((res) => {
            return res.json(); //parse the data and create a json object to return
          })
          .then((processed) => {
            let reporting = document.querySelector("#JobReporting");

            //if processes object has an error, the reporting variable will be equal to error message
            if (processed.error) {
              reporting.innerHTML = processed.error;
            } else {
              reporting.innerHTML = "Name: " + processed.name + " Role: " + processed.role;
             
            }
          });
          element.value = "";
      }
      render() {
          return (
           <div>
                <h2>Search employee by role in the company</h2>
                <p>Roles: CEO, CTO, Finance Manager, Project Manager,
                   Human Resources Manager, Creative Director</p>
            <form onSubmit={this.readJob}>
                <input id="role" type="text" />
                <button>Submit</button>
            </form>
            </div>
          )
      }
    }


export default Role;