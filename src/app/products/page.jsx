"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const getUsers = ()=>{
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
       const response = await fetch(
          'http://localhost:9000/authentication/logout'
       );
       const data = await response.json();
       console.log(data);
       setPosts(data);
    };
    fetchPost();
 }, []);
}

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

  const logout = getUsers();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          
          <button className='bg-red-500 rounded text-white flex flex-end ml-2 mt-2' onClick={logout}><Link href={'/'}>Logout</Link></button>
          <h1>Products</h1>
          <table border={1} className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope="col" className="px-6 py-3">ProductId</th>
              <th scope="col" className="px-6 py-3">ProductName</th>
              <th scope="col" className="px-6 py-3">productBrand</th>
              <th scope="col" className="px-6 py-3">Flavor</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                <td className='px-6 py-4'>{user.id}</td>
                <td className='px-6 py-4'>{user.name}</td>
                <td className='px-6 py-4'>{user.brand}</td>
                <td className='px-6 py-4'>{user.flavor.name}</td>
               
              <td>{
                  
                }</td>

                <td className='px-6 py-4'>{user.flavor.map((getsubmenu, index)=>{
                  <li key={index}>{getsubmenu.name}</li>
                })}</td>
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