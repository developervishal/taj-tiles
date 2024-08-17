"use client"

import { Label } from '@radix-ui/react-label'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { DialogHeader, DialogFooter, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog'
import { Input } from '../ui/input'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

function AddCategoryDialog() {
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const onSubmit = async () => {
        if (name === '') {
            return
        }
        setLoading(true)
        const response = await axios.post('/api/category', { name: name })
        if (response.data.success) {
            toast("Successfully added the category")
            router.refresh()
        } else {
            toast(response.data.message)
        }

        setLoading(false)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="w-full md:w-64"
                    size={'lg'}>Add New Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>
                        You can add category here
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue={name}
                            className="col-span-3"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        disabled={loading || !name}
                        onClick={onSubmit}
                        type="submit"
                    >
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddCategoryDialog