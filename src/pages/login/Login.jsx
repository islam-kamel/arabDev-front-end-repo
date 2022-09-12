import React from 'react'
import { Container } from 'react-bootstrap'
import CreateButton from '../../components/Buttons/createButton/CreateButton'
import SignIn from '../../components/Buttons/sign-in/SignIn'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Login.css'
const schema = yup.object().shape({
    email: yup.string().email().required('يجب كتابه البريد الاكتروني'),
    password: yup.string().required('يجب كتابه رمز المرور  '),
})
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitHandler = (data) => {
        console.log(data)
    }
    const errorHandler = (data) => {
        console.log(data)
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
                <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
                    <label>البريد الالكتروني </label>
                    <div>
                        <input
                            {...register('email')}
                            type="email"
                            name="email"
                        />
                        <p className="text-red-500 mt-3">
                            {errors.email?.message}
                        </p>
                    </div>
                    <label>Password</label>
                    <div>
                        <input
                            {...register('password')}
                            name="password"
                            type="password"
                        />
                        <p className="text-red-500 mt-3">
                            {errors.password?.message}
                        </p>
                    </div>
                    <a href="#" className="forgot">
                        هل نسيت كلمه المرور
                    </a>
                    {/* < type="submit" value="Login" > */}
                    <CreateButton
                        type="submit"
                        tailwindStyles="mt-14 px-11 block mx-auto"
                        text="تسجيل الدخول "
                    />
                </form>
            </div>
        </Container>
    )
}
export default Login
