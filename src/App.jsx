// App.jsx
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import Layout from './components/Layout'
import TeachersPage from './pages/teachers/TeachersPage'
import StudentsPage from './pages/students/StudentsPage'
import SingleTeacherPage from './pages/single-teacher/SingleTeacherPage'
import SingleStudentPage from './pages/single-student/SingleStudentPage'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<LoginPage setIsLogin={setIsLogin} />} />
        <Route path='/' element={(localStorage.getItem("auth") || false) ? <Layout /> : <Navigate to='/' />}>
          <Route path='teachers' element={<TeachersPage />} />
          <Route path='students' element={<StudentsPage />} />
          <Route path='teachers/:id' element={<SingleTeacherPage />} />
          <Route path='students/:id' element={<SingleStudentPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
