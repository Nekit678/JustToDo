import { createSlice } from "@reduxjs/toolkit";

interface taskType {
    primary: boolean
    text: string
    closed: boolean
    id: number
}

export interface listType {
    id: number
    name: string
    lastId: number
    tasks: taskType[]
}

interface initialStateType {
    lists: listType[]
}

interface addTaskData {
    primary: boolean
    text: string
    closed: boolean
}

interface addTaskAction {
    type: string
    payload: { id: number, task: addTaskData }
}

interface toggleAction {
    type: string
    payload: { list_id: number, task_id: number }
}

let initialState: initialStateType = {
    lists: []
}

const fullInfoSlice = createSlice(
    {
        name: "fullInfo",
        initialState: initialState,
        reducers: {
            setInfo(state, action) {
                state.lists = action.payload
            },

            addTask(state, action: addTaskAction) {
                const list = state.lists.find((item) => (item.id === action.payload.id))

                if (list !== undefined) {
                    const lastId = list.lastId
                    list.tasks.push({ ...action.payload.task, id: lastId })
                    list.lastId += 1
                }

            },
            toggleTask(state, action: toggleAction) {
                const list = state.lists.find((item) => (item.id === action.payload.list_id))
                const task = list?.tasks.find((item) => (item.id === action.payload.task_id))
                if (task !== undefined) {
                    task.closed = !task.closed
                }
            },
            togglePrimary(state, action: toggleAction) {
                const list = state.lists.find((item) => (item.id === action.payload.list_id))
                const task = list?.tasks.find((item) => (item.id === action.payload.task_id))
                if (task !== undefined) {
                    task.primary = !task.primary
                }
            },
            deleteTask(state, action: { type: string, payload: { listId: number, taskId: number } }) {
                const list = state.lists.find((item) => (item.id === action.payload.listId))
                const taskIndex = list?.tasks.findIndex((item) => (item.id === action.payload.taskId))
                if (taskIndex !== undefined) {
                    list?.tasks.splice(taskIndex, 1)
                }
            },

            editTask(state, action: { type: string, payload: { listId: number, taskId: number, text: string } }) {
                const list = state.lists.find((item) => (item.id === action.payload.listId))
                const task = list?.tasks.find((item) => (item.id === action.payload.taskId))
                if (task !== undefined) {
                    task.text = action.payload.text
                }
            },

            createList(state, action: { type: string, payload: null }) {
                state.lists.push({ id: state.lists[state.lists.length - 1].id + 1, lastId: 0, name: "Без названия", tasks: [] })
            },
            renameList(state, action: { type: string, payload: { id: number, name: string } }) {
                const list = state.lists.find((item) => (item.id === action.payload.id))
                if (list !== undefined) {
                    list.name = action.payload.name
                }
            },
            deleteList(state, action: { type: string, payload: number }) {
                const listIndex = state.lists.findIndex((item) => (item.id === action.payload))
                if (listIndex !== -1) {
                    state.lists.splice(listIndex, 1)
                }
            },


        }
    }
)


export const { setInfo, addTask, toggleTask, togglePrimary, deleteTask, createList, renameList, editTask } = fullInfoSlice.actions
export default fullInfoSlice.reducer