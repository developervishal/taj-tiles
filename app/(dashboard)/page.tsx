import DashboardTile from '@/components/custom/dashboard-tile'
import Heading from '@/components/custom/heading'
import { getInventoryCount, getInventoryCountBasedOnCategory } from '@/lib/inventory'
import { Home, HomeIcon, User2Icon, WarehouseIcon } from 'lucide-react'
import React from 'react'

async function DashboardPage() {
    const inventoryCount = await getInventoryCount()
    const inventoryData = await getInventoryCountBasedOnCategory()

    return (
        <div className='px-12'>
            <Heading
                title='Dashboard'
            />
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3 gap-x-3 items-center flex-wrap'>

                {inventoryData.length > 0 ? inventoryData.map(inventory => (
                    <DashboardTile
                        key={inventory.category}
                        title={inventory.category.toUpperCase()}
                        icon={WarehouseIcon}
                        value={inventory._count}
                    />
                )) : <div>
                    <p className='font-bold'>No Data Available</p>
                </div>}
            </div>
        </div>
    )
}

export default DashboardPage