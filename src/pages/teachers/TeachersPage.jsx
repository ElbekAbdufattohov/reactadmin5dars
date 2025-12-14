import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TeachersPage() {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {

    async function getAllTeachers() {
      try {

        let res = await axios.get(
          "https://693ea17b12c964ee6b6dea46.mockapi.io/TEACHERS"
        );
        setTeachers(res.data)
      } catch (err) {
        console.log(err);

      }
    }
    getAllTeachers();

  }, [])

  return (
    <div className='grid grid-cols-4 gap-5 container mx-auto p-5'>
      {
        teachers.map((el) => (
          <div className='max-w-[400px] p-5 rounded bg-gray-400 w-full'>
            <img src={el.avatar} alt="" />
            <h1>{el.name}</h1>
            <p>{el.id}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TeachersPage