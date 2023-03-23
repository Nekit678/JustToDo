import { RootState } from "../store"

export const getListById = (state:RootState, id:number) => {
    const list = state.fullInfo.lists.find((item)=>(item.id == id))
    return list
}

export const getClosedTasks = (state:RootState, id:number) => {
    const list = getListById(state, id)
    const closedTasks = list?.tasks.filter((item)=>(item.closed == true))
    return closedTasks

}

export const getOpenTasks = (state:RootState, id:number) => {
    const list = getListById(state, id)
    const openTasks = list?.tasks.filter((item)=>(item.closed == false))
    return openTasks
}