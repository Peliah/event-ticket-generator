'use client'

import { useState, useEffect, SetStateAction } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { FormData } from '@/utils/types';
const MultiStepFormContainer: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>({
        ticketType: '',
        ticketQuantity: 1,
        fullName: '',
        email: '',
        avatar: '',
        specialRequest: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.ticketType) {
            newErrors.ticketType = 'Please select a ticket type.';
        }
        if (formData.ticketQuantity < 1) {
            newErrors.ticketQuantity = 'Please select at least one ticket.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName) {
            newErrors.fullName = 'Please enter your full name.';
        }
        if (!formData.email) {
            newErrors.email = 'Please enter your email address.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const steps = [
        { name: 'Ticket Selection', number: 1 },
        { name: 'Attendee Details', number: 2 },
        { name: 'Ready', number: 3 },
    ];

    const progressBarColors = ['bg-[#24A0B5]', 'bg-[#24A0B5]', 'bg-[#24A0B5]'];

    const nextStep = () => {
        if (step === 1 && !validateStep1()) return;
        if (step === 2 && !validateStep2()) return;
        if (step < steps.length) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        if (validateStep2()) {
            alert('Ticket Confirmed!');
            localStorage.removeItem('formData');
            localStorage.removeItem('currentStep');
        }
    };

    useEffect(() => {
        const savedStep = localStorage.getItem('currentStep');
        if (savedStep) {
            setStep(parseInt(savedStep, 10));
        }

        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        localStorage.setItem('currentStep', step.toString());
    }, [step]);

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
                {step === 1 && (
                    <Step1
                        nextStep={nextStep}
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                    />
                )}
                {step === 2 && (
                    <Step2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                    />
                )}
                {step === 3 && (
                    <Step3
                        prevStep={prevStep}
                        formData={formData} 
                        setFormData={function (value: SetStateAction<FormData>): void {
                            throw new Error('Function not implemented.');
                        } }/>
                )}
            </div>
        </div>
    );
};

export default MultiStepFormContainer;