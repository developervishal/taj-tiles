'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Inventory } from '@prisma/client'
import { DataTable } from '../ui/data-table'
import { Button } from '../ui/button'
import UpdateInventoryDialog from './update-inventory-dialog'
import { InventoryLogs } from '@/types/inventory-types'


const inventoryLogsColumnDef: ColumnDef<InventoryLogs>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ cell, row }) => {
            return <p className='font-semibold'>{row.original.name.toUpperCase()}</p>
        }
    },
    {
        accessorKey: 'quantity',
        header: 'Quantity'
    },
    {
        accessorKey: 'action',
        header: 'Category',
        cell: ({ cell, row }) => {
            return <p className={`${row.original.action === 'remove' ? 'text-red-600' : 'text-green-600'}`}>{row.original.action.toUpperCase()}</p>
        }
    },
    {
        accessorKey: 'createdAt',
        header: 'Created / Updated',
        cell: ({ cell, row }) => {
            return row.original.createdAt.toDateString()
        }
    },
]
function InventoryLogsTable({ inventoryLogs }: { inventoryLogs: InventoryLogs[] }) {

    return (
        <DataTable columns={inventoryLogsColumnDef} data={inventoryLogs} />
    )
}

export default InventoryLogsTable