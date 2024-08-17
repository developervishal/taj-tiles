import prismadb from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request, context: { params: { id: string } }) {
    try {
        const body = await req.json()
        const id = context.params.id
        const { name, quantity, action } = body
        const data = await prismadb.inventory.findUnique({
            where: {
                id: id
            }
        })
        if (!data) {
            return NextResponse.json({
                success: false,
                message: 'Failed to find Inventory'
            })
        }
        if (action === 'add') {
            await prismadb.inventory.update({
                where: {
                    id: data.id
                },
                data: {
                    name: name,
                    totalQuantity: data.totalQuantity + quantity,
                    availableQuantity: data.availableQuantity + quantity
                }
            })
            await prismadb.inventoryLogs.create({
                data: {
                    name: name,
                    quantity: quantity,
                    action: 'add'
                }
            })
            return NextResponse.json({
                success: true,
                message: 'Successfully updated the inventory'
            })
        }
        if (action === 'remove') {
            if (data.availableQuantity < quantity) {
                return NextResponse.json({
                    success: false,
                    message: 'Available Quanity is not sufficient. Please reduce the remove quantity'
                })
            }
            const soldQuantity = data.soldQuantity + quantity
            const availableQuantity = data.availableQuantity - quantity
            await prismadb.inventory.update({
                where: {
                    id: data.id
                },
                data: {
                    name: name,
                    soldQuantity: soldQuantity,
                    availableQuantity
                }
            })
            await prismadb.inventoryLogs.create({
                data: {
                    name: name,
                    quantity: quantity,
                    action: 'remove'
                }
            })
            return NextResponse.json({
                success: false,
                message: 'Successfully update the Inventory'
            })
        }
    } catch (err) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function DELETE(req: Request, context: { params: { id: string } }) {
    try {
        const inventory = await prismadb.inventory.findUnique({
            where: {
                id: context.params.id
            }
        })
        if (inventory) {
            await prismadb.inventory.delete({
                where: {
                    id: context.params.id
                }
            })
            await prismadb.inventoryLogs.create({
                data: {
                    name: inventory?.name,
                    action: 'delete',
                }
            })
            return NextResponse.json({
                success: true,
                message: 'Inventory Deleted'
            })
        }
        return NextResponse.json({
            success: false,
            message: 'Failed to Delete Inventory'
        })

    } catch (err) {
        return NextResponse.json({
            success: false,
            message: 'Failed to Delete Inventory'
        })
    }
}