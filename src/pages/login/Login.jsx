import React from "react";
import { Container } from "react-bootstrap";
import CreateButton from "../../components/Buttons/createButton/CreateButton";
import SignIn from "../../components/Buttons/sign-in/SignIn";
import "./Login.css";
const Login = () => {
  return (
    <Container className="py-7">
      <div className="login-div bg-white rounded-md mx-auto max-w-[575px] p-12 ">
        <h1 className="text-center font-bold text-3xl	 mb-11">تسجيل الدخول</h1>
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
        <form>
          <label>البريد الالكتروني </label>
          <div>
            <input type="email" />
          </div>
          <label>Password</label>
          <div>
            <input type="password" />
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
  );
};
export default Login;
