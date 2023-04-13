import React from "react"
import { NavbarButtonType } from "../../types/types"


export const NavbarButton = React.memo((props: NavbarButtonType) => {
    return (
        <div className="flex flex-row justify-between gap-6 w-full h-10 items-center rounded-md cursor-pointer ml-1 mr-2 text-white  hover:bg-zinc-500" onClick={() => (props.onClick(props.id))}>
            <text className="ml-1 mb-2 mt-2 whitespace-nowrap truncate">{props.name}</text>

            <div className="bg-gray-500 rounded-full">
                <text className="m-1">{props.count}</text>
            </div>
        </div>

    )
}) 