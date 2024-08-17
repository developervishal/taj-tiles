'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Category } from "@/types/category-types"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function NewInventoryDialog({ categories }: { categories: Category[] }) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [boxNumber, setBoxNumber] = useState('')
    const onSubmit = async () => {
        if (!name || !quantity || !category || !boxNumber) {
            return
        }
        const dataObject = {
            name,
            quantity,
            category,
            boxNumber
        }
        setLoading(true)
        const response = await axios.post('/api/inventory', dataObject)
        setLoading(false)
        toast(response.data.message)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="w-full md:w-64"
                    size={'lg'}>Add New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Inventory</DialogTitle>
                    <DialogDescription>
                        You can add you inventory here
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                            Action Type
                        </Label>
                        <Select onValueChange={(value) => { setCategory(value) }}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category.name} value={category.name}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="boxNumber" className="text-right">
                            Box Number
                        </Label>
                        <Input
                            id="boxNumber"
                            defaultValue={boxNumber}
                            className="col-span-3"
                            onChange={(e) => { setBoxNumber(e.target.value) }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        disabled={loading}
                        type="submit"
                        onClick={onSubmit}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
