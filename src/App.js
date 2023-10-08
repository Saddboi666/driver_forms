import VehicleIncidentReport from "./components/AccidentDiagram";

import VehicleInspectionForm from "./components/VehInspectionForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VehicleIncidentReport />
      <VehicleInspectionForm />
    </div>
  );
}
