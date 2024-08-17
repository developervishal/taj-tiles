import Heading from '@/components/custom/heading'
import InventoryLogsTable from '@/components/custom/inventory-logs-table'
import { getInventoryLogs } from '@/lib/inventory'
import React from 'react'

async function HistoryPage() {
    const logData = await getInventoryLogs()
    return (
        <div className='px-12'>
            <Heading title='Inventory History' />
            <div className='mt-10'>
                <InventoryLogsTable inventoryLogs={logData} />
            </div>
        </div>
    )
}

export default HistoryPage