'use client'
import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '../ui/data-table'
import { Button } from '../ui/button'
import UpdateInventoryDialog from './update-inventory-dialog'
import { Category } from '@/types/category-types'
import { DeleteIcon, EraserIcon, Trash2Icon } from 'lucide-react'
import DeleteCategoryButton from './delete-category-button'


const categoryColumnDef: ColumnDef<Category>[] = [
    {
        accessorKey: 'name',
        header: 'Category',
        cell: ({ cell, row }) => {
            return <p className='font-semibold'>{row.original.name.toUpperCase()}</p>
        }
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {

            return (
                <div className='flex items-center gap-x-2'>
                    <DeleteCategoryButton id={row.original.id} />
                </div>)
        }
    }
]
function CategoryTable({ categories }: { categories: Category[] }) {

    return (
        <DataTable columns={categoryColumnDef} data={categories} />
    )
}

export default CategoryTable