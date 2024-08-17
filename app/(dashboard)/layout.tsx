import Navbar from '@/components/custom/navbar'
import Sidebar from '@/components/custom/sidebar'
import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full'>
            <div className='h-full w-72 hidden md:fixed md:flex md:flex-col '>
                <Sidebar />
            </div>
            <main className='md:pl-72'>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout