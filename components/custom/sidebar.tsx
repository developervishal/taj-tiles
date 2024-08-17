import { Crown } from 'lucide-react'
import React from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '../ui/button'
import { signOut } from '@/auth'
import SideNavLinks from './side-nav-links'
import { signOutAction } from '@/lib/actions'

const montserrat = Montserrat({
    weight: '600',
    subsets: ['latin']
})

function Sidebar() {
    return (
        <div className='flex h-full flex-col px-3 py-4 md:px-2'>
            <Link
                className="mb-2 flex h-auto  items-center justify-center rounded-md bg-slate-900 p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white md:w-40 text-center">
                    <Crown className='h-12 w-12 mx-auto mb-1' />
                    <p className={cn('text-3xl font-bold tracking-wide', montserrat.className)}>TAJ TILES</p>
                </div>
            </Link>
            <div className="flex grow flex-col justify-between space-x-2 md:space-x-0 md:space-y-2">
                <SideNavLinks />
                <form
                    action={signOutAction}
                >
                    <div className='bg-gray-100 rounded-lg flex-grow mb-2'>

                        <Button variant='default' size={'lg'} className='w-full'>
                            Sign Out
                        </Button>

                    </div>
                </form>
            </div >

        </div >
    )
}

export default Sidebar