import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { RoutePaths } from './RoutePaths.jsx';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from './components/ErrorAlert.jsx';
 
export const Access = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const [isSignUp, setIsSignUp] = useState(true);
    
    const signUp = (e) => {

        e.preventDefault();

        Accounts.createUser({ email, password}, (err) => {
            if(err) {
                setError(err)
                return;
            }
            navigate(RoutePaths.HOME);
        });
    };
    
    const signIn = (e) => {

        e.preventDefault();

        Meteor.loginWithPassword(email, password, (err) => {
            if(err) {
                setError(err)
                return;
            }
            navigate(RoutePaths.HOME);
        });
    };

    return (
        <div className='flex flex-col items-center'>
            <h3 className='px-3 py-2 text-lg text-base font-medium'>
                {isSignUp ? 'Sign up' : 'Sign in'}
            </h3>
            {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
            <form className="mt-6 flex flex-col">
                <div className="flex flex-col space-y-4">
                    <div className="">
                        <label
                            htmlFor="emal"
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
                    <div className="">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <button 
                        className="bg-red-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={() => navigate(RoutePaths.HOME)}
                        >
                        Back home
                    </button>
                    {isSignUp && (<button 
                        className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={signUp}
                        type='submit'
                        >Sign Up
                    </button>)}
                    {!isSignUp && (<button 
                        className="ml-3 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        onClick={signIn}
                        type='submit'
                        >Sign In
                    </button>)}
                </div>
                <div className="py-3 text-center">
                    {isSignUp
                    ? 'If you already have an account, '
                    :'If you don\'t have an account, '
                    }
                    <a 
                        className='cursor-pointer text-indigo-800'
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        click here.
                    </a>
                </div>
                <div className="py-3 text-center">
                    <a 
                        className='cursor-pointer text-indigo-800'
                        onClick={() => navigate(RoutePaths.FORGOT_PASSWORD)}
                    >
                        Forgot password ?
                    </a>
                </div>
            </form>
        </div>
    );
};