import { useState } from "react"

type TaskProps = {
    id: number;
    name: string;
    doneFn : Function;
    deleteFn: Function;
    done: boolean;
}
  
const Task = ({id, name,doneFn,deleteFn,done} : TaskProps) => {

  const [mouseIn, setMousein] = useState<boolean>(false);

  const onMouseEnter = () => {
    setMousein(true)
  }

  const onMouseLeave = () => {
    setMousein(false)
  }


    return (
      <div 
        onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}
        className="flex justify-between h-8 items-center py-6 border-b">
        <p style={done? {textDecoration:"line-through"}:{}}>{name}</p>
        <div className="flex space-x-1 items-center" style={(mouseIn && !done)? {visibility:"visible"}:{visibility:"hidden"}}>
            <button 
            className="bg-green-400 w-24 text-2xl"
            onClick={ () => doneFn(id) }>Done</button>
            <button 
            className="bg-red-400 w-24 text-2xl"
            onClick={ () => deleteFn(id) }>Delete</button>
        </div>
        
      </div>
    )
  }
  
export default Task