import { StepProps } from '@/utils/types';

const Step3: React.FC<StepProps> = ({ prevStep }) => {
    return (
        <div className='text-center gap-8'>
            <div className='pt-8 '>
                <h1 className='text-white text-[32px] font-normal font-[family-name:var(--font-alatsi)]'>Your Ticket is Booked!</h1>
                <p className='text-neutral-50 text-base font-normal font-[family-name:var(--font-roboto)] leading-normal'>Check your email for a copy or you can <span>download</span></p>
            </div>

            <div className='py-8 px-5'>
                <div className='flex items-center justify-center'>

                </div>
            </div>

            <div className='flex gap-6 w-full text-base font-light' style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                <button
                    className='rounded-lg px-6 py-3 w-1/2 text-center border border-[#24A0B5] text-[#24A0B5]'
                    onClick={prevStep}
                >
                    Book Another Ticked
                </button>
                <button
                    className='rounded-lg px-6 py-3 w-1/2 text-center bg-[#24A0B5] text-white'
                >
                    Download Ticket
                </button>
            </div>


        </div>
    );
};

export default Step3;