import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentsPage() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function getAllStudents() {
      try {
        const res = await axios.get(
          'https://693ea17b12c964ee6b6dea46.mockapi.io/STUDENTS'
        )
        setStudents(res.data)
      } catch (err) {
        console.log(err)
      }
    }

    getAllStudents()
  }, [])

  return (
    <div className="grid grid-cols-4 gap-5 container mx-auto p-5">
      {students.map((el) => (
        <div
          key={el.id}
          className="max-w-[400px] p-5 rounded bg-gray-400 w-full"
        >
          <img src={el.avatar} alt={el.name} />
          <h1>{el.name}</h1>
          <p>{el.id}</p>
        </div>
      ))}
    </div>
  )
}

export default StudentsPage
