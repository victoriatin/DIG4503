
import './App.css';
import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import LocationSearch from "./components/LocationSearch";
import ReportingArea from "./components/ReportingArea";
import AddNew from "./components/AddNew";

function App() {
  return (
    <div className="App">
      <NameSearch/>
      <AgeSearch/>
      <LocationSearch/>
      <ReportingArea/>
<hr></hr>
      <AddNew/>
    </div>
  );
}

export default App;
