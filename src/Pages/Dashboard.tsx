import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [balance, setBalance] = useState("");
  const [initial, setInitial] = useState("");
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await axios.post(
        "http://localhost:8000/api/v1/accounts/balance",
        {},
        { withCredentials: true }
      );
      console.log(response.data);
      setBalance(response.data.balance.toFixed(2));
      setInitial(response.data.name.charAt(0).toUpperCase());
    };
    getUserDetails();
  }, []);
  return (
    <div>
      <Appbar initial={initial} />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
