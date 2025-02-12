"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { StepProps } from '@/utils/types';
import { BiCloudDownload, BiEnvelope } from 'react-icons/bi';

const Step2: React.FC<StepProps> = ({ nextStep, prevStep }) => {
    const [image, setImage] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [isHovered, setIsHovered] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);

        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='p-6 rounded-3xl border border-[#0E464F] bg-[#08252B]'>
            <div className='flex flex-col gap-6'>
                <div className='border border-[#07373F] rounded-3xl px-6 pt-6 pb-12 bg-transparent bg-[#052228] font-[family-name:var(--font-roboto)]'>
                    <h1 className='mb-8'>Upload Profile Photo</h1>
                    <div className='h-[200px] flex justify-center items-center' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                        <div
                            className={`h-[240px] w-[240px] rounded-[32px] bg-[#0E464F] border-4 flex justify-center items-center relative transition-all ${dragActive ? "border-[#24A0B5]" : "border-[rgba(36,160,181,0.5)]"
                                }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onMouseEnter={() => {
                                setIsHovered(true);
                                fileInputRef.current?.focus()
                            }}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            {image && (
                                <Image
                                    src={image}
                                    alt="Preview"
                                    width={240}
                                    height={240}
                                    className="rounded-[28px] object-cover"
                                />
                            )}

                            <div
                                className={`absolute flex flex-col items-center justify-center p-6  text-white transition-opacity duration-300 h-full rounded-[32px] ${(isHovered && image) || (!image) ? "opacity-100" : "opacity-0"} ${isHovered && image ? " bg-black bg-opacity-30 " : ""}`}
                            >
                                <BiCloudDownload className="text-3xl" />
                                <label htmlFor="fileInput" className="text-white text-center cursor-pointer">
                                    Drag & drop or click to upload
                                </label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='bg-[#07373F] h-1'></div>

                <div className='flex flex-col gap-2 font-[family-name:var(--font-roboto)]'>
                    <h1>Enter your name</h1>
                    <input type='text' className='w-full bg-transparent p-3 rounded-xl text-base border border-[#07373F]' />
                </div>

                <div className='flex flex-col gap-2 font-[family-name:var(--font-roboto)]'>
                    <h1>Enter your email *</h1>
                    <div className='relative w-full'>
                        <input type='email' className='w-full bg-transparent p-3 rounded-xl text-base border border-[#07373F]' required />
                        <div className="pointer-events-none absolute inset-y-0 left-1 flex items-center px-2">
                            <BiEnvelope className='text-2xl' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 font-[family-name:var(--font-roboto)]'>
                    <h1>Special Request?</h1>
                    <textarea className='w-full bg-transparent p-3 rounded-xl text-base border border-[#07373F]' rows={3} />
                </div>

                <div className='flex gap-8 w-full  text-base font-light' style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                    <button className='rounded-lg px-6 py-3 w-1/2 text-center border border-[#24A0B5] text-[#24A0B5]' onClick={prevStep}>
                        Back
                    </button>
                    <button className='rounded-lg px-6 py-3 w-1/2 text-center bg-[#24A0B5] text-white' onClick={nextStep}>
                        Get My Free Ticket
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;