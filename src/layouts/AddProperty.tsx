import React, { useState } from "react";
import { Form, Input, Select, Button, Steps, Tabs, Card, Row, Col } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import MianCss from './../features/dashboard/admin/PropertyManagemt/assets/mainonly.module.css';
const { Step } = Steps;
const { Option } = Select;
const { TabPane } = Tabs;

const PropertyManager = () => {
    const [currentTab, setCurrentTab] = useState("1");

    const handleNext = () => {
        setCurrentTab((prev) => (parseInt(prev) + 1).toString());
    };

    const handleBack = () => {
        setCurrentTab((prev) => (parseInt(prev) - 1).toString());
    };

    return (
        <div className="main_page_div" style={{}}>
            {/* Breadcrumb */}
            <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
                <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
                <span style={{ color: "#1890ff" }}>Property Manager</span>
            </p>
            {/* Steps Component */}
            {/* <Steps current={parseInt(currentTab) - 1} style={{ marginBottom: 20 }}>
        <Step title="Property Details" />
        <Step title="Address Details" />
        <Step title="Pricing" />
        <Step title="Amenities" />
        <Step title="Documentation" />
        <Step title="Media" />
      </Steps> */}

            {/* Tabs Component */}
            <Tabs activeKey={currentTab} onChange={setCurrentTab} centered>
                <TabPane className="tabs_btn"  tab={<span><span className="number_tab">1</span>Property Details</span>} key="1">
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
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="house">House</Option>
                                            <Option value="apartment">Apartment</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Purpose">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="sale">Sale</Option>
                                            <Option value="rent">Rent</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Status">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="available">Available</Option>
                                            <Option value="sold">Sold</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Area">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
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
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
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
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
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
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
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
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                    Next Step <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>
                <TabPane className="tabs_btn" tab={<span><span className="number_tab">2</span>Address Details</span>} key="2">
                    <Card className="main_card">
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Address Line 1">
                                        <Input className="input_color" size="large" placeholder="Address Line 1" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Address Line 2">
                                        <Input className="input_color" size="large" placeholder="Address Line 2" />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item className="label_color" label="City / Town">
                                        <Input className="input_color" size="large" type="text" placeholder="City / Town" />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item className="label_color" label="State / Province">
                                        <Input className="input_color" size="large" type="text" placeholder="State / Province" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Zip / Postal Code">
                                        <Input className="input_color" size="large" placeholder="Zip / Postal Code" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Neighborhood Type">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Accessibility Features">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Nearby Facilities">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>

                            {/* Navigation Buttons */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                    Next Step <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>
                <TabPane className="tabs_btn" tab={<span><span className="number_tab">3</span>Pricing</span>} key="3">
                    <Card className="main_card">
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Fixed Amount">
                                        <Input className="input_color" size="large" type="text" placeholder="Fixed Amount" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Rent / Lease Amount">
                                        <Input className="input_color" size="large" type="text" placeholder="Rent / Lease Amount" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Security Deposit">
                                        <Input className="input_color" size="large" type="text" placeholder="Security Deposit" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item className="label_color" label="Maintenance Charges">
                                        <Input className="input_color" size="large" type="text" placeholder="Maintenance Charges" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Discount Offers">
                                        <Input className="input_color" size="large" type="text" placeholder="Discount Offers" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Advance Payment Required">
                                        <Input className="input_color" size="large" type="text" placeholder="Advance Payment Required" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Pricing Comments">
                                        <Input className="input_color" size="large" type="text" placeholder="Pricing Comments" />
                                    </Form.Item>
                                </Col>

                            </Row>

                            {/* Navigation Buttons */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                    Next Step <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>
                <TabPane className="tabs_btn" tab={<span><span className="number_tab">4</span>Amenities</span>} key="4">
                    <Card className="main_card">
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Parking Space">
                                        <Input className="input_color" size="large" type="number" placeholder="Number of Slots" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Swimming Pool">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Garden / Lawn or Clubhouse">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Power Backup">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Security Features">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Internet Connectivity">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Water Supply Type">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item className="label_color" label="Fire Safety Compliance">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>


                            </Row>

                            {/* Navigation Buttons */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                    Next Step <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>
                <TabPane className="tabs_btn" tab={<span><span className="number_tab">5</span>Documentation</span>} key="5">
                    <Card className="main_card">
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Property Registration Number">
                                        <Input className="input_color" size="large" type="number" placeholder="Property Registration Number" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Ownership Proof">
                                        <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                            <label htmlFor="file-upload" className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer flex items-center">
                                                Choose File +
                                            </label>
                                            <input id="file-upload" type="file" className="hidden" />
                                            <span className="text-gray-400 px-4 py-2 flex-1">Upload images here</span>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Tax Details">
                                        <Input className="input_color" size="large" type="number" placeholder="Tax Details" />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Compliance Certificate">
                                        <Select variant="borderless" className="input_color" size="large" placeholder="Select">
                                            <Option value="near park">Near Park</Option>
                                            <Option value="city center">City Center</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Previous Sale Record">
                                        <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                            <label htmlFor="file-upload" className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer flex items-center">
                                                Choose File +
                                            </label>
                                            <input id="file-upload" type="file" className="hidden" />
                                            <span className="text-gray-400 px-4 py-2 flex-1">Upload images here</span>
                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item className="label_color" label="Lease Agreement upload">
                                        <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                            <label htmlFor="file-upload" className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer flex items-center">
                                                Choose File +
                                            </label>
                                            <input id="file-upload" type="file" className="hidden" />
                                            <span className="text-gray-400 px-4 py-2 flex-1">Upload images here</span>
                                        </div>
                                    </Form.Item>
                                </Col>

                            </Row>

                            {/* Navigation Buttons */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                    Next Step <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>
                <TabPane className="tabs_btn" tab={<span><span className="number_tab">6</span>Media</span>} key="6">
                    <Card className="main_card">
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col span={12}>
                                <Form.Item className="label_color" label="Property Images">
                                <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                        <label htmlFor="file-upload" className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer flex items-center">
                                            Choose File +
                                        </label>
                                        <input id="file-upload" type="file" className="hidden" />
                                        <span className="text-gray-400 px-4 py-2 flex-1">Upload images here</span>
                                    </div>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                <Form.Item className="label_color" label="Video Tour">
                                    <div className="flex items-center border border-gray-300 rounded-lg w-full overflow-hidden">
                                        <label htmlFor="file-upload" className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer flex items-center">
                                            Choose File +
                                        </label>
                                        <input id="file-upload" type="file" className="hidden" />
                                        <span className="text-gray-400 px-4 py-2 flex-1">Upload images here</span>
                                    </div>
                                </Form.Item>
                                </Col>

                            </Row>

                            {/* Navigation Buttons */}
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                                <Button type="default" disabled>
                                    <LeftOutlined /> Back
                                </Button>
                                <Button type="primary" onClick={handleNext}>
                                Submit <RightOutlined />
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </TabPane>


            </Tabs>
        </div>
    );
};

export default PropertyManager;
