import React, { FC } from 'react';

interface HomeUpProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const Dashboard: FC<HomeUpProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M3 10.25H7.5C7.9125 10.25 8.25 9.9125 8.25 9.5V3.5C8.25 3.0875 7.9125 2.75 7.5 2.75H3C2.5875 2.75 2.25 3.0875 2.25 3.5V9.5C2.25 9.9125 2.5875 10.25 3 10.25ZM3 16.25H7.5C7.9125 16.25 8.25 15.9125 8.25 15.5V12.5C8.25 12.0875 7.9125 11.75 7.5 11.75H3C2.5875 11.75 2.25 12.0875 2.25 12.5V15.5C2.25 15.9125 2.5875 16.25 3 16.25ZM10.5 16.25H15C15.4125 16.25 15.75 15.9125 15.75 15.5V9.5C15.75 9.0875 15.4125 8.75 15 8.75H10.5C10.0875 8.75 9.75 9.0875 9.75 9.5V15.5C9.75 15.9125 10.0875 16.25 10.5 16.25ZM9.75 3.5V6.5C9.75 6.9125 10.0875 7.25 10.5 7.25H15C15.4125 7.25 15.75 6.9125 15.75 6.5V3.5C15.75 3.0875 15.4125 2.75 15 2.75H10.5C10.0875 2.75 9.75 3.0875 9.75 3.5Z" fill="#A1AEC0" />
        </svg>
    );
};

export default Dashboard;
