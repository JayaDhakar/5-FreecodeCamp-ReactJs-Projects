import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchFilter = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=> setData(res.data))
      .catch(err => console.log(err));

    }, [])
    
  return (
    <div className='p-5 bg-light'>
        <div className="bg-white shadow border">
            <table className='table'>
                {/* <input  type='text'/> */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=>{
                          <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>{d.phone}</td>
                          </tr>
                    })}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default SearchFilter;
