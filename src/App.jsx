
import { useState } from 'react'
import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'

function App() {
  const [queue,setQueue] = useState([])


  const addToQueue = (customer)=>{
    setQueue([...queue,{...customer,id:Date.now(),status:'waiting'}]);

  }

  const updateStatus = (id,newStatus)=>{
    setQueue(queue.map(customer=>{
      return (
        customer.id === id?{...customer,status:newStatus}:customer
      )
    }))

  }

  const removeFromQueue = (id)=>{
    setQueue(queue.filter(customer=>customer.id !==id))

  }

  return (
    <>
    <div>
      <header>
        <h1 className='text-blue-500 font-bold text-center text-2xl'>Queue Management</h1>
        <p className='text-center text-sm text-white my-2'>Manage you queues  </p>
      </header>

      <main className='flex gap-5'>
        <QueueForm onAdd={addToQueue}/>
        <QueueDisplay queue={queue}
        onUpdateStatus={updateStatus}
        onRemove={removeFromQueue}/>
      </main>
    </div>

   
    </>
  )
}

export default App
