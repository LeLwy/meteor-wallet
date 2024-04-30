import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useAlert } from 'meteor/quave:alert-react-tailwind';
import { RoutePaths } from './RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from './components/ErrorAlert.jsx';

export const RemoveTransaction = () => {

    const { openAlert } = useAlert();

    const navigate = useNavigate();

    const [transactionId, setTransactionId] = useState("");
    const [error, setError] = useState();

    const removeTransaction = (e) => {

        e.preventDefault();

        Meteor.call('transactions.remove', transactionId, (err) => {
            if(err) {
                console.error('Error trying to remove a transaction', err);
                setError(err)
                return;
            }
            setTransactionId('');
            setError(null);
            openAlert('The transaction has been removed');
        });
    };

    return (
        <div className='flex flex-col items-center'>
            <h3 className='px-3 py-2 text-base font-medium'>
                Remove transaction
            </h3>
            {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
            <form className="mt-6 flex flex-col">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <label
                            htmlFor="transactionId"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Transaction ID
                        </label>
                        <input
                            type="text"
                            id="transactionId"
                            value={transactionId}
                            onChange={(e) => setTransactionId(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <button 
                        className="bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={() => navigate(RoutePaths.HOME)}
                        >
                        Back to home
                    </button>
                    <button 
                        className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={removeTransaction}
                        type='submit'
                        >Remove
                    </button>
                </div>
            </form>
        </div>
    );
}