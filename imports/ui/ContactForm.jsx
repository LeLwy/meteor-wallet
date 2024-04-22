import React, { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const saveContact = (e) => {

        ContactsCollection.insert({ name, email, imageUrl });
        setName('');
        setEmail('');
        setImageUrl('');
    }

    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name" 
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Image URL</label>
                <input 
                type="text" 
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                id="imageUrl" 
                />
            </div>
            <div>
                <button type='submit' onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}