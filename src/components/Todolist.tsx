import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
  id: number;
  name: string;
  done: boolean;
}

type DoneData = {
  id: number;
  name: string;
  done: boolean;
}

const TodoList = () => {

  // input value
  const [curTask, setCurTask] = useState<string>('')

  // ongoing tasks
  const [tasks, setTasks] = useState<TaskData[]>([])

  // done task
  const [dones, setDones] = useState<DoneData[]>([])

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }

  const resetInput = () => {
    var temp = curTask
    var inputField = document.querySelector('input');
    if(inputField != null){
      inputField.value = "";
    }
    setCurTask('');
  }

  const addTask = (taskName: string) => {
    if(curTask === ''){
      alert("Task can't be empty")
    }else{
      const newId = (new Date()).getTime()
      var newTasks = tasks
      newTasks.push({id: newId, name: taskName, done:false})
      setTasks(newTasks)
      resetInput();
    }
    
  }

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if(ev.key === "Enter"){
        addTask(curTask);   
    }
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  const addDone = (id: number) => {
    // copy ongoing list to done list and select only what we want
    var newDone = tasks;
    const tobeDone = newDone[newDone.findIndex(x => x.id === id)]

    //console.log(tobeDone)
    var newSetDone = dones
    const newId = (new Date()).getTime()
    newSetDone.push({id: newId, name: tobeDone.name, done: true})
    //console.log(newSetDone)
    setDones(newSetDone)

    // Delete from ongoing tasks
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  return (
    <div className='mx-auto max-w-4xl'>
        <div className='flex space-x-1'>
            <input 
                className='border border-gray-400 w-full text-2xl'
                onChange={onChangeCallback} 
                onKeyDown={onKeyDownCallback}>   
            </input>
            <button 
                className='border border-gray-400 w-8 font-bold'
                onClick={() => addTask(curTask)}>
            +</button>
            
        </div>
        {tasks.map( x => <Task id={x.id} name={x.name} doneFn={addDone} deleteFn={deleteTask} done={x.done}/>)}
        {dones.map( x => <Task id={x.id} name={x.name} doneFn={addDone} deleteFn={deleteTask} done={x.done}/>)}
    </div>
  )
}

export default TodoList