import React, { createContext, PropsWithChildren, PropsWithoutRef, useEffect } from 'react'
import axios from 'axios'
export const myContext = createContext<any>({})
export default function Context(props: PropsWithChildren<any>) {
  useEffect(() =>{
    axios.get('http://localhost:4000')
  }, [])
  return (
    <myContext.Provider value={1000}></myContext.Provider>
  )
}
