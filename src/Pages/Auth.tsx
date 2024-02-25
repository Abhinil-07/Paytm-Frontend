import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";

const Auth = () => {
  const authState = useRecoilValue(authScreenAtom);
  return <>{authState === "login" ? <Login /> : <Signup />}</>;
};

export default Auth;
