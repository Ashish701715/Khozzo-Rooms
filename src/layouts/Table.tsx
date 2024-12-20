import { Button, Card, Input } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import { addNewProperty } from '@/utils/api';


const MultiStepForm = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.target as HTMLFormElement);
        try {
            const response = addNewProperty(formdata);
            console.log(response);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const [formData, setFormData] = useState([])
    useEffect(() => {
        const timeout = setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:5173/form.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch form data');
                }
                const formApi = await response.json();
                setFormData(formApi || []);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        }, 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Card className=''>
            <div className="p-5">
                <form onSubmit={handleSubmit}>
                    <Form data={formData} />
                    <Button className='mr-3' size='sm' type='submit'>Save</Button>
                    <Button className='mr-3' size='sm'>Cancel</Button>
                </form>
            </div>
        </Card>
    );
};

export default MultiStepForm;