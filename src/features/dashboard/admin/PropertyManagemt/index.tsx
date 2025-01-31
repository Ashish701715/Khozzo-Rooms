import { Suspense, useEffect, useState } from "react";
import PropertyListComponents from "./PropertyList";
import { PropertyListApi } from "@/utils/api";
import { useSelector } from 'react-redux';

export default function Index() {
    const searchText = useSelector((state: any) => state.search.searchText);
    const GET_PROPERTY_LIST = JSON.stringify({
        query: `
          query { 
            property_information { 
              property_id 
              property_name 
              property_type 
              num_rooms 
              fixed_amount 
              sharing_percentage 
              owner_information { 
                owner_name 
                owner_contact_number 
                owner_email 
              } 
              property_address { 
                address 
                city 
                state 
                country 
                verifyed_property
              } 
            } 
          }
        `,
        variables: {},
        operationName: "GetPropertyList",
        search: JSON.parse(JSON.stringify({
            name: 'ashish',
            classs:10
        }))
    })

    const [PropertyList, setPropertyList] = useState([]);
    useEffect(() => {
        const timeOut = setTimeout(async () => {
            try {
                const PropertyList = await PropertyListApi(GET_PROPERTY_LIST);
                if (PropertyList && PropertyList?.data) {
                    setPropertyList(PropertyList?.data?.data?.property_information);
                }
            } catch (error) {
                console.error(error);
            }
        }, 100);

        return () => clearTimeout(timeOut);
    }, [searchText])

    return (
        <>
            <div>
                <Suspense fallback={<><span>loading...</span></>}>
                    <PropertyListComponents PropertyList={PropertyList} />
                </Suspense>
            </div>
        </>
    )
}