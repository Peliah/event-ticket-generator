import React from 'react';

const Step2 = ({ nextStep, prevStep }) => {
    return (
        <div>
            <p>This is Step 2: User Details</p>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step2;