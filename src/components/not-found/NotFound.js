import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="bg">
            <div>
            <h1 className="fourOfour">404</h1>
            </div>
            <div className='float'>
                <h1 className="page">Page not found</h1>
                <button>
                    <Link className="btntxt" to="/">Go to home page</Link>
                </button>
            </div>
        </div>
    );
};

export default NotFound;