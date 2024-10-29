import { Favorite, ShoppingBasket } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <header className='py-4 flex items-center justify-between mx-auto mb-10 w-[1280px] border-b-[2px] border-[#FEFAF1]'>
            <h1 className='text-[30px] font-bold'>My Shopping</h1>
            <div className='flex items-center space-x-20'>
                <TextField className='w-[300px]' autoComplete='off' type='search' placeholder='Search products' />
                <div className='flex items-center '>
                    <Button className='!text-black !rounded-full'><Favorite className='scale-[1.3]' /></Button>
                    <Button className='!text-black !rounded-full'><ShoppingBasket className='scale-[1.3]' /></Button>
                    <Button onClick={() => navigate('/add-product')} variant='contained' className='!bg-[#DB4444]'>Add New</Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
