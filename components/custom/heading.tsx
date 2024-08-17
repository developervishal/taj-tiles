import { cn } from '@/lib/utils';
import React from 'react'

interface HeadingProps {
    title: string;
}
function Heading({ title }: HeadingProps) {
    return (
        <div className='py-10 flex items-center gap-x-3 mb-5'>
            <div>
                <p className="text-3xl font-semibold">{title}</p>
            </div>
        </div>
    )
}

export default Heading