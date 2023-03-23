import { NavbarButtonType } from "../../types/types"


export const NavbarButton = (props:NavbarButtonType) => {
    return (
        <button onClick={() => (props.onClick(props.id))}>{props.name} {props.count}</button>
    )
}