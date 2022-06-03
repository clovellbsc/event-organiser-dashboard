import "../styling/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganisersHomePage from "./OrganisersHomePage";
import { data } from "../data";

const App = () => {
  const allOrganisers = () => {
    const organisersArray = data.map((entry) => {
      return { id: entry["organiserId"], name: entry["organiserTitle"] };
    });
    return uniqueObjectArray(organisersArray);
  };

  const uniqueObjectArray = (array) => {
    return array.filter(
      (value, index, self) =>
        index ===
        self.findIndex((obj) => obj.id === value.id && obj.name === value.name)
    );
  };

  return (
    <Router>
      <a href="/">
        <h1>Let's Do This Event Management</h1>
      </a>
      <Routes>
        <Route
          path="/"
          element={<OrganisersHomePage organisersList={allOrganisers()} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
