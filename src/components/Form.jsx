import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAddProductsMutation } from '../store/produtsApi'

function Form() {
  const [value, setValue] = useState('')
  const [addProducts] = useAddProductsMutation()
  
  function handleAddSubmit(e) {
    e.preventDefault()
    if(value.trim() !== '') {
      const data = {
        title: value
      }
      addProducts(data);
    }
     setValue('')
  }
  return (
    <div>
      <form onSubmit={handleAddSubmit} className='w-[500px] mx-auto rounded-lg p-4 bg-sky-400 flex items-center justify-between' >
        <TextField value={value} onChange={(e) => setValue(e.target.value)} size='small' label='Add product' className='!w-[78%]'  type='text' />
        <Button variant='contained' className='!w-[20%]' type='submit'>Add</Button>
      </form>
    </div>
  )
}

export default Form
