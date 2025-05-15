import CSRWrapperForSSR from '@/app/components/csr/csr-wrapper-for-ssr'
import SSR from '@/app/components/ssr/ssr'
import SSRGetData from '@/app/components/ssr/ssr-get-data'
import React from 'react'

function SSRComponentInCSRComponentPage() {
    return (
        <div>
            <h1>SSR Component in CSR Component</h1>
            <CSRWrapperForSSR>
                <SSR />
                <SSRGetData />
            </CSRWrapperForSSR>
        </div>
    )
}

export default SSRComponentInCSRComponentPage