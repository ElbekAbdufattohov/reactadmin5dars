import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleStudentPage() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStudent() {
      try {
        const res = await axios.get(
          `https://693ea17b12c964ee6b6dea46.mockapi.io/STUDENTS/${id}`
        )
        setStudent(res.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStudent()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }


  return (
     <div className='max-w-[400px] p-5 rounded bg-gray-400 w-full'>
            <img src={student?.avatar} alt="" />
            <h1>{student?.name}</h1>
            <p>{student?.id}</p>
        </div>
  )
}

export default SingleStudentPage
