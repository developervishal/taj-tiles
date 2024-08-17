import prismadb from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export async function DELETE(req: Request, context: { params: { id: string } }) {
    try {
        await prismadb.category.delete({
            where: {
                id: context.params.id
            }
        })
        revalidatePath("/category")
        return NextResponse.json({
            success: true,
            message: 'Category Deleted'
        })
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: 'Failed to Delete category'
        })
    }
}