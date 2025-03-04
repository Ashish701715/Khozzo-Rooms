import  { useState } from "react";
import { Form, Input, Select, Button, Card, Row, Col } from "antd";
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router";



const addManager = () => {
    const navigate = useNavigate()
    const [currentTab, setCurrentTab] = useState("1");

    const handleBack = () => {
        navigate("/manager")
    }

    const [fileList, setFileList] = useState([]);


    return (
        <>
            <div>
                <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
                    <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
                    <span style={{ color: "#007bff" }}>Add Manager</span>
                </p>

                <h2 className="text-xl font-semibold mb-5 border-b-2 border-[#E2E2E2] inline-block w-full flex items-center">
                    <ArrowLeft className="mr-2 cursor-pointer" onClick={handleBack} /> Add New Manager
                </h2>

            </div>

            <Card className="main_card">

                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Manager Name">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Contact Number">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Address Line 1">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Address Line 2">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Account Number">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="IFSC Code">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Bank Name">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item className="label_color" label="Other">
                                <Input className="input_color" size="large" />
                            </Form.Item>
                        </Col>
                       


                    </Row>


                </Form>
            </Card>

            


            {/* Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
                <Button type="default">Cancel</Button>
                <Button type="primary" className="ml-2" >
                    Add Manager
                </Button>
            </div>
        </>
    );
};

export default addManager;
