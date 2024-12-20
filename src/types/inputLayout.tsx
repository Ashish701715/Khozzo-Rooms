import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
interface Field {
    field_id: string;
    field_name: string;
    field_type: string;
    label: string;
    placeholder?: string;
    options?: string[];
    required: boolean;
}

interface Section {
    section_title: string;
    fields: Field[];
}

interface FormConfig {
    form_id: string;
    page_config: {
        title: string;
    };
    config: {
        form_information: {
            form_headings: string;
            section: Section[];
        };
    };
}

interface FormBuilderProps {
    formData: FormConfig;
}

const inputlayout = (props: any) => {
    const [formState, setFormState] = useState<any>({});

    const handleFieldChange = (e: React.ChangeEvent<any>, fieldId: string) => {
        const { value, checked, type } = e.target;
        setFormState((prevState: any) => ({
            ...prevState,
            [fieldId]: type === 'checkbox' ? checked : value,
        }));
    };

    const renderField = (field: Field) => {
        const { field_type, field_id, label, field_name, options, required } = field;

        switch (field_type) {
            case 'text':
                return (
                    <div key={field_id} className='mb-3'>
                        <Input type="text" id={field_id} name={field_name} required={required} onChange={(e) => handleFieldChange(e, field_id)} />
                    </div>
                );

            case 'number':
                return (
                    <div key={field_id} className='mb-3'>
                        <Input type="number" id={field_id} name={field_name} required={required} onChange={(e) => handleFieldChange(e, field_id)} />
                    </div>
                );

            case 'select':
                return (
                    <div key={field_id}>
                        <Select name={field_name}>
                            <SelectTrigger className="mb-3" >
                                <SelectValue placeholder={label} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {options?.map((option, index) => (
                                        <SelectItem key={index} value={option} >{option}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                );

            case 'checkbox':
                return (
                    <div className="flex items-center space-x-2 mb-3" key={field_id}>
                        <Checkbox id={field_id}
                            name={field_name}
                            required={required} onChange={(e) => handleFieldChange(e, field_id)} />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {label}
                        </label>
                    </div>
                );

            default:
                return null;
        }
    };
    return (
        props?.data?.config?.form_information?.section.map((section: any, index: number) => (
            <div key={index}>
                <h4>{section.section_title}</h4>
                {section.fields.map((field: any) => renderField(field))}
            </div>
        ))
    );
};

export { inputlayout };
