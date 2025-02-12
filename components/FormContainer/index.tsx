'use client'

import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
const MultiStepFormContainer: React.FC = () => {
    const [step, setStep] = useState<number>(1)

    const steps = [
        { name: 'Ticket Selection', number: 1 },
        { name: 'Attendee Details', number: 2 },
        { name: 'Ready', number: 3 },
    ];

    const progressBarColors = ['bg-[#24A0B5]', 'bg-[#24A0B5]', 'bg-[#24A0B5]'];

    const nextStep = () => {
        if (step < steps.length) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className='w-full'>
            <div className="flex justify-between items-start mb-2 text-white">
                <h1 className="text-3xl font-thin" style={{ fontFamily: 'Jeju Myeongjo, serif' }}>{steps[step - 1].name}</h1>
                <p className="text-zinc-50 font-[family-name:var(--font-roboto)]">Step {steps[step - 1].number}/3</p>
            </div>

            <div className="bg-[#0E464F] rounded-md w-full h-1 flex mb-6">
                {steps.map((_, index) => (
                    <div
                        key={index}
                        className={`h-full ${index + 1 <= step ? progressBarColors[index] : 'bg-transparent'
                            }`}
                        style={{ width: `${100 / steps.length}%` }}
                    ></div>
                ))}
            </div>

            <div>
                {step === 1 && <Step1 nextStep={nextStep} />}
                {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Step3 prevStep={prevStep} />}
            </div>
        </div>
    );
};

export default MultiStepFormContainer;