export type Inventory = {
    name: string
    category: string
    totalQuantity: string
    remainingQuantity: string
    availableQuantity: string
    boxNumber: string
    createdAt: string

}

export type InventoryLogs = {
    name: string
    quantity: number | null
    action: string
    createdAt: Date
}