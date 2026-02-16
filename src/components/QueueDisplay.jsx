import React from 'react'

function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'waiting':
                return 'var(--warning)';
            case 'serving':
                return 'var(--success)';
            case 'completed':
                return 'var(--info)';
            default:
                return 'var(--text)';
        }
    }

    return (
        <div className="max-w-3xl mx-auto mt-12 px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Current Queue
            </h2>

            {queue.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-gray-500 text-lg">No Customer Data</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {queue.map((customer) => (
                        <div
                            key={customer.id}
                            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {customer.name}
                                </h3>
                                <p className="text-sm text-gray-500 capitalize">
                                    {customer.service}
                                </p>
                            </div>

                            <div className="px-4 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                                {customer.status}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default QueueDisplay
