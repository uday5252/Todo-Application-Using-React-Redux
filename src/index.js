
import { render } from "react-dom"
import { Provider } from "react-redux"
import { todoStore } from "./redux.js"
import { useDispatch } from 'react-redux'
import { addTheTask } from './redux'
import { useState } from "react"
import First from "./First.js"
import Second from "./Second.js"


function App()
{
    const [ task, setTask ] = useState("")
    // task = "" ==> task = "Playing"

    const dispatch = useDispatch()


   function collectTask(event)
   {
        //Logic to collect the task
        setTask(event.target.value)
   }

   function sendTask()
   {
        //Logic to send the task from this file to redux file
        dispatch(addTheTask(task))
        // addTheTask("Playing")
   }
   
    return(
    <div>
        Enter Task:<input type="text" onChange={collectTask}/>
        <button onClick={sendTask}>Add Task</button>
        <First/>
        <Second/>
    </div>
   ) 
}

render(<Provider store={todoStore}>
    <App/>
</Provider>, document.getElementById("root"))
