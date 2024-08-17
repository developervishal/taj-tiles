"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Trash2Icon } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function DeleteInventoryButton({ id }: { id: string }) {
    const router = useRouter()
    const onDelete = async () => {
        const response = await axios.delete(`/api/inventory/${id}`)
        toast(response.data.message)
        router.refresh()
    }
    return (
        <Button
            variant="outline"
            className="h-8 w-8"
            onClick={onDelete}
            size={'icon'}>
            <Trash2Icon className="h-4 w-4" />
        </Button>
    )
}

export default DeleteInventoryButton