import React from 'react';

const Step1 = ({ nextStep }) => {
    return (
        <div>
            <p>This is Step 1: Ticket Selection</p>
            <button
                onClick={nextStep}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Next
            </button>
        </div>
    );
};

export default Step1;