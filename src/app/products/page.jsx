"use client"
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:9000/products")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Products</h1>
          <table border={1} className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="px-6 py-3">ProductId</th>
              <th scope="col" className="px-6 py-3">ProductName</th>
              <th scope="col" className="px-6 py-3">ProductPrice</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                <td className='px-6 py-4'>{user.id}</td>
                <td className='px-6 py-4'>{user.productname}</td>
                <td className='px-6 py-4'>{user.productprice}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )

  }
export default Products