import { Delete, EditOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDeleteProductMutation, useEditProductMutation, useFetchProductsQuery } from '../store/produtsApi'
import { Box, Button, Modal, TextField } from '@mui/material'

function List() {
    const [open, setOpen] = useState(false)
    const [editValue, setEditValue] = useState('')
    const [editId, setEditId] = useState(null)
    console.log(editValue);
    

    const { data = [] } = useFetchProductsQuery()
    const [deleteProduct] = useDeleteProductMutation()
    const [editProduct] = useEditProductMutation()

    const handleEditOpen = (item) => {
        setEditId(item.id)
        setOpen(true)
        setEditValue(item.title)
    }
    function handleEditSubmit(e) {
        e.preventDefault();
        editProduct({ id: editId, title: editValue })
        setOpen(false)
    }

    return (
        <>
            <div className='w-[500px] mx-auto mt-5'>
                <ul className='bg-white flex flex-col space-y-2'>
                    {data.map(item => (
                        <li key={item.id} className='flex items-center justify-between p-4 rounded-lg bg-sky-400'>
                            <p className='text-white text-[18px] opacity-90 font-semibold'>{item.title}</p>
                            <div>
                                <EditOutlined onClick={() => handleEditOpen(item)} className='cursor-pointer' />
                                <Delete onClick={() => deleteProduct(item.id)} className='cursor-pointer' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal className='flex items-center justify-center z-50' open={open} onClose={() => setOpen(false)}>
                <Box>
                    <form onSubmit={handleEditSubmit} className='flex items-center justify-between w-[500px] shadow-lg bg-white p-4 rounded-lg'>
                        <TextField className='!w-[78%] ' value={editValue} onChange={(e) => setEditValue(e.target.value)} type='text' label='Edit product' size='small' />
                        <Button className='!w-[20%] ' variant='contained'>Edit</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default List
