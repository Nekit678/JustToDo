export interface NavbarButtonType{
    id:number
    name:string
    count:number
    onClick: (id:number)=>(void)
}

export interface TaskListType {
    closed?: boolean
    count: number
    tasks?: ToDoType[]
}

export interface ToDoType {
    primary?: boolean
    text?: string
    closed?: boolean
    id: number
    toggle?: (id: number) => (void)

}

