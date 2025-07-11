import Image from 'next/image';
import React from 'react'


interface DestinationIconCardProps {
    image: unknown;
    title: string;
}

const DestinationIconCard: React.FC<DestinationIconCardProps> = ({
    image,
    title
}) => {
    return (
        <div className='flex flex-col items-center justify-center p-4 '>
            <Image src={image as string} alt={title} className='w-28 h-28 mb-2 rounded-full shadow-md' width={100} height={100} priority />
            <h3 className='text-sm font-Inter'>{title}</h3>
        </div>
    )
}

export default DestinationIconCard