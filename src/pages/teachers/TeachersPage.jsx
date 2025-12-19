import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getAllTeachers() {
      try {

        let res = await axios.get(
          "https://693ea17b12c964ee6b6dea46.mockapi.io/TEACHERS"
        );
        setTeachers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);

      }
    }
    getAllTeachers();

  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center flex-col h-screen'>
        <div className='text-red-500 relative w-[100px] h-[100px] animate-spin border-[4px] border-red-500 rounded-[50px] font-bold flex items-center justify-center'>
          <span className='absolute w-[15px] h-[4px] bg-[blue] top-[-4px] block'></span>
          <span className='absolute w-[20px] h-[4px] bg-[blue] top-[92px] block'></span>
          <span className='absolute w-[20px] h-[4px] bg-[blue] top-[px] block'></span> !
        </div>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 gap-5 container mx-auto p-5'>
      {
        teachers.map((el) => (
          <div key={el.id} className='max-w-[400px] p-5 rounded hover:bg-gray-500 bg-gray-400 w-full'>
            <Link to={`/teachers/${el.id}`}>
            <img src={el.avatar} alt="" />
            </Link>
            <h1>{el.name}</h1>
            <p>{el.id}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TeachersPage