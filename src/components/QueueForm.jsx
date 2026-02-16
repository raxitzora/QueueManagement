import { useState } from "react"

export default function QueueForm({onAdd}){
    const [name,setName] = useState('');
    const [service,setService] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!name.trim() || !service.trim()) return
        onAdd({name,service,})
        setName('')
        setService('')

    }
    return(
        <>
        <form action="">
            <h2>Add to queue</h2>
            <div>
                <input type="text" 
                placeholder="customer name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <select value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value="">Select Service</option>
                    <option value="consultation">consultation</option>
                    <option value="payment">payment</option>
                    <option value="supprt">support</option>
                </select>
            </div>
            <button type="submit">Add Customer</button>
        </form>
        </>
    )

}