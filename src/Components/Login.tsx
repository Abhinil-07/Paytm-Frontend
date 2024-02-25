import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import { useState } from "react";
import axios from "axios";
import userAtom from "../atoms/userAtom";

export const Login = () => {
  const setUser = useSetRecoilState(userAtom);
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      localStorage.setItem("user-threads", JSON.stringify(response.data.user));
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Login"} />
          <SubHeading label={"Enter your infromation to login"} />
          <InputBox
            placeholder="harkirat@gmail.com"
            label={"Email"}
            onchange={(e) => {
              setInputs({ ...inputs, username: e.target.value });
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            onchange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
            }}
          />
          <div className="pt-4">
            <Button label={"Login"} onClick={handleLogin} />
          </div>
          <div className="py-2 text-sm flex justify-center">
            <div>
              <p>Don't have an account?</p>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAuthScreen("signup");
              }}
              className="pointer underline pl-1 cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
