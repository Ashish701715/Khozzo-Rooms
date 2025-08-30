import React, { useState } from "react";
import { Form, Input, Select, Button, Card, Row, Col, Checkbox } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Option } = Select;

const featureOptions = ["Kitchen", "Parking", "Common Room", "Gym", "Garden / Play Area", "AC", "Fan", "Other"];

const PropertyManager = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const handleNext = () => {
    setCurrentTab((prev) => (parseInt(prev) + 1).toString());
  };

  return (
   <>
    <div>
        <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
          <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
          <span style={{ color: "#007bff" }}>Add Room</span>
        </p>
      </div>
    <Card className="main_card">
      
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item className="label_color" label="Room Type">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="sale">Sale</Option>
                <Option value="rent">Rent</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Room Number">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Floor Number">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item className="label_color" label="Max Tenants">
              <Input className="input_color" size="large" placeholder="Enter max tenants" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item className="label_color" label="Tenants Type">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="available">Available</Option>
                <Option value="sold">Sold</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Rental Terms">
              <Input className="input_color" size="large" placeholder="Enter rental terms" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Security Deposit">
              <Input className="input_color" size="large" placeholder="Enter security deposit" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Contract Length">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="6 months">6 Months</Option>
                <Option value="12 months">12 Months</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item className="label_color" label="Property Features">
              <Checkbox.Group 
                options={featureOptions} 
                value={selectedFeatures} 
                onChange={setSelectedFeatures} 
              />
            </Form.Item>
          </Col>
        </Row>

       
      </Form>
    </Card>
     {/* Navigation Buttons */}
     <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <Button type="default">Cancel</Button>
          <Button type="primary" className="ml-2" onClick={handleNext}>
            Save <RightOutlined />
          </Button>
        </div>
   </>
  );
};

export default PropertyManager;
