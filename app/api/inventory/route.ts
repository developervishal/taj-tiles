import prismadb from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const inventory = await prismadb.inventory.findMany()
        return NextResponse.json({
            data: inventory
        })
    } catch (err) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, quantity, category, boxNumber } = body

        await prismadb.inventory.create({
            data: {
                name,
                totalQuantity: quantity,
                availableQuantity: quantity,
                category: category,
                boxNumber: boxNumber
            }
        })
        await prismadb.inventoryLogs.create({
            data: {
                name,
                quantity,
                action: 'create'
            }
        })
        revalidatePath("/inventory")
        return NextResponse.json({
            message: 'Successfully added the inventory'
        })
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return NextResponse.json({
                    success: false,
                    message: 'Already Exists'
                })
            }
        }

        return NextResponse.json({
            success: false,
            message: 'Failed to add Data'
        })
    }
}