import CSRComponent from '@/app/components/csr/csr-component'
import SSRWrapperForCSR from '@/app/components/ssr/ssr-wrapper-for-csr'
import React from 'react'

function CSRComponentInSSRComponentPage() {
    return (
        <div>
            <h1>CSR Component in SSR Component</h1>
            <SSRWrapperForCSR>
                <CSRComponent />
            </SSRWrapperForCSR>
        </div>
    )
}

export default CSRComponentInSSRComponentPage