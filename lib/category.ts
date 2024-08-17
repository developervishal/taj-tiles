import prismadb from "./prisma"


export const getCategories = async () => {
    const categories = await prismadb.category.findMany({ select: { id: true, name: true, createdAt: true } })

    if (categories) {
        return categories
    } else {
        return []
    }
}