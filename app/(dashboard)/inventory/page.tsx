import Heading from '@/components/custom/heading'
import InventoryTable from '@/components/custom/inventory-table'
import NewInventoryDialog from '@/components/custom/new-inventory-dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getCategories } from '@/lib/category'
import { getInventory } from '@/lib/inventory'
import { BoxIcon } from 'lucide-react'
import React from 'react'

async function InventoryPage() {
    const data = await getInventory()
    const categories = await getCategories()
    return (
        <div className='px-12'>
            <Heading title='Inventory' />
            <div className='gap-x-2 gap-y-2'>
                <div className='flex items-center gap-2'>
                    <NewInventoryDialog categories={categories} />
                </div>
            </div>
            {data.length === 0 && <div className='mt-10 flex justify-center'>
                <div>
                    <BoxIcon className='text-center h-12 w-12 mx-auto' />
                    <p>No Inventory available</p>
                </div>
            </div>}
            <div className='mt-8'>
                {data.length > 0 && <InventoryTable inventories={data} />}
            </div>
        </div>
    )
}

export default InventoryPage