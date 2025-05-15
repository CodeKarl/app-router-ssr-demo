// "use client" 
// Partial Solution of making this a server component instead of client component, but this will cause the passed component to not load on SSR

// Making this a "client component" will cause the "Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it."

// "use server" does the same as making this a server component

// Issue: https://github.com/vercel/next.js/discussions/49625

import React from 'react'

async function Test({ Component }: { Component: React.ComponentType }) {
  return (
    <div>
        <Component />
    </div>
  )
}

export default Test