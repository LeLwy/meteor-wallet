import React from 'react';
import { Wallet } from './Wallet.jsx';
import { ContactForm } from './ContactForm.jsx';
import { ContactList } from './ContactList.jsx';

export const Home = () => (
    <>
        <Wallet />
        <ContactForm />
        <ContactList />
    </>
);