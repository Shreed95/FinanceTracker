import React, { useState } from 'react'
import Navbar from '../components/Nav';
import FinanceForm from '../components/FinanceForm';
import AllTransaction from '../components/AllTransaction';
import Budget from '../components/Budget';
const Home = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <Navbar />
      <div className='bg-black'>
        <FinanceForm setCount={setCount} />
        <Budget count={count} />
        <AllTransaction count={count} />
      </div>
    </>
  )
}

export default Home