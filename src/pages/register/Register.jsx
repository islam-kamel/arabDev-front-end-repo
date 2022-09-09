import React from "react";
import SignIn from "../../components/Buttons/sign-in/SignIn";
import "./Register.css";
import CreateButton from "../../components/Buttons/createButton/CreateButton";
import { Container } from "react-bootstrap";
const Register = () => {
  return (
    <Container className="py-7">
      <form className=" register-form bg-white w-full  max-w-[700px] min-h-[600px]  py-16 justify-center mx-auto flex flex-col  rounded-lg px-4 ">
        <h2 className="text-center font-bold mb-3 ">
          مرحبا بكم في مجتمع البرمجه العربي
        </h2>
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
              <input type="text"></input>
            </div>
            <div>
              <label>الاسم الاخير</label>
              <input type="text"></input>
            </div>
          </div>
          <div>
            <div>
              <label>اسم المستخدم </label>
              <input type="text"></input>
            </div>
            <div>
              <label>البريد الالكتروني </label>
              <input type="email"></input>
            </div>
          </div>
          <div>
            <div>
              <label>Password </label>
              <input type="number"></input>
            </div>
            <div>
              <label> Confirm password </label>
              <input type="number"></input>
            </div>
          </div>
        </div>
        <button type="submit" className="mt-7">
          <CreateButton text="انشاء حساب" />
        </button>
      </form>
    </Container>
  );
};

export default Register;
