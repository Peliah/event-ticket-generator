import { StepProps } from '@/utils/types';
import { IoIosArrowDown } from 'react-icons/io';

const Step1: React.FC<StepProps> = ({ nextStep, formData, setFormData, errors }) => {
    const ticketType = [
        { id: '1', price: 'Free', access: 'regular access', date: '20/25' },
        { id: '2', price: '$150', access: 'vip access', date: '20/25' },
        { id: '3', price: '$150', access: 'vvip access', date: '20/25' },
    ];

    const handleTicketTypeChange = (price: string) => {
        setFormData({ ...formData, ticketType: price });
    };

    const handleTicketQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, ticketQuantity: parseInt(e.target.value, 10) });
    };

    return (
        <div className='p-6 rounded-3xl border border-[#0E464F] bg-[#08252B]'>
            <div className='flex flex-col gap-6'>
                <div className='text-center border-x border-b border-[#0E464F] rounded-3xl h-[200px] bg-transparent flex items-center'
                    style={{ backgroundImage: `linear-gradient(170deg, #24A0B5 0%, #0E464F 0%, transparent 100% )` }}
                >
                    <div className='max-w-[340px] mx-auto'>
                        <h1 className='font-[family-name:var(--font-road-rage)] text-6xl text-[#FAFAFA]'>
                            Techember Fest ”25
                        </h1>
                        <p className='font-[family-name:var(--font-roboto)] text-base font-normal leading-relaxed text-[#FAFAFA]'>
                            Join us for an unforgettable experience at [Event Name]! Secure your spot now
                        </p>
                        <p className='font-[family-name:var(--font-roboto)] mt-2 text-base font-normal leading-relaxed text-[#FAFAFA]'>
                            📍[Event Location] | March 15, 2025 | 7:00 PM
                        </p>
                    </div>
                </div>
                <div className='bg-[#07373F] h-1'></div>

                <div className='flex flex-col gap-2 font-[family-name:var(--font-roboto)]'>
                    <h1>Select Ticket Type:</h1>
                    <div className='w-full flex p-4 bg-[#052228] border border-[#07373F] gap-4 rounded-3xl'>
                        {ticketType.map((ticket, index) => (
                            <div
                                key={index}
                                className={`w-1/3 p-3 rounded-xl hover:bg-[#2C545B] border border-[#197686] ${formData.ticketType === ticket.id ? 'bg-[#12464E]' : ''
                                    }`}
                                onClick={() => handleTicketTypeChange(ticket.id)}
                            >
                                <h1 className="text-2xl font-semibold mb-2">{ticket.price}</h1>
                                <p className="text-sm uppercase text-[#FAFAFA] font-light">{ticket.access}</p>
                                <p className="text-sm uppercase text-[#D9D9D9] font-light">{ticket.date}</p>
                            </div>
                        ))}
                    </div>
                    {errors?.ticketType && <p className="text-red-500 text-sm">{errors.ticketType}</p>}
                </div>

                <div className='flex flex-col gap-2 font-[family-name:var(--font-roboto)]'>
                    <h1 className='text-zinc-50 text-base'>Number of Tickets:</h1>
                    <div className="relative w-full">
                        <select
                            name="number of tickets"
                            value={formData.ticketQuantity}
                            onChange={handleTicketQuantityChange}
                            className="w-full bg-transparent p-3 pr-10 rounded-xl text-base border border-[#07373F] appearance-none"
                        >
                            {Array.from({ length: 9 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-2">
                            <IoIosArrowDown />
                        </div>
                    </div>
                    {errors?.ticketQuantity && <p className="text-red-500 text-sm">{errors.ticketQuantity}</p>}
                </div>

                <div className='flex gap-6 w-full text-base font-light' style={{ fontFamily: 'Jeju Myeongjo, serif' }}>
                    <button className='rounded-lg px-6 py-3 w-1/2 text-center border border-[#24A0B5] text-[#24A0B5]'>
                        Cancel
                    </button>
                    <button className='rounded-lg px-6 py-3 w-1/2 text-center bg-[#24A0B5] text-white' onClick={nextStep}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step1;