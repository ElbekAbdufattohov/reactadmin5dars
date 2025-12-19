import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
// import SingleTeacherPage from "./pages/SingleTeacherPage"

const SingleTeacherPage = () => {
    const { id } = useParams();
    const [Teacher, setTeacher] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getTeacher() {
            try {
                const res = await axios.get(`https://693ea17b12c964ee6b6dea46.mockapi.io/TEACHERS/${id}`)
                setTeacher(res.data);
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        getTeacher()
    }, [id])
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

        <div className='max-w-[400px] p-5 rounded bg-gray-400 w-full'>
            <img src={Teacher?.avatar} alt="" />
            <h1>{Teacher?.name}</h1>
            <p>{Teacher?.id}</p>
        </div>
    );
};

export default SingleTeacherPage;