import React, { useState } from "react";
import { Tabs, Table, Checkbox, Button, Pagination, Tooltip, Modal } from "antd";
import { Eye, PhoneCall, ArrowDownToLine, Tag } from "lucide-react";
import { useNavigate } from "react-router";


const { TabPane } = Tabs;
const PAGE_SIZE = 5;

const ManagerTable = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState("Payment History");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log("OK Clicked");
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        console.log("Cancel Clicked");
        setIsModalOpen(false);
    };

    const dataSource = [
        { id: "1", name: "John Doe", accountNo: "AC123456", address1: "123 Main Street", address2: "Apt 4B", contact: "+1 555-1234" },
        { id: "2", name: "Jane Smith", accountNo: "AC654321", address1: "456 Elm Avenue", address2: "Suite 22", contact: "+1 555-5678" },
        { id: "3", name: "Alex Johnson", accountNo: "AC789012", address1: "789 Oak Street", address2: "Suite 10", contact: "+1 555-9012" },
    ];

    const handleSelectAll = (e: any) => {
        if (e.target.checked) {
            setSelectedRowKeys(dataSource.map((item: any) => item.id));
        } else {
            setSelectedRowKeys([]);
        }
    };
    


    const handleRowSelect = (id: any) => {
        setSelectedRowKeys((prev: any) =>
            prev.includes(id) ? prev.filter((key: any) => key !== id) : [...prev, id]
        );
    };
    
    

    const columns = [
        {
            title: <Checkbox onChange={handleSelectAll} checked={selectedRowKeys.length === dataSource.length} />,
            dataIndex: "checkbox",
            render: (_: unknown, record: any) => (
                <Checkbox
                    checked={selectedRowKeys.includes(record.id)}
                    onChange={() => handleRowSelect(record.id)}
                />
            )
        },
        { title: "Manager Name", dataIndex: "name" },
        { title: "Account No.", dataIndex: "accountNo" },
        { title: "Address Line 1", dataIndex: "address1" },
        { title: "Address Line 2", dataIndex: "address2" },
        { title: "Contact No.", dataIndex: "contact" },
        {
            title: "Action",
            dataIndex: "action",
            render: () => (
                <div className="flex gap-3">
                    <Tooltip title="View">
                        <Button onClick={showModal} shape="circle" icon={<Eye size={16} />} />
                    </Tooltip>

                </div>
            ),
        },
    ];

    return (
        <div>
            {/* Breadcrumb Navigation */}
            <div className="flex justify-between mb-3 items-center">
                <div className="text-gray-500 text-sm">
                    Home <span className="text-blue-500">› Payments</span>
                </div>
            </div>

            {/* Dashboard Summary */}
            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                    <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#20AA70] hover:text-white p-4 rounded-lg cursor-pointer">
                        <div>
                            <h2 className="font-total-text ">Total Revenue</h2>
                            <p className="headertext mt-2">15000</p>
                        </div>
                        <img src="/svg/growth.svg" alt="" />
                    </div>
                    <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#7152F3] hover:text-white p-4 rounded-lg cursor-pointer">
                        <div>
                            <h2 className="font-total-text ">Total Profit</h2>
                            <p className="headertext mt-2">15000</p>
                        </div>
                        <img src="/svg/profit.svg" alt="" />
                    </div>

                    {/* Download & Filter Buttons */}
                    <div className="absolute right-0 bottom-[-60px] p-4 flex gap-2">
                        <button className="mr-2">
                            <img src="/svg/Group.svg" alt="" />
                        </button>
                        <button className="relative">
                            <img src="/svg/Rectangle 3.svg" alt="" className="w-full h-auto" />
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold flex items-center gap-2">
                                <ArrowDownToLine />
                                <span>Download</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <Tabs activeKey={currentTab} onChange={(key) => { setCurrentTab(key); setCurrentPage(1); }}>
                <TabPane tab="Payment History" key="Payment History">
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        rowKey="id"
                        pagination={false}
                    />
                </TabPane>
                <TabPane tab="Pending Payments" key="Pending Payments">
                    <Table dataSource={dataSource} columns={columns} rowKey="id" pagination={false} />
                </TabPane>
                <TabPane tab="Pending Reports" key="Pending Reports">
                    <Table dataSource={dataSource} columns={columns} rowKey="id" pagination={false} />
                </TabPane>
            </Tabs>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <Pagination
                    current={currentPage}
                    onChange={setCurrentPage}
                    pageSize={PAGE_SIZE}
                />
            </div>

            <Modal
                title={<span className="font-semibold text-lg">Transactions - Tenant Name</span>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                style={{width: "444px" , height: "537px"}}

            >
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Payment Details</h3>
                    <table className="w-full border-collapse">
                        <tbody>
                            <tr>
                                <td className="font-semibold py-2">Payment ID</td>
                                <td>123456789</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>

                            <tr>
                                <td className="font-semibold py-2">Payment Method</td>
                                <td>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                        alt="PayPal"
                                        className="h-5 inline-block"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2">Description</td>
                                <td>2BHK Flat</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2">Date & Time</td>
                                <td>11-01-2025 (9:00 AM)</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2">Amount</td>
                                <td>$1000.00</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2">City</td>
                                <td>Mohali</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="w-full h-[1px] bg-gray-300"></div>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-semibold py-2">Status</td>
                                <td>
                                    <Tag color="green">Success</Tag>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </div>
    );
};

export default ManagerTable;
