import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { Loading } from './Loading.jsx';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from '../RoutePaths.jsx';

export const AdminOnly = ({ children }) => {

    const [ isAdmin, setIsAdmin ] = useState();

    const location = useLocation();

    useEffect(() => {

        Meteor.call('roles.isAdmin', (error, isAdminReturn) => {

            if(error){

                setIsAdmin(false);
                return;
            };

            setIsAdmin(isAdminReturn);
        });

    }, []);

    if(isAdmin == null){
        return <Loading />
    };

    if(!isAdmin){
        return <Navigate to={RoutePaths.HOME} state={{from: location}} replace />
    };

    return children;
}