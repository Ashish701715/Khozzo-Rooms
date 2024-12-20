import React, { useEffect, useState } from 'react';
import { Input, Select, TreeSelect } from 'antd';
import { fetchCountry } from '@/utils/api';
import { CircleHelp } from 'lucide-react';
type Property = {
    setFormData: any
    formData: any
    Errors: any
    setErrors: any
}
const App: React.FC<Property> = (props) => {

    const { setFormData, formData, Errors, setErrors } = props;
    const [CountyList, setCountries] = useState([]);
    useEffect(() => {
        const fetchApi = setTimeout(async () => {
            const country = await fetchCountry();
            setCountries(country)
        }, 200);

        return (() => clearTimeout(fetchApi));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleInputChangeCountry = (value: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prevData: any) => ({
            ...prevData,
            ['Country']: value,
        }));
    }
    return (
        <>
            <div className='bg-white border p-1 rounded-[10px] shadow-lg mb-3 p-3'>
                <div className="section-heading mb-5">
                    <span className='font-semibold text-[20px]'>Property Infomation: </span>
                </div>
                <div className='mb-4'>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="propertyName" className="input-label">Property Name</label>
                                <Input value={formData?.propertyName} onChange={handleInputChange} name="propertyName" placeholder="Property Name" />
                                <span className='text-[12px] text-danger'>{Errors?.propertyName}</span>
                            </div>

                            <div>
                                <label htmlFor="propertyType" className="input-label">Property Type</label>
                                <select value={formData?.propertyType} onChange={handleInputChange} name="propertyType" className="border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 h-[32px] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected disabled>Property Type</option>
                                    <option value="Leased">Leased</option>
                                    <option value="Revenue_Sharing">Revenue Sharing</option>
                                </select>
                                <span className='text-[12px] text-danger'>{Errors?.propertyType}</span>
                            </div>


                            {(formData?.propertyType === "Leased" || formData?.propertyType === "Revenue_Sharing") && (
                                <>
                                    <div>
                                        <label htmlFor="FixedAmount" className="input-label">
                                            Fixed Amount
                                        </label>
                                        <Input
                                            value={formData?.FixedAmount}
                                            onChange={handleInputChange}
                                            name="FixedAmount"
                                            placeholder="Fixed Amount"
                                        />
                                        <span className='text-[12px] text-danger'>{Errors?.FixedAmount}</span>
                                    </div>

                                    {formData?.propertyType === "Revenue_Sharing" && (
                                        <div>
                                            <label
                                                htmlFor="Percentage_Amount"
                                                className="input-label flex items-center gap-2"
                                            >
                                                Percentage Amount
                                                <span
                                                    title="Please enter a number between 0 and 100."
                                                    className="text-blue-600"
                                                >
                                                    <CircleHelp strokeWidth={2} width={15} className="cursor-pointer" />
                                                </span>
                                            </label>

                                            <Input
                                                type='number'
                                                value={formData?.Percentage_Amount}
                                                onChange={(e) => {
                                                    handleInputChange(e);
                                                }}
                                                name="Percentage_Amount"
                                                placeholder="Percentage Amount (0-100)"
                                            />
                                            <span className='text-[12px] text-danger'>{Errors?.Percentage_Amount}</span>
                                        </div>
                                    )}
                                </>
                            )}

                            <div>
                                <label htmlFor="numberOfRooms" className="input-label">Number of Rooms</label>
                                <Input value={formData?.numberOfRooms} onChange={handleInputChange} name="numberOfRooms" placeholder="Number of Rooms" />
                                <span className='text-[12px] text-danger'>{Errors?.numberOfRooms}</span>
                            </div>

                            <div>
                                <label htmlFor="carpetArea" className="input-label">Carpet Area (optional)</label>
                                <Input value={formData?.carpetArea} onChange={handleInputChange} name="carpetArea" placeholder="Carpet Area" />
                            </div>

                            {/* Address Details Section */}
                            <div>
                                <label htmlFor="addressLine1" className="input-label">Address Line 1</label>
                                <Input value={formData?.addressLine1} onChange={handleInputChange} name="addressLine1" placeholder="Address Line 1" />
                                <span className='text-[12px] text-danger'>{Errors?.addressLine1}</span>
                            </div>

                            <div>
                                <label htmlFor="addressLine2" className="input-label">Address Line 2 (optional)</label>
                                <Input value={formData?.addressLine2} onChange={handleInputChange} name="addressLine2" placeholder="Address Line 2" />
                            </div>

                            <div>
                                <label htmlFor="city" className="input-label">City</label>
                                <Input value={formData?.city} onChange={handleInputChange} name="city" placeholder="City" />
                            </div>

                            <div>
                                <label htmlFor="stateProvince" className="input-label">State/Province</label>
                                <Input value={formData?.stateProvince} onChange={handleInputChange} name="stateProvince" placeholder="State/Province" />
                            </div>

                            <div>
                                <label htmlFor="zipPostalCode" className="input-label">Zip/Postal Code</label>
                                <Input value={formData?.zipPostalCode} onChange={handleInputChange} name="zipPostalCode" placeholder="Zip/Postal Code" />
                            </div>

                            <div>
                                <label htmlFor="country" className="input-label">Country</label>
                                <TreeSelect
                                    value={formData?.Country} onChange={handleInputChangeCountry}
                                    showSearch
                                    style={{ width: '100%' }}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="select Country"
                                    allowClear
                                    treeDefaultExpandAll
                                    treeData={
                                        CountyList.map((data: any) => ({
                                            value: data.name?.common,
                                            title: data.name?.common,
                                        }))
                                    }
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Property Infomation section end  */}

            {/* Property Owner Infomation section start  */}
            <div className='bg-white border p-1 rounded-[10px] shadow-lg mb-3 p-3'>
                <div className="section-heading mb-5">
                    <span className='font-semibold text-[20px]'>Owner Infomation: </span>
                </div>
                <div className='mb-4'>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Property Owner Information Section */}
                            <div>
                                <label htmlFor="ownerName" className="input-label">Owner Name</label>
                                <Input value={formData?.ownerName} onChange={handleInputChange} name="ownerName" placeholder="Owner Name" />
                                <span className='text-[12px] text-danger'>{Errors?.ownerName}</span>
                            </div>

                            <div>
                                <label htmlFor="ownerContact" className="input-label">Contact Number</label>
                                <Input value={formData?.ownerContact} onChange={handleInputChange} name="ownerContact" placeholder="Owner Contact Number" />
                                <span className='text-[12px] text-danger'>{Errors?.ownerContact}</span>
                            </div>

                            <div>
                                <label htmlFor="ownerContact" className="input-label">Contact Email</label>
                                <Input value={formData?.ownerEmail} onChange={handleInputChange} name="ownerEmail" placeholder="Owner Contact Email" />
                                <span className='text-[12px] text-danger'>{Errors?.ownerEmail}</span>
                            </div>

                            <div>
                                <label htmlFor="ownerAddress1" className="input-label">Address Line 1</label>
                                <Input value={formData?.ownerAddress1} onChange={handleInputChange} name="ownerAddress1" placeholder="Owner Address Line 1" />
                            </div>

                            <div>
                                <label htmlFor="ownerAddress2" className="input-label">Address Line 2 (optional)</label>
                                <Input value={formData?.ownerAddress2} onChange={handleInputChange} name="ownerAddress2" placeholder="Owner Address Line 2" />
                            </div>

                            <div>
                                <label htmlFor="ownerCity" className="input-label">City</label>
                                <Input value={formData?.ownerCity} onChange={handleInputChange} name="ownerCity" placeholder="Owner City" />
                            </div>

                            <div>
                                <label htmlFor="ownerStateProvince" className="input-label">State/Province</label>
                                <Input value={formData?.ownerStateProvince} onChange={handleInputChange} name="ownerStateProvince" placeholder="State/Province" />
                            </div>

                            <div>
                                <label htmlFor="ownerZipPostalCode" className="input-label">Zip/Postal Code</label>
                                <Input value={formData?.ownerZipPostalCode} onChange={handleInputChange} name="ownerZipPostalCode" placeholder="Zip/Postal Code" />
                            </div>

                            <div>
                                <label htmlFor="ownerCountry" className="input-label">Country</label>
                                <Input value={formData?.ownerCountry} onChange={handleInputChange} name="ownerCountry" placeholder="Owner Country" />
                            </div>

                            <div>
                                <label htmlFor="ownerAccountNo" className="input-label">Account Number</label>
                                <Input value={formData?.ownerAccountNo} onChange={handleInputChange} name="ownerAccountNo" placeholder="Owner Account Number" />
                            </div>

                            <div>
                                <label htmlFor="ownerIFSCCode" className="input-label">IFSC Code</label>
                                <Input value={formData?.ownerIFSCCode} onChange={handleInputChange} name="ownerIFSCCode" placeholder="Owner IFSC Code" />
                            </div>

                            <div>
                                <label htmlFor="ownerBankName" className="input-label">Bank Name</label>
                                <Input value={formData?.ownerBankName} onChange={handleInputChange} name="ownerBankName" placeholder="Owner Bank Name" />
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            {/* Property Owner Infomation section end  */}
        </>
    );
};

export default App;