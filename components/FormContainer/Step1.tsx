import { StepProps } from '@/utils/types';


const Step1: React.FC<StepProps> = ({ nextStep }) => {
    return (
        <div className='p-6 rounded-3xl border border-[#0E464F]'>
            <div className='flex flex-col gap-6'>
                <div className='text-center border-x border-b border-[#0E464F] rounded-3xl h-[200px] bg-transparent flex items-center'
                    style={{ backgroundImage: `linear-gradient(170deg, #24A0B5 0%, #0E464F 0%, transparent 100% )` }}
                >
                    <div className='max-w-80  mx-auto'>
                        <h1 className='font-[family-name:var(--font-road-rage)]  text-6xl' > Techember Fest ”25</h1>
                        <p className='font-[family-name:var(--font-roboto)] text-base font-normal leading-relaxed'>Join us for an unforgettable experience at [Event Name]! Secure your spot now</p>
                        <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now</p>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Step1;