import React from 'react'
import Image from 'next/image'

const Card = ({title, description, image,className}) => {
  return (
    <div className={`${className} flex flex-col gap-5 p-5 rounded-xl`}>
    
        <p className='text-center text-xl font-semibold'>{title}</p>
        {description && <div>{description}</div>}
        <Image src={image} height={300} width={300}/>

    </div>
  )
}

export default Card