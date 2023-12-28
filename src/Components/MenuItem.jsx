import React from 'react'

const MenuItem = ({menuItem}) => {
  return (
    <div className='basis-[23%]'>
        <h1 className='c capitalize mb-4'>{menuItem.name}</h1>
        <div className="w-full h-[13rem] rounded-md overflow-hidden">

        <img src={menuItem?.image} className=' relative ' alt="" />
        </div>
        <p>{menuItem?.price} ks</p>
    </div>
  )
}

export default MenuItem