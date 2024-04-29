import React from 'react';
import { Wallet } from './Wallet.jsx';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { Loading } from './components/Loading.jsx';
import { RoutePaths } from './RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const { loggedUser, isLoadingLoggedUser } = useLoggedUser();

    const navigate = useNavigate();

    if(isLoadingLoggedUser){
        return <Loading />
    };

    if(!loggedUser){
        return (
            <div className='flex flex-col items-center p-12'>
                <div>Welcome !</div>
                <div>
                    Please <a 
                        className='text-indigo-800 cursor-pointer'
                        onClick={() => navigate(RoutePaths.ACCESS)}>
                        Sign Up
                    </a>
                </div>
            </div>
        )
    }

    return(
        <>
            <Wallet />
            <ContactForm />
            <ContactList />
        </>
    )
};