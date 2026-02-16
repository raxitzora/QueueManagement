import { useState } from "react"

export default function QueueForm({ onAdd }) {
    const [name, setName] = useState('');
    const [service, setService] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name.trim() || !service.trim()) return
        onAdd({ name, service })
        setName('')
        setService('')
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Add to Queue
                </h2>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">
                        Customer Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter customer name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">
                        Select Service
                    </label>
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="">Select Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="payment">Payment</option>
                        <option value="supprt">Support</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
                >
                    Add Customer
                </button>
            </form>
        </div>
    )
}
