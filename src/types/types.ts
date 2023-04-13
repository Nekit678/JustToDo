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
    closed?: boolean
    count: number
    tasks?: taskType[]
    toggle?: (id: number) => (void)
    togglePrimary?: (id: number) => (void)
    deleteTask?: (id: number) => (void)
    editTask?: (id: number, text: string) => (void)
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

