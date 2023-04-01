import { RootState } from "../store"
import { listType } from './../reducers/fullInfo-reducer';

export const getListById = (state: RootState, id: number) => {
    const list = state.fullInfo.lists.find((item) => (item.id === id))
    return list
}

export const getClosedTasks = (state: RootState, id: number) => {
    const list = getListById(state, id)
    const closedTasks = list?.tasks.filter((item) => (item.closed === true))
    const count = closedTasks?.length
    return { closedTasks: closedTasks, closedCount: count }

}

export const getOpenTasks = (state: RootState, id: number) => {
    const list = getListById(state, id)
    const openTasks = list?.tasks.filter((item) => (item.closed === false))
    const count = openTasks?.length
    return { openTasks: openTasks, openCount: count }
}

export const getListName = (state: RootState, id: number) => {
    const list = getListById(state, id)
    return list?.name
}

const getCountOpenTasks = (list: listType) => {
    const openTasks = list?.tasks.filter((item) => (item.closed === false))
    const count = openTasks?.length
    return count
}

export const getShortInfo = (state: RootState) => {
    return state.fullInfo.lists.map((item) => ({id:item.id, name:item.name, count:getCountOpenTasks(item)}))
}

export const getTaskById = (state: RootState, idList:number, idTask:number) => {
    const list = state.fullInfo.lists.find((item)=>(item.id === idList))
    const task = list?.tasks.find((item)=>(item.id === idTask))
    return task
}

