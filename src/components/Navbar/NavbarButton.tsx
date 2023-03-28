import { NavbarButtonType } from "../../types/types"


export const NavbarButton = (props: NavbarButtonType) => {
    return (
        <div className="flex flex-row gap-6 w-full h-10 items-center rounded-md cursor-pointer ml-1 mr-2 text-white  hover:bg-zinc-500" onClick={() => (props.onClick(props.id))}>
            <text className="ml-1">{props.name}</text>

            <div className="bg-gray-500 rounded-full">
                <text className="m-1">{props.count}</text>
            </div>
        </div>

    )
}