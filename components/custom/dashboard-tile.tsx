import React from 'react'

interface TileProps {
    title: string;
    icon: any;
    value: string | number
}
function DashboardTile({ title, icon: Icon, value }: TileProps) {
    return (
        <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
            <div className="flex p-4 items-center">
                {Icon ? <Icon className="h-6 w-6 text-gray-700" /> : null}
                <h3 className="ml-2 text-lg font-medium">{title}</h3>
            </div>
            <p
                className={`
          truncate rounded-xl bg-white px-4 py-8 text-center text-3xl font-semibold`}
            >
                {value}
            </p>
        </div>
    )
}

export default DashboardTile