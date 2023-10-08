import { useState } from "react";
import { Divider, Form, Option, Input, List, Button, Select, Card } from "antd";
import countryCodesIndexed from "./countryCodes";

export default function VehicleIncidentReport() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="1">+1</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <Card title="Vehicle Accident Report">
        <div style={{}}>
          <List style={{ display: "flex", backgroundColor: "lightgray" }}>
            <div
              style={{
                verticalAlign: "middle",
                textAlign: "left",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr 1fr 1fr",
                margin: "1px 2px",
                padding: "1px auto"
              }}
            >
              <List.Item>
                1. Stop immediately. Keep calm and be courteous.{" "}
              </List.Item>
              <List.Item>2. Turn on your emergency flashers. </List.Item>
              <List.Item>
                3. Send for help. Don’t go yourself. Call police.{" "}
              </List.Item>
              <List.Item>
                4 Give reasonable help to injured. Do not move other injured
                persons if likely to cause further injury{" "}
              </List.Item>
              <List.Item>5. Immediately notify your supervisor.</List.Item>
              <List.Item>
                6. Obtain and record all the facts on this report
              </List.Item>
              <List.Item>7. Submit this form to your supervisor</List.Item>
              <List.Item>
                8. Do not make a statement of any kind to anyone than police or
                representative of the company.
              </List.Item>
            </div>
          </List>
        </div>
        <Form>
          <Form.Item label="Date Report Prepared">
            <Input type={"date"} required placeholder="Date" />
          </Form.Item>
          <Form.Item label="Date of Accident">
            <Input type={"date"} required placeholder="Date" />
          </Form.Item>
          <Form.Item label="Time of Accident">
            <Input type={"time"} required placeholder="Date" />
          </Form.Item>
          <Form.Item label="Location (city, cross streets, etc)">
            <Input type={"text"} required placeholder="Location of Accident" />
          </Form.Item>
          <Divider direction="horizontal">
            Driver and Vehicle Information
          </Divider>
          <Form.Item label="Drivers Full Name">
            <Input type={"text"} required />
          </Form.Item>

          <Form.Item label="Drivers Telephone No.">
            <Input addonBefore={prefixSelector} required />
          </Form.Item>
          <Form.Item label="Company Vehicle Number (if applicable)"></Form.Item>
          <Form.Item label="Drivers DOB"></Form.Item>
          <Form.Item label="Year, Make, and Model of Vehicle"></Form.Item>
          <Form.Item label="Vehicle Identification No."></Form.Item>
          <Form.Item label="Describe the Damage to the Vehicle"></Form.Item>
        </Form>
      </Card>
    </div>
  );
}
