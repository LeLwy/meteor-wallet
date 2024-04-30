import React from 'react';
import { Passwordless } from 'meteor/quave:accounts-passwordless-react';
import { useNavigate } from 'react-router-dom';
 
export const Access = () => {

    const navigate = useNavigate();
    
    const onEnterToken = () => {
        navigate.push('/');
    };
    
    return (
        <Passwordless
        onEnterToken={onEnterToken}
        />
    );
};