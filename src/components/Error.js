import React from 'react';

const Error = ({ message }) => {
    return (
        <div className="alert alert-danger col-sm-4 text-center mt-4 mx-auto rounded-pill">
            <strong>{message}</strong>
        </div>
    );
}

export default Error;