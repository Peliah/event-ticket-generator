import { useCallback, useRef } from 'react';
import { StepProps } from '@/utils/types';
import Image from 'next/image';

import { toPng } from 'html-to-image';
import { useBarcode } from 'next-barcode';


const Step3: React.FC<StepProps> = ({ prevStep, formData }) => {

    const ref = useRef<HTMLDivElement>(null)

    const handleDownloadTicket = useCallback(() => {

        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref]);


    const { inputRef } = useBarcode({
        value: 'localhost:3000',
        options: {
            background: 'transparent',
            lineColor: '#FFFFFF',
            displayValue: false,
        }
    });

    return (
        <div className='text-center gap-8'>
            <div className='py-8 '>
                <h1 className='text-white text-[32px] font-normal font-[family-name:var(--font-alatsi)]'>Your Ticket is Booked!</h1>
                <p className='text-neutral-50 text-base font-normal font-[family-name:var(--font-roboto)] leading-normal'>Check your email for a copy or you can <span>download</span></p>
            </div>

            <div className='py-8 px-5 bg-[#041E23]' ref={ref}>
                <div className='flex items-center justify-center'>
                    <div className="ticket border border-[#24A0B5] bg-[#072C31]">
                        <div className="ticket--start">
                            <div className='m-5 border border-[#24A0B5] rounded-2xl p-[14px] bg-[rgba(3, 30, 33, 0.1)] backdrop:blur-sm'>
                                <div className='flex flex-col gap-5 items-center justify-center'>

                                    <div className='text-center text-white'>
                                        <h1 className='font-[family-name:var(--font-road-rage)] font-normal text-[34px] leading-[34px]'>
                                            Techember Fest ”25
                                        </h1>
                                        <div className='p-1 flex flex-col gap-1'>
                                            <p className='font-[family-name:var(--font-roboto)] font-normal text-[10px] leading-[15px]'>
                                                📍 04 Rumens road, Ikoyi, Lagos
                                            </p>
                                            <p className='font-[family-name:var(--font-roboto)] font-normal text-[10px] leading-[15px]'>
                                                📅 March 15, 2025 | 7:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    <div className='border-4 rounded-xl w-[140px] h-[140px] border-[rgba(36, 160, 181, 0.5)]'>
                                        <Image
                                            src={formData.avatar}
                                            alt="avatar"
                                            sizes="100vw"
                                            height={10}
                                            width={10}
                                            className="rounded-xl w-full h-auto"
                                        />
                                    </div>

                                    <div className='w-full rounded-lg border border-[#133D44] bg-[#08343C] p-1 text-left'>
                                        <div className='flex gap-2 border-b border-[#12464E] font-[family-name:var(--font-roboto)] text-white w-full'>
                                            <div className='border-r p-1 flex flex-col gap-1 border-[#12464E] w-1/2'>
                                                <p className='opacity-[33%] font-normal leading-[15px] text-[10px]'>Enter your name</p>
                                                <p className='font-bold text-xs leading-[18px]'>{formData.fullName}</p>
                                            </div>
                                            <div className='p-1 flex flex-col gap-1 border-[#12464E] w-1/2'>
                                                <p className='opacity-[33%] font-normal leading-[15px] text-[10px]'>Enter your email *</p>
                                                <p className='font-bold text-xs leading-[18px]'>{formData.email}</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2 border-b border-[#12464E] font-[family-name:var(--font-roboto)] text-white w-full'>
                                            <div className='border-r p-1 flex flex-col gap-1 border-[#12464E] w-1/2'>
                                                <p className='opacity-[33%] font-normal leading-[15px] text-[10px]'>Ticket Type:</p>
                                                <p className='font-bold text-xs leading-[18px]'>{formData.ticketType}</p>
                                            </div>
                                            <div className='p-1 flex flex-col gap-1 border-[#12464E] w-1/2'>
                                                <p className='opacity-[33%] font-normal leading-[15px] text-[10px]'>Ticker for: </p>
                                                <p className='font-bold text-xs leading-[18px]'>{formData.ticketQuantity}</p>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-2 border-[#12464E] font-[family-name:var(--font-roboto)] text-white p-2'>
                                            <p className='opacity-[33%] font-normal leading-[15px] text-[10px]'>Special request?</p>
                                            <p className='font-normal text-[10px] leading-[15px]'>{formData.specialRequest}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ticket--center" style={{
                            backgroundImage: `linear-gradient(to right, #24A0B5 30%, rgba(255, 255, 255, 0) 10%)`,
                            backgroundPosition: `top`,
                            backgroundSize: `20px 5px`,
                            backgroundRepeat: `repeat-x`,
                        }}>
                        </div>
                        <div className="ticket--end">
                            <img ref={inputRef} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-6 w-full text-base font-light pt-6' style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                <button
                    className='rounded-lg px-6 py-3 w-1/2 text-center border border-[#24A0B5] text-[#24A0B5]'
                    onClick={prevStep}
                >
                    Book Another Ticket
                </button>
                <button
                    className='rounded-lg px-6 py-3 w-1/2 text-center bg-[#24A0B5] text-white'
                    onClick={handleDownloadTicket}
                >
                    Download Ticket
                </button>
            </div>


        </div>
    );
};

export default Step3;