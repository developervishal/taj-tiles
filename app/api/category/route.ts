import prismadb from "@/lib/prisma"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name } = body
        const result = await prismadb.category.create({
            data: {
                name: name
            }
        })
        return NextResponse.json({
            success: true,
            message: 'Successfully added the category'
        })
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                return NextResponse.json({
                    success: false,
                    message: 'Category Already Exists'
                })
            }
        }

        return NextResponse.json({
            success: false,
            message: 'Failed to add Category'
        })
    }

}