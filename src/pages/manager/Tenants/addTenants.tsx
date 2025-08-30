import  { useState } from "react";
import { Form, Input, Select, Button, Card, Row, Col, Upload, DatePicker } from "antd";
import { ArrowLeft } from 'lucide-react';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";

const { Option } = Select;

const featureOptions = ["Kitchen", "Parking", "Common Room", "Gym", "Garden / Play Area", "AC", "Fan", "Other"];

const addTenants = () => {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = useState("1");
    

    const handleNext = () => {
        setCurrentTab((prev) => (parseInt(prev) + 1).toString());
    };

    const handleBack = () => {
        navigate("/tenant")
    }
    
    

    const [fileList, setFileList] = useState([]);

    const handleChange = ({ fileList }: { fileList: any }) => {
        setFileList(fileList);
    };

    return (
        <>
            <div>
                <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
                    <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
                    <span style={{ color: "#007bff" }}>Add Tenants</span>
                </p>

                <h2 className="text-xl font-semibold mb-5 border-b-2 border-[#E2E2E2] inline-block w-full flex items-center">
                    <ArrowLeft className="mr-2 cursor-pointer" onClick={handleBack} /> Add Tenants
                </h2>

            </div>

            <div className="w-[188px] h-[47px] rounded-[45px]  mb-4 top-[196px] left-[320px] bg-[#E7EAF0] flex items-center justify-center">
                Tenant Information
            </div>

            <Card className="main_card">

                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Full Name">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Age">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Gender">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Contact Number">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Email Address">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Tenant Photo">
                                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full">
                                    <Upload
                                        showUploadList={false} 
                                        beforeUpload={() => false}
                                        onChange={handleChange}
                                    >
                                        <Button icon={<UploadOutlined />} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                            Choose File +
                                        </Button>
                                    </Upload>
                                    <Input
                                        className="border-none shadow-none focus:ring-0 ml-2 text-gray-400"
                                        placeholder="Upload images here"
                                        disabled
                                    />
                                </div>
                            </Form.Item>
                        </Col>
                        <Col span={12}>

                            <Form.Item className="label_color" label="Tenant Photo">
                                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full">
                                    <Upload
                                        showUploadList={false}
                                        beforeUpload={() => false} 
                                        onChange={handleChange}
                                    >
                                        <Button icon={<UploadOutlined />} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                            Choose File +
                                        </Button>
                                    </Upload>
                                    <Input
                                        className="border-none shadow-none focus:ring-0 ml-2 text-gray-400"
                                        placeholder="Upload images here"
                                        disabled
                                    />
                                </div>
                            </Form.Item>

                        </Col>


                    </Row>


                </Form>
            </Card>

            <div className="w-[188px] h-[47px] rounded-[45px]  m-4 top-[196px] left-[320px] bg-[#E7EAF0] flex items-center justify-center">
                Property Details
            </div>

            <Card className="main_card">

                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Assigned Property Name">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Unit Number/Flat">
                            <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Lease Start Date">
                            <DatePicker
                                     size="large"
                                    className="input_color w-full"
                                    format="DD-MM-YY"
                                    placeholder="dd-mm-yy"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Lease End Date">
                            <DatePicker
                                     size="large"
                                    className="input_color w-full"
                                    format="DD-MM-YY"
                                    placeholder="dd-mm-yy"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Rental Amount">
                           <Input className="input_color" size="large" prefix="₹" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Rental Terms">
                           <Input className="input_color" size="large" prefix="₹" />
                            </Form.Item>
                        </Col>
                       
                      
                    </Row>


                </Form>
            </Card>

            <div className="w-[188px] h-[47px] rounded-[45px]  m-4 top-[196px] left-[320px] bg-[#E7EAF0] flex items-center justify-center">
                Payment Details
            </div>

            <Card className="main_card">

                <Form layout="vertical">
                    <Row gutter={16}>
                    <Col span={8}>
                            <Form.Item className="label_color" label="Payment Method">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Payment  History">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Outstanding Amount">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                    </Row>


                </Form>
            </Card>
            <div className="w-[188px] h-[47px] rounded-[45px]  m-4 top-[196px] left-[320px] bg-[#E7EAF0] flex items-center justify-center">
                Tenanacy Status
            </div>

            <Card className="main_card">

                <Form layout="vertical">
                <Row gutter={16}>
                    <Col span={8}>
                            <Form.Item className="label_color" label="Active / Inactive">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Move - IN Date">
                            <DatePicker
                                     size="large"
                                    className="input_color w-full"
                                    format="DD-MM-YY"
                                    placeholder="dd-mm-yy"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item className="label_color" label="Notice Period Given">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                    </Row>


                </Form>
            </Card>


            {/* Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <Button type="default">Cancel</Button>
                <Button type="primary" className="ml-2" onClick={handleNext}>
                    Add Tenant
                </Button>
            </div>
        </>
    );
};

export default addTenants;
