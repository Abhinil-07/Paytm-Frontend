import axios from "axios";
import { Button } from "./Button";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";

export const Appbar = ({ initial }: { initial: string }) => {
  const setUser = useSetRecoilState(userAtom);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      localStorage.removeItem("user-threads");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>

      <div className="flex">
        <div className="mt-2 mr-4">
          <Button label={"Logout"} onClick={handleLogout} />
        </div>
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>

        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {initial}
          </div>
        </div>
      </div>
    </div>
  );
};
