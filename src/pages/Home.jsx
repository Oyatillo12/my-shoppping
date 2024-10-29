import React from 'react'
import CustomCard from '../components/CustomCard'
import { useFetchProductsQuery } from '../store/produtsApi'


function Home() {
  const { data = [] } = useFetchProductsQuery()
  return (
    <div className='mx-auto max-w-[1280px] px-5 w-full'>

        <div className='flex flex-wrap items-center justify-between gap-y-4'>
          {data.map(item =>  <CustomCard key={item.id} item={item} />)}
        </div>
    </div>
  )
}

export default Home
