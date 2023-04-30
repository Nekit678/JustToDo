import { taskType } from "../redux/reducers/fullInfo-reducer"


export interface NavbarButtonType {
    id: number
    name: string
    count: number
    onClick: (id: number) => (void)
}

export interface AddTaskInputType {
    addTask: (id: string) => (void)
}

/////////////////////////////////////////////////////////////////////////
export interface TaskListType {
    // относится к самому компоненту списка
    closed?: boolean
    count: number

    //! по идее тут тудушки сами, это целиком передается в компонент
    tasks?: ToDoType[]
}

export interface ToDoType {
    primary?: boolean
    text?: string
    closed?: boolean
    id: number

    toggle?: (id: number) => (void)
    togglePrimary?: (id: number) => (void)
    deleteTask?: (id: number) => (void)
    editTask?: (id: number, text: string) => (void)
}


export interface NameListType {
    listName: string
    currentId: number

    delList: (id: number) => (void)
    renameList: (name: string) => void
}

