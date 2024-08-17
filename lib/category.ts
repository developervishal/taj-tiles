import { unstable_noStore } from "next/cache"
import prismadb from "./prisma"


export const getCategories = async () => {
    unstable_noStore()
    const categories = await prismadb.category.findMany({ select: { id: true, name: true, createdAt: true } })

    if (categories) {
        return categories
    } else {
        return []
    }
}