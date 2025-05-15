"use client";

import React from 'react'

function CSRComponent() {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        setCount(1);
    }, [])

    return (
        <div className="border border-white p-4">
            <h3>CSR Component</h3>
            <p>This component is rendered on the client</p>
            <div className="flex gap-2">
                <p>Count: {count}</p>
                <button 
                    onClick={() => setCount(count + 1)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                    Increment
                </button>
            </div>
        </div>
    )
}

export default CSRComponent
