'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { Loader2, Pencil, UploadIcon } from "lucide-react"
import { useState } from "react"
import { toast } from 'sonner'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function UpdateInventoryDialog({ row }: { row: any }) {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(row.name)
    const [quantity, setQuantity] = useState(0)
    const [action, setAction] = useState('')
    const updateInventory = async () => {

        if (action === '') {
            return
        }
        setLoading(true)
        const response = await axios.post(`/api/inventory/${row.id}`, {
            name,
            quantity,
            action
        })
        setLoading(false)
        toast(response.data.message)

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="h-8 w-8"
                    size={'icon'}>
                    <Pencil className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Inventory</DialogTitle>
                    <DialogDescription>
                        You can update your inventory here
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                            Action Type
                        </Label>
                        <Select onValueChange={(value) => { setAction(value) }}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="add">Add</SelectItem>
                                <SelectItem value="remove">Remove</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            type="number"
                            defaultValue={quantity}
                            className="col-span-3"
                            onChange={(e) => { setQuantity(+e.target.value) }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        onClick={updateInventory}
                        type="submit">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Update</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
