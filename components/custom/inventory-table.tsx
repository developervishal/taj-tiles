'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Inventory } from '@prisma/client'
import { DataTable } from '../ui/data-table'
import { Button } from '../ui/button'
import UpdateInventoryDialog from './update-inventory-dialog'
import { Trash2Icon } from 'lucide-react'
import DeleteInventoryButton from './delete-inventory-button'


const inventoryColumnDef: ColumnDef<Inventory>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ cell, row }) => {
            return <p className='font-semibold'>{row.original.name.toUpperCase()}</p>
        }
    },
    {
        accessorKey: 'category',
        header: 'Category'
    },

    {
        accessorKey: 'totalQuantity',
        header: 'Total Quantity'
    },
    {
        accessorKey: 'soldQuantity',
        header: 'Sold'
    },
    {
        accessorKey: 'availableQuantity',
        header: 'Available'
    },
    {
        accessorKey: 'boxNumber',
        header: 'Box Number'
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const inventory = row.original
            return (
                <div className='flex items-center gap-x-2'>
                    <UpdateInventoryDialog row={inventory} />
                    <DeleteInventoryButton id={row.original.id} />
                </div>)
        }
    }
]
function InventoryTable({ inventories }: { inventories: Inventory[] }) {

    return (
        <DataTable columns={inventoryColumnDef} data={inventories} />
    )
}

export default InventoryTable