import React from "react";

export default function Navbar() {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Task",
      link: "/task",
    },
    {
      name: "User",
      link: "/user",
    },
  ];

  return (
    <div className="h-[60px] shadow-md flex items-center justify-between lg:px-20 px-5">
      <div className="flex gap-5 items-center">
        <h1 className="text-xl font-bold mr-10">Logo</h1>
        <ul className="flex gap-5">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3">
        <button className="btn !text-accent !bg-accentbg">Login</button>
        <button className="btn !text-accent !bg-accentbg">Sign Up</button>
      </div>
    </div>
  );
}
