"use client"

import React from 'react'

function CsrComponentWithProps(props: any) {
  return (
    <div className='border border-white p-4 my-4'>
        <h2>CsrComponentWithProps</h2>
        <p>{props.title}</p>
        <p>{props.body}</p>
    </div>
  )
}

export default CsrComponentWithProps