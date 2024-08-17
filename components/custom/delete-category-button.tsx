import React from 'react'
import { Button } from '../ui/button'
import { Trash2Icon } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'

function DeleteCategoryButton({ id }: { id: string }) {
    const onDelete = async () => {
        const response = await axios.delete(`/api/category/${id}`)
        toast(response.data.message)
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

export default DeleteCategoryButton