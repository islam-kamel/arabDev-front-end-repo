import React, { useRef, useContext } from 'react'
import { Container } from 'react-bootstrap'
import CreateButton from '../../components/Buttons/createButton/CreateButton.jsx'
import SignIn from '../../components/Buttons/sign-in/SignIn'
/* eslint-disable camelcase */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { IsLoggedInContext } from '../../context/IsLoggedInContext'
import { UserDataContext } from '../../context/UserDataContext'
import jwt_decode from 'jwt-decode'

const schema = yup.object().shape({
    userName: yup
        .string()
        .required(' يجب كتابه البريد الاكتروني او اسم المستخدم'),
    password: yup.string().required('يجب كتابه رمز المرور  '),
})

const Login = () => {
    const loginErrorRef = useRef()
    const navigate = useNavigate()
    const { setIsLoggedIn } = useContext(IsLoggedInContext)
    const { setUserData, setAuthTokens } = useContext(UserDataContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitHandler = async (data) => {
        try {
            const response = await axios.post(
                'http://localhost/api/v1/user/token/',
                {
                    username: data.userName,
                    password: data.password,
                }
            )
            setAuthTokens(response.data)
            console.log(response.data)
            setUserData(jwt_decode(response.data.access))
            setIsLoggedIn(true)
            navigate('/')
        } catch (err) {
            loginErrorRef.current.innerText =
                'يوجد  خطأ في رمز المرور او اسم المسنخدم'
        }
    }

    return (
        <Container className="py-7">
            <div className="login-div bg-white rounded-md mx-auto max-w-[575px] p-12 ">
                <h1 className="text-center font-bold text-3xl	 mb-11">
                    تسجيل الدخول
                </h1>
                <SignIn
                    operation="Sign up"
                    img="https://freesvg.org/img/1534129544.png"
                    website="Google"
                />
                <SignIn
                    operation="Sign up"
                    img="https://pngimg.com/uploads/github/github_PNG83.png"
                    website="Githup"
                />
                <form onSubmit={handleSubmit(submitHandler)}>
                    <p className="text-red-500 mt-1" ref={loginErrorRef}></p>
                    <label>البريد الالكتروني \ اسم المستخدم</label>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            {...register('userName')}
                        />
                        <p className="text-red-500 mt-3">
                            {errors.email?.message}
                        </p>
                    </div>
                    <label>Password</label>
                    <div>
                        <input
                            name="password"
                            type="password"
                            {...register('password')}
                        />
                        <p className="text-red-500 mt-3">
                            {errors.password?.message}
                        </p>
                    </div>

                    <a href="#" className="forgot">
                        هل نسيت كلمه المرور
                    </a>
                    <CreateButton
                        type="submit"
                        tailwindStyles="mt-4 px-11 block mx-auto"
                        text="تسجيل الدخول "
                    />
                </form>
            </div>
        </Container>
    )
}
export default Login
