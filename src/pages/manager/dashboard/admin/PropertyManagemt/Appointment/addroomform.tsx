import React, { useState } from "react";
import { Form, Input, Select, Button, Card, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Option } = Select;

const PropertyManager = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleNext = () => {
    setCurrentTab((prev) => (parseInt(prev) + 1).toString());
  };

  const handleBack = () => {
    setCurrentTab((prev) => (parseInt(prev) - 1).toString());
  };

  return (
    <Card className="main_card">
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item className="label_color" label="Property Name">
              <Input className="input_color" size="large" placeholder="Enter property name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Property Type">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="house">House</Option>
                <Option value="apartment">Apartment</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Purpose">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="sale">Sale</Option>
                <Option value="rent">Rent</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Status">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="available">Available</Option>
                <Option value="sold">Sold</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Area">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="1000sqft">1000 sqft</Option>
                <Option value="2000sqft">2000 sqft</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Number of Rooms">
              <Input className="input_color" size="large" type="number" placeholder="Enter number of rooms" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Furnished Status">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="furnished">Furnished</Option>
                <Option value="unfurnished">Unfurnished</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Construction Year">
              <Input className="input_color" size="large" type="number" placeholder="Enter year" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Ownership Type">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="owned">Owned</Option>
                <Option value="rented">Rented</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Property ID">
              <Input className="input_color" size="large" placeholder="Enter property ID" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Landmark">
              <Select className="input_color" size="large" placeholder="Select">
                <Option value="near park">Near Park</Option>
                <Option value="city center">City Center</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item className="label_color" label="Coordinates">
              <Input className="input_color" size="large" placeholder="Latitude, Longitude" />
            </Form.Item>
          </Col>
        </Row>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
          <Button type="default" disabled={currentTab === "1"} onClick={handleBack}>
            <LeftOutlined /> Back
          </Button>
          <Button type="primary" onClick={handleNext}>
            Next Step <RightOutlined />
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default PropertyManager;
