import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>yooo yoo: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;