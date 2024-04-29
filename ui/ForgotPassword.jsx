import React, { useState } from 'react';
import { useAlert } from 'meteor/quave:alert-react-tailwind';
import { Accounts } from 'meteor/accounts-base';
import { RoutePaths } from './RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from './components/ErrorAlert.jsx';
 
export const ForgotPassword = () => {
    
    const { openAlert } = useAlert();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState();
    
    const forgotPassword = (e) => {

        e.preventDefault();

        Accounts.forgotPassword({ email }, (err) => {
            if(err) {
                setError(err)
                return;
            }
            setEmail('');
            setError(null);
            openAlert('You should receive a reset email shortly');
        });
    };

    return (
        <div className='flex flex-col items-center'>
            <h3 className='px-3 py-2 text-lg text-base font-medium'>
                Forgot password
            </h3>
            {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
            <form className="mt-6 flex flex-col">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <button 
                        className="bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={() => navigate(RoutePaths.ACCESS)}
                        >
                        Back to access
                    </button>
                    <button 
                        className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={forgotPassword}
                        type='submit'
                        >Send reset link
                    </button>
                </div>
            </form>
        </div>
    );
};