import React from 'react'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function SSRGetData() {
    const data = await getData()

    return (
        <div className="border border-white p-4 my-4">
            <h3>SSR GetData</h3>
            <p>This component is rendered on the server</p>
            <div>
                <h4>Post Data</h4>
                <p><strong>Title:</strong> {data.title}</p>
                <p><strong>Body:</strong> {data.body}</p>
            </div>
        </div>
    )
}

export default SSRGetData