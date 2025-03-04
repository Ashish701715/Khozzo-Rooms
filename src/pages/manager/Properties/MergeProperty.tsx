
import { Button, Input, Pagination, Chip } from '@nextui-org/react';
import AddProperty from './AddProperty';
import { useEffect, useState } from 'react';
import { addNewProperty } from '@/utils/api';
import { message } from 'antd';
import './assets/style.css';

export default function AddPropertyComponents() {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState([]);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await addNewProperty(formData);
            if (response.status === true) {
                message.success(response.message);
                setFormData({})
                setFormData({ propertyType: '' })
                setErrors([])
            } else if (response?.response_code === 411 && response?.error) {
                setErrors(response.error)
            }
            setIsLoading(false);
        } catch (error) {
            setErrors([])
            setIsLoading(false);
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <div className='border-b border-dashed mb-5 p-2 flex justify-end gap-3 '>
                    <Button color='danger' size='sm' className='rounded-sm'>Cancel</Button>
                    <Button type='submit' isLoading={isLoading} color='primary' size='sm' className='rounded-sm'>Save</Button>
                </div> */}
                <div className="addProperty">
                    <AddProperty />
                </div>
            </form>
        </>
    )
}