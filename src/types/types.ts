
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
    complete?: (id: number) => (void)

}

