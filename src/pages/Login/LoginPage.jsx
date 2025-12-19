import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = ({setIsLogin}) => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

function LoginPage(e){
    e.preventDefault();
    if(phone === "935444770" && password === "elbek4770"){
        setIsLogin(localStorage.setItem("auth,"))
        navigate("/teachers")
        toast.success("Tizimga muvaffaqiyatli kirdingiz")
    }else{
        toast.error("Login yoki parol xato")
    }
}

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-300'>
            <form onSubmit={LoginPage} className='flex flex-col gap-5 p-5 max-w-[450px] w-full rounded-[20px] bg-white'>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    className='border border-gray-300 rounded p-2' type="text" placeholder='Telefon raqam' />

                <input
                onChange={(e) => setPassword(e.target.value)}
                    className='border border-gray-300 rounded p-2' type="password" placeholder='Parolni kiriting' />

                <button type='submit' className='border border-blue-400 bg-blue-400 text-white rounded cursor-pointer p-2 hover:bg-blue-500 text-[18px]'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage