import React, { useRef, useContext } from 'react'
import { Container } from 'react-bootstrap'
import CreateButton from '@components/buttons/CreateButton.jsx'
import { GithubButton } from '@components/buttons/oauth/GithubLogin'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { IsLoggedInContext } from '@context/IsLoggedInContext'

import Cookies from 'js-cookie'

const schema = yup.object().shape({
  userName: yup.string().required(' يجب كتابه البريد الاكتروني او اسم المستخدم'),
  password: yup.string().required('يجب كتابه رمز المرور'),
})

const Login = () => {
  const loginErrorRef = useRef()
  const navigate = useNavigate()
  const { setIsLoggedIn } = useContext(IsLoggedInContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const submitHandler = async data => {
    try {
      await axios.post('http://localhost:3001/auth/native', {
        username: data.userName,
        password: data.password,
        grant_type: process.env.REACT_APP_GRANT_TYPE,
        client_id: process.env.REACT_APP_API_ID,
        client_secret: process.env.REACT_APP_API_SECRET,
      })

      Cookies.set('user_name', data.userName)
      const userData = await axios.get('http://localhost/api/v1/user/' + data.userName)
      Cookies.set('user_data', JSON.stringify(userData.data))
      setIsLoggedIn(true)
      navigate('/')
      loginErrorRef.current.innerText = ''
    } catch (err) {
      console.log('err :' + err)
      loginErrorRef.current.innerText = 'يوجد  خطأ في رمز المرور او اسم المسنخدم'
    }
  }

  return (
    <Container className="py-7">
      <div className="login-div bg-white rounded-md mx-auto max-w-[575px] p-12 ">
        <h1 className="text-center font-bold text-3xl	 mb-11">تسجيل الدخول</h1>
        <GithubButton />
        <form onSubmit={handleSubmit(submitHandler)}>
          <p className="text-red-500 mt-1" ref={loginErrorRef}></p>
          <label>البريد الإلكتروني \ اسم المستخدم</label>
          <div>
            <input type="text" name="userName" {...register('userName')} />
            <p className="text-red-500 mt-3">{errors.email?.message}</p>
          </div>
          <label>Password</label>
          <div>
            <input name="password" type="password" {...register('password')} />
            <p className="text-red-500 mt-3">{errors.password?.message}</p>
          </div>
          <a href="#" className="forgot">
            هل نسيت كلمه المرور
          </a>
          <CreateButton type="submit" className="mt-4 px-11 block mx-auto" text="تسجيل الدخول" />
        </form>
      </div>
    </Container>
  )
}
export default Login
