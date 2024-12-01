import Link from 'next/link'
import React from 'react'

const BurgerMenuList = () => {
  return (
    <div className='flex flex-col gap-7 font-medium'>
        <Link href={'/'}>Docs</Link>
        <Link href={'/'}>Pricing</Link>
        <Link href={'/'}>Pricing</Link>
        <Link href={'/'}>Changelog</Link>
        <Link href={'/'}>Blogs</Link>
        <Link href={'/'}>Login</Link>

    </div>
  )
}

export default BurgerMenuList