import React, { useState } from "react";
import { Form, Input, Button, Select, Card } from "antd";
const { TextArea } = Input;

function VehicleInspectionForm() {
  const [isToday, setIsToday] = useState(new Date());
  // Define state variables to store inspection data
  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleType: "Please choose one..", // Default value
    plateNumber: "",
    mileage: "",
    fuelLevel: "",
    interiorCleanliness: "",
    exteriorCondition: "",
    maintenanceNotes: ""
  });

  // Mapping of vehicle types to license plates
  const vehicleTypeToPlateNumber = {
    Sl51: "Plate51",
    Sl52: "Plate52",
    Sl53: "Plate53",
    Sl140: "Plate140",
    Sl141: "Plate141"
  };

  // Handle form input changes, including the Select component
  const handleInputChange = (name, value) => {
    let updatedPlateNumber = vehicleInfo.plateNumber;

    if (name === "vehicleType" && vehicleTypeToPlateNumber[value]) {
      updatedPlateNumber = vehicleTypeToPlateNumber[value];
    }

    setVehicleInfo({
      ...vehicleInfo,
      [name]: value,
      plateNumber: updatedPlateNumber // Update plateNumber based on selection
    });
  };
  const provideDate = () => {
    let today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    return yesterday;
  };
  const now = provideDate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here if needed
    // Submit the inspection data to your backend or take appropriate actions
    console.log("Submitted Inspection Data:", vehicleInfo);
    // Clear the form or show a success message
    setVehicleInfo({
      vehicleType: "Please choose one..",
      plateNumber: "",
      mileage: "",
      fuelLevel: "",
      interiorCleanliness: "",
      exteriorCondition: "",
      maintenanceNotes: ""
    });
  };

  return (
    <div style={{ display: "inline-block" }}>
      <Card title="Vehicle Inspection Report">
        <Form onSubmit={handleSubmit} size={"middle"}>
          <Form.Item label="Date" htmlFor={"date"}>
            <Input
              name="date"
              type="text"
              defaultValue={isToday.toLocaleDateString()}
            />
          </Form.Item>
          {/* Vehicle Type */}
          <Form.Item htmlFor="vehicleType" label="Vehicle Id">
            <Select
              options={[
                {
                  key: 1,
                  label: "Please choose one..",
                  value: "Please choose one.."
                },
                {
                  key: 2,
                  label: "Sl51",
                  value: "Sl51"
                },
                {
                  key: 3,
                  label: "Sl52",
                  value: "Sl52"
                },
                { key: 4, label: "Sl53", value: "Sl53" },
                {
                  key: 5,
                  label: "Sl140",
                  value: "Sl140"
                },
                {
                  key: 6,
                  label: "Sl141",
                  value: "Sl141"
                }
              ]}
              defaultValue={vehicleInfo.vehicleType}
              onChange={(value) => handleInputChange("vehicleType", value)}
              required
            />
          </Form.Item>
          {/* Plate Number */}
          <Form.Item label="License Plate Number">
            <Input
              type="text"
              name="plateNumber"
              value={vehicleInfo.plateNumber}
              onChange={(e) => handleInputChange("plateNumber", e.target.value)}
              disabled
            />
          </Form.Item>
          {/* Mileage */}
          <Form.Item htmlFor="mileage" label="Mileage (in miles)">
            <Input
              type="number"
              id="mileage"
              name="mileage"
              value={vehicleInfo.mileage}
              onChange={(e) => handleInputChange("mileage", e.target.value)}
              required
            />
          </Form.Item>
          {/* Fuel Level */}
          <Form.Item label="Fuel Level">
            <Input
              type="text"
              id="fuelLevel"
              name="fuelLevel"
              value={vehicleInfo.fuelLevel}
              onChange={(e) => handleInputChange("fuelLevel", e.target.value)}
              required
            />
          </Form.Item>
          {/* Interior Cleanliness */}
          <Form.Item htmlFor="interiorCleanliness" label="Interior Cleanliness">
            <Input
              type="text"
              id="interiorCleanliness"
              name="interiorCleanliness"
              value={vehicleInfo.interiorCleanliness}
              onChange={(e) =>
                handleInputChange("interiorCleanliness", e.target.value)
              }
              required
            />
          </Form.Item>
          {/* Exterior Condition */}
          <Form.Item htmlFor="exteriorCondition" label="Exterior Condition">
            <Input
              type="text"
              id="exteriorCondition"
              name="exteriorCondition"
              value={vehicleInfo.exteriorCondition}
              onChange={(e) =>
                handleInputChange("exteriorCondition", e.target.value)
              }
              required
            />
          </Form.Item>
          {/* Maintenance Notes */}
          <Form.Item htmlFor="maintenanceNotes" label="Maintenance Notes">
            <TextArea
              showCount
              maxLength={100}
              style={{
                height: 120,
                marginBottom: 24
              }}
              id="maintenanceNotes"
              name="maintenanceNotes"
              value={vehicleInfo.maintenanceNotes}
              onChange={(e) =>
                handleInputChange("maintenanceNotes", e.target.value)
              }
            />
          </Form.Item>
          <Button type="primary">Submit Inspection</Button>
        </Form>
      </Card>
    </div>
  );
}

export default VehicleInspectionForm;
