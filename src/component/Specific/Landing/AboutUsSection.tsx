import { Aboutus, AboutUsFooter, AboutUsIcon1, AboutUsIcon2 } from '@/images'
import Image from 'next/image'
import React from 'react'

const AboutUsSection = () => {
    return (
        <div className='bg-[#ffffff] min-h-100 py-20'>
            <div className='flex flex-row justify-center gap-10'>
                <Image src={Aboutus} alt='about-us' priority width={400} height={400} />
                <div className='flex flex-col items-start max-w-sm'>
                    <div>
                        <p className='text-[#EB6753] font-Inter text-sm'>Your Trusted Travel Partner</p>
                        <h2 className='text-black font-Inter font-semibold text-2xl'>Creating Unforgettable</h2>
                        <h2 className='text-black font-Inter font-semibold text-2xl'>Journeys, <span className='text-black font-Inter font-normal'>
                            One Destination at
                        </span>
                        </h2>
                        <h2 className='text-black font-Inter font-normal text-2xl'>a Time</h2>
                    </div>
                    <div className='flex flex-row items-center mt-8 gap-10'>
                        <div className='flex flex-row items-center justify-between gap-4'>
                            <Image src={AboutUsIcon1} alt='about-us' priority width={40} height={40} />
                            <div className='flex flex-col'>
                                <p className='text-[#000000] font-Inter text-2xl text-left'>640+</p>
                                <p className='text-[#000000] font-Inter text-xs text-left'>Trips Completed</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between gap-4'>

                            <Image src={AboutUsIcon2} alt='about-us' priority width={40} height={40} />
                            <div className='flex flex-col'>
                                <p className='text-[#000000] font-Inter text-xl'>650+</p>
                                <p className='text-[#000000] font-Inter text-xs text-left'>Trips Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-[#000000] font-Inter text-sm mt-9 max-w-lg'>
                        <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`}</p>
                    </div>
                    <div className='flex flex-col items-baseline mt-6'>
                        <button className='bg-[#EB6753] text-white font-Inter font-semibold text-sm px-6 py-2 rounded-lg mt-6 hover:bg-[#d95a4b] transition-colors'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <div className="relative w-220 h-20">
                    <Image
                        src={AboutUsFooter}
                        alt="about-us"
                        priority
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection