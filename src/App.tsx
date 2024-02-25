import { Route, Routes } from "react-router-dom";

import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import { SendMoney } from "./Pages/SendMoney";

function App() {
  const user = useRecoilValue(userAtom);
  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Auth />} />
        <Route path="/send" element={user ? <SendMoney /> : <Auth />} />
      </Routes>
    </div>
  );
}

export default App;
