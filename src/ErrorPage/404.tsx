import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router';

const App: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to={'/admin/auth/login'} className='underline hover:underline text-blue-600 hover:text-blue-600 font-semibold text-[15px]'>Login Page</Link>}
    />
);

export default App;