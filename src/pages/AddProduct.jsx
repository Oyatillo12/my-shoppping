import { Button, IconButton, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import addimg from '../assets/images/add-img.png'
import { ArrowBack, Edit, Mode } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAddProductsMutation } from '../store/produtsApi'
import Loading from '../assets/images/loading.png'

function AddProduct() {
  const [hover, setHover] = useState(false)
  const [img, setImg] = useState(addimg)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [productAdded] = useAddProductsMutation()

  const requiere = name || price || quantity || description

  async function handleAddSubmit(e) {
    e.preventDefault()
    if (!name.trim() || !price || !quantity || !description.trim()) {
      alert("Please fill out all fields");
      return;
    }


    setIsLoading(true)
    const data = {
      title: name,
      price: price,
      quantity: quantity,
      description: description,
      img: img,
    }
    productAdded(data)
    setTimeout(() => {
      navigate('/')
      setName('')
      setPrice('')
      setQuantity('')
      setDescription('')
      setImg(addimg)
    }, 1000)


  }

  const navigate = useNavigate()
  return (
    <div className='max-w-[1280px] mx-auto '>
      <Button onClick={() => navigate(-1)} className='!mb-2 !text-black !font-semibold !text-[20px]' startIcon={<ArrowBack className='scale-125' />}>Back to Shopping</Button>
      <h2 className='text-[33px] font-bold mb-6'>Add Product</h2>
      <form onSubmit={handleAddSubmit} autoComplete='off' className='flex justify-around w-[80%] '>
        <div className='flex flex-col w-[50%] space-y-4'>
          <TextField value={name} onChange={(e) => setName(e.target.value)} type='text' label='Name' />
          <TextField value={price} onChange={(e) => setPrice(e.target.value)} type='number' label='Price' />
          <TextField value={quantity} onChange={(e) => setQuantity(e.target.value)} type='number' label='Quantity' />
          <TextareaAutosize value={description} onChange={(e) => setDescription(e.target.value)} className='px-4 pt-2 resize-none !text-[16px] !border-[#e5e7eb] border-2 !rounded-md focus:!border-[#1976d2]' aria-label="description" minRows={4} placeholder="Description" />

        </div>
        <div className='flex flex-col justify-end relative'>
          <label onMouseEnter={() => setHover(true)} className={`${hover ? "" : "hidden"} duration-500 absolute z-50 top-[100px] !mx-auto  inset-x-[95px]`}>
            <Mode onClick={() => setTimeout(() => setHover(false), 200)} className='!bg-[#00000033] cursor-pointer scale-125 !w-[40px] !h-[40px] p-2 !text-white !rounded-full' />
            <input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
          </label>
          <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`bg-[#00000033] w-[250px] h-[250px] object-cover rounded-lg z-10 duration-500 ${hover ? "backdrop-blur-[5px]  bg-blend-darken" : ""}`} src={img} alt="Product img" width={250} height={250} />
          <Button variant='contained' type='submit' className='!bg-[#DB4444] !mt-10 block'>{isLoading ? <img className='h-[24.5px] scale-[2.3]' src={Loading} alt='loading img ' height={"24.5"} /> : "Add Product"}</Button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
