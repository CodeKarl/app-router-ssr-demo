import React from 'react'

async function SSRWrapperForCSR({
    children,
}: {
    children: React.ReactNode;
}) {
    // Fetch some data for demonstration
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const userData = await res.json()

    return (
        <div className="border border-white p-4 my-4">
            <h2>SSR Wrapper for CSR</h2>
            <p>User data fetched during SSR:</p>
            <div className="mb-4">
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default SSRWrapperForCSR
