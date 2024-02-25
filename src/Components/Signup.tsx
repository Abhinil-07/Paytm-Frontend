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

export const Signup = () => {
  const setUser = useSetRecoilState(userAtom);
  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/signup",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      localStorage.setItem("user-thread", JSON.stringify(response.data.user));
      setUser(response.data.user);
    } catch (error: any) {
      console.log(error.response.data.error);
    }
  };
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [inputs, setInputs] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="John"
            label={"First Name"}
            onchange={(e) => {
              setInputs({ ...inputs, firstName: e.target.value });
            }}
          />
          <InputBox
            placeholder="Doe"
            label={"Last Name"}
            onchange={(e) => {
              setInputs({ ...inputs, lastName: e.target.value });
            }}
          />
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
            <Button label={"Sign up"} onClick={handleSignup} />
          </div>
          <div className="py-2 text-sm flex justify-center">
            <div>
              <p>Already have an account?</p>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                setAuthScreen("login");
              }}
              className="pointer underline pl-1 cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
