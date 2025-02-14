import Image from "next/image"

const Tickets = () => {
    return (
        <div className="border border-[#0E464F] max-w-[700px] mx-auto w-full p-12 rounded-3xl bg-[#041E23] flex items-center justify-center">
            <div className='w-full'>
                <Image
                    src={`/image/site-construction1.png`}
                    className="w-full h-auto"
                    alt='site-construction'
                    sizes="100vw"
                    height={10}
                    width={10}
                />
            </div>

        </div>
    )
}

export default Tickets