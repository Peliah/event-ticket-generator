import { StepProps } from '@/utils/types';

const Step3: React.FC<StepProps> = ({ prevStep }) => {
    return (
        <div>
            <p>This is Step 3: Confirmation</p>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                >
                    Back
                </button>
                <button
                    onClick={() => alert('Form Submitted!')}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default Step3;