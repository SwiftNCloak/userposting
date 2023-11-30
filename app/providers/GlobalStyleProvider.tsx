"use client"

import React from 'react'

interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider( {children }: Props) {
  return (
    <div>GlobalStyleProvider</div>
  )
}

export default GlobalStyleProvider