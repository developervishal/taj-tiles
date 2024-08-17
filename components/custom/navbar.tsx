"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import Sidebar from './sidebar'

function Navbar() {
    const [open, isOpen] = useState(false)
    return (
        <nav className='md:hidden py-5 px-3'>
            <Sheet>
                <SheetTrigger ><Menu /></SheetTrigger>
                <SheetContent side={'left'} className='p-0'>
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Navbar