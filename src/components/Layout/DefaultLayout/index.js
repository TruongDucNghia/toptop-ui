import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const DefaultLayout = ({children}) => {
  return (
    <div className='container'>
        <Header/>
        <div className='main'>
            <Sidebar/>
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout