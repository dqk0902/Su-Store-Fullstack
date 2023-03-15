import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHook";
import { logout } from "../../redux/reducer/userReducer";
export interface UserInfo {
  id: string;
  avatar: string;
  creationAt: string;
  email: string;
  name: string;
  role: string;
  updatedAt: string;
  password: string;
}
const Profile = () => {
  const dispatch = useAppDispatch();
  const userState = {
    name: "Please Log In",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    role: "UNKNOWN",
    email: "",
  };
  localStorage.setItem("userState", JSON.stringify(userState));
  const users: UserInfo = JSON.parse(
    localStorage.getItem("user") || localStorage.getItem("userState") || ""
  );
  const nav = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    nav("/login");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden mt-12">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={users?.avatar} alt="user avatar" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center uppercase">
              {users?.role}
            </div>
            <p className="text-gray-700 text-center uppercase">{users?.name}</p>
            <p className="text-gray-700 text-base text-center">
              {users?.email}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Button variant="outlined" onClick={onLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
