
import { createStore } from "redux"

const initialData = {
    allTasks: []
}

export function addTheTask(info)//info = "Playing"
{
    return{
        type: "ADD_TASK",
        payload: info//"Playing"
    }
}

// actionData = {
//     type: "ADD_TASK",
//     payload: info//"Playing"
// }

function todoReducer(state = initialData, actionData)
{
    if(actionData.type == "ADD_TASK")
    {
        //Logic to insert the task in to the redux store
        return{
            allTasks: [ ...state.allTasks, actionData.payload ]//allTasks: ["Playing"]
        }

    }
    return state 
}

export const todoStore = createStore(todoReducer)
