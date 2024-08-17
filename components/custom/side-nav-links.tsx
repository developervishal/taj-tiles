"use client"
import React from 'react'
import { Crown, HistoryIcon, Home, Shapes, User2, Warehouse } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
const routes = [
    {
        label: 'Dashboard',
        href: "/",
        icon: Home,
    },
    {
        label: 'Inventory',
        href: "/inventory",
        icon: Warehouse,
    },
    {
        label: 'Cateogry',
        href: "/category",
        icon: Shapes,
    },
    {
        label: 'History',
        href: "/history",
        icon: HistoryIcon,
    }

]
function SideNavLinks() {
    const pathName = usePathname()
    return (
        <div>
            {routes.map((route => (
                <Link key={route.label} href={route.href}>
                    <div
                        key={route.label}
                        className={cn('py-4 px-3 w-full mb-2 flex items-center gap-x-3 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition', pathName === route.href ? "text-white bg-slate-900" : "text-black")}>
                        <route.icon className='h-5 w-5' />
                        <p className='text-md font-medium'>{route.label}</p>
                    </div>
                </Link >

            )))
            }
        </div>
    )
}

export default SideNavLinks