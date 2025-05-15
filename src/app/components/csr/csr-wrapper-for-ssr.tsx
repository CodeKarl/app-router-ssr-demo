"use client";

import React from 'react'

function CSRWrapperForSSR({
    children,
}: {
    children: React.ReactNode;
}) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        setCount(1);
    }, []);

    return (
        <div>
            <h2>CSR Wrapper for SSR</h2>
            <p>Count: {count}</p>
            <div>
                {children}
            </div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default CSRWrapperForSSR