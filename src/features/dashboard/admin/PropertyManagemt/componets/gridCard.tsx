import { LucideIcon, LucideEdit, LucideCheckCircle, Edit, Delete } from 'lucide-react';

const PropertyCard = (props: any) => {
    const { title, location, price, size, bedrooms, bathrooms } = props;

    return (
        <div className="bg-white rounded-lg shadow-md  p-3 hover:scale-105 transition-transform duration-300 mt-5">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold truncate">{title}</h2>
                <div className="text-xl flex space-x-2">
                    <div className="cursor-pointer">
                        <Edit className="text-gray-500 w-4 h-4" />
                    </div>
                    <div className="cursor-pointer">
                        <Delete className="text-green-500 w-4 h-4" />
                    </div>
                </div>
            </div>
            <div className="mt-2 space-y-1">
                <p className="flex items-start justify-between">
                    <strong className="text-gray-500">Location:</strong>
                    <span className="text-gray-700">{location}</span>
                </p>
                <p className="flex items-start justify-between">
                    <strong className="text-gray-500">Price:</strong>
                    <span className="text-gray-700">{price}</span>
                </p>
                <p className="flex items-start justify-between">
                    <strong className="text-gray-500">Size:</strong>
                    <span className="text-gray-700">{size}</span>
                </p>
                <p className="flex items-start justify-between">
                    <strong className="text-gray-500">Bedrooms:</strong>
                    <span className="text-gray-700">{bedrooms}</span>
                </p>
                <p className="flex items-start justify-between">
                    <strong className="text-gray-500">Bathrooms:</strong>
                    <span className="text-gray-700">{bathrooms}</span>
                </p>
            </div>
        </div>
    );
};

export default PropertyCard;