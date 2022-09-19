import React, { useRef } from 'react'
import SignIn from '../../components/Buttons/sign-in/SignIn'
import './Register.css'
import CreateButton from '../../components/Buttons/createButton/CreateButton'
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import * as yup from 'yup'

const schema = yup.object().shape({
    firstName: yup.string().required('يجب كتابه الاسم الاول'),
    lastName: yup.string().required('يجب كتابه الاسم الاخير'),
    email: yup.string().email().required('يجب كتابه البريد الاكتروني'),
    userName: yup.string().max(50).required('يجب كتابه اسم المستخدم '),
    dateOfBirth: yup.date('ادخل تاريخ ميلادك').required('ادخل تاريخ ميلادك'),
    password: yup
        .string()
        .min(6, 'يجب ان يزيد رمز المرور عن 6 احرف')
        .max(18, 'لا يجب ان يزيد رمز المرور عن 18 حرف')
        .required('يجب كتابه رمز المرور  '),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'رمز المرور غير متطابق')
        .required(' يجب تاكيد رمز المرور  '),
})

const Register = () => {
    const emailErrorRef = useRef()
    const userNameErrorRef = useRef()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitHandler = async (data) => {
        try {
            await axios.post('http://localhost/api/v1/user/register', {
                username: data.userName,
                date_of_birth: new Date(data.dateOfBirth)
                    .toISOString()
                    .slice(0, 10),
                email: data.email,
                password: data.password,
            })
        } catch (err) {
            userNameErrorRef.current.innerText =
                err?.response?.data?.username[0]
            emailErrorRef.current.innerText = err?.response?.data?.email[0]
        }
    }
    return (
        <Container className="py-7">
            <form
                onSubmit={handleSubmit(submitHandler)}
                className=" register-form bg-white w-full  max-w-[700px] min-h-[600px]  py-16 justify-center mx-auto flex flex-col  rounded-lg px-4 "
            >
                <h1 className="text-center text-3xl	 font-bold mb-3 ">
                    مرحبا بكم في مجتمع البرمجه العربي
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
                <div className="form-div mt-6">
                    <div>
                        <div>
                            <label>الاسم الاول</label>
                            <input
                                name="firstName"
                                type="text"
                                required
                                {...register('firstName')}
                            ></input>
                            <p className="text-red-500">
                                {errors.firstName?.message}
                            </p>
                        </div>
                        <div>
                            <label>الاسم الاخير</label>
                            <input
                                name="lastName"
                                type="text"
                                required
                                {...register('lastName')}
                            ></input>

                            <p className="text-red-500">
                                {errors.lastName?.message}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>اسم المستخدم </label>
                            <input
                                name="userName"
                                type="text"
                                required
                                {...register('userName')}
                            ></input>
                            <p ref={userNameErrorRef} className="text-red-600">
                                {errors.userName?.message}
                            </p>
                        </div>
                        <div>
                            <label>البريد الالكتروني </label>
                            <input
                                name="email"
                                type="email"
                                required
                                {...register('email')}
                            ></input>
                            <p ref={emailErrorRef} className="text-red-600">
                                {errors.email?.message}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Password </label>
                            <input
                                name="password"
                                required
                                {...register('password')}
                            ></input>
                            <p className="text-red-600">
                                {errors.password?.message}
                            </p>
                        </div>
                        <div>
                            <label> Confirm password </label>
                            <input
                                required
                                name="confirmPassword"
                                {...register('confirmPassword')}
                            ></input>
                            <p className="text-red-600">
                                {errors.confirmPassword?.message}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>تاريخ ميلاك</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            {...register('dateOfBirth')}
                        />

                        {errors.dateOfBirth?.message && (
                            <p className="text-red-600">
                                يجب ادخال تاريخ ميلادك
                            </p>
                        )}
                    </div>
                </div>
                <CreateButton
                    type="submit"
                    tailwindStyles="px-11 mt-11 block mx-auto"
                    text="انشاء حساب"
                />
            </form>
        </Container>
    )
}

export default Register
