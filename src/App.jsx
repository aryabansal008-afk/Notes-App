import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = ()=> {
    const [title,setTitle] = useState("");
    const[details,setDetails] = useState("");
    const[task,setTask] = useState([]);


  const submitHandler =(e)=>{
    e.preventDefault();
    const copyTask =[...task];
    copyTask.push({title,details});
    setTask(copyTask);
  }

  const deleteNote = (idx) =>{
    console.log([idx]);
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
    
  
return(
  <div onSubmit={(e) =>{submitHandler(e)}} className ="h-screen lg:flex bg-black">
    <form  className ="flex gap-4 w-2/3 items-start flex-col bg-cover gap-7 p-10 bg-[url('https://images.openai.com/static-rsc-3/odfzQDHFF7yhtARxbj8wl89fQ_PAO7oi1-URuzg09VyluJrZr3FF7n6HgbrvvXEcpIgvVI5g8vP3mred30zonoB6MGpO5aCD_HYvMswg1-0?purpose=fullsize')] opacity-90">
      <h1 className="text-4xl font-bold pl-8 decoration-black">ADD NOTES</h1>

      <input type = "text" placeholder ="Enter Notes Heading" 
      className ="px-5 w-2/3 py-3 border-4 outline-none rounded decoration-black" 
      value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      
      <textarea type="text" className="px-5 w-full h-50 py-3 border-2 flex items-start flex-row rounded"
      placeholder ="Feel free to share...."
      value={details} onChange={(e)=>{setDetails(e.target.value)}}/>
      
      <button 
      className = 'bg-white active:scale-93 w-full font-medium text-black px-5 py-3 border border-stone-300 rounded'>Add Note</button>
    </form>

    <div className='flex lg:w-1/3 bg-gray-900 border-l-5 border-stone-300 flex-wrap p-10'>
    <h1 className="text-4xl font-bold text-white">YOUR NOTES</h1>
    <div className="flex flex-wrap gap-5 mt-4 h-full overflow-auto content-start">

    {task.map(function(elem,idx){
      return( <div key={idx} className = "h-53 w-40 bg-cover mt-5 rounded-2xl text-black p-5 pt-10px bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
        <button onClick={()=>{deleteNote(idx)}} className='active:bg-gray-900 bg-red-400 p-1.5 w-full rounded-full text-xs font-normal text-white mt-3'>Delete</button>
        <h3 className = 'leading-tight text-xl font-bold mt-10 justify-center text-gray-700'>"{elem.title}"</h3>
        {/* <p className ='mt-4 leading-tight font-medium text-gray-400'>{elem.details}</p> */}
      </div>)
    })}
    </div>

    </div>
    </div>
)
  
}

export default App;
