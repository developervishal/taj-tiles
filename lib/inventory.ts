import { unstable_noStore } from "next/cache"
import prismadb from "./prisma"

export const getInventory = async () => {
    unstable_noStore()
    const inventory = await prismadb.inventory.findMany()
    if (inventory) {
        return inventory
    } else {
        return []
    }
}

export const getInventoryCountBasedOnCategory = async () => {
    unstable_noStore()
    const data = await prismadb.inventory.groupBy({
        by: ['category'],
        _count: true
    })
    return data
}
export const getInventoryCount = async () => {
    unstable_noStore()
    const count = await prismadb.inventory.count()
    return count
}

export const getInventoryLogs = async () => {
    unstable_noStore()
    const logs = await prismadb.inventoryLogs.findMany()
    if (logs) {
        return logs
    }
    return []
}