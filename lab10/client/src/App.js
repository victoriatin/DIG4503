
import './App.css';
import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import LocationSearch from "./components/LocationSearch";
import ReportingArea from "./components/ReportingArea";
import Role from "./components/JobTitle";
import JobReporting from "./components/JobReporting";

function App() {
  return (
    <div className="App">
      <NameSearch/>
      <AgeSearch/>
      <LocationSearch/>
      <ReportingArea/>
<hr></hr>
      <Role/>
      <JobReporting/>
    </div>
  );
}

export default App;
