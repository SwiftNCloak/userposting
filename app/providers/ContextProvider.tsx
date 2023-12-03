"use client"

import React from 'react'

interface Props {
    children: React.ReactNode;
}

function ContextProvider({children}: Props) {
  return <div>
    {children}
  </div>
}

export default ContextProvider