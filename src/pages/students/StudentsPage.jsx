import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StudentsPage() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getAllStudents() {
      try {
        const res = await axios.get(
          'https://693ea17b12c964ee6b6dea46.mockapi.io/STUDENTS'
        )
        setStudents(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }

    getAllStudents()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-[80px] h-[80px] border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {students.map(el => (
      <Link to={`/students/${el.id}`} className="p-5 rounded cursor-pointer hover:bg-gray-500 bg-gray-400">
          <img src={el.avatar} alt={el.name} />
          <h1>{el.name}</h1>
          <p>{el.id}</p>
        </Link>
      ))}
    </div>
  )
}



export default StudentsPage
