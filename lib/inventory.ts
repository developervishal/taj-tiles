import prismadb from "./prisma"

export const getInventory = async () => {
    const inventory = await prismadb.inventory.findMany()
    if (inventory) {
        return inventory
    } else {
        return []
    }
}

export const getInventoryCountBasedOnCategory = async () => {
    const data = await prismadb.inventory.groupBy({
        by: ['category'],
        _count: true
    })
    return data
}
export const getInventoryCount = async () => {
    const count = await prismadb.inventory.count()
    return count
}

export const getInventoryLogs = async () => {
    const logs = await prismadb.inventoryLogs.findMany()
    if (logs) {
        return logs
    }
    return []
}