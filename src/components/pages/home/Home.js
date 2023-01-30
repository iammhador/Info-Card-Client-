import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { BiLock } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const home = () => {
  return (
    <div>
      <div class="h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div class="grid bg-gradient-to-tr from-blue-800 to-blue-800 i justify-around items-center py-20 md:py-0 lg:py-0">
          <div>
            <h1 class="text-white font-bold text-4xl font-sans">
              Info Card Official
            </h1>
            <p class="text-white mt-1">Smart way to share information</p>
            <a href="https://www.infocard.online/" target="_blank">
              <button
                type="submit"
                class="block w-28 bg-white text-blue-800 mt-4 py-2 rounded-2xl font-bold mb-2 hover:bg-slate-100"
              >
                Visit Site
              </button>
            </a>
            <NavLink to="/faravi">Faravi</NavLink>
          </div>
        </div>
        <div class="flex justify-center items-center bg-white py-20 md:py-0 lg:py-0">
          <form class="bg-white">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">
              Hello Beautiful People!
            </h1>
            <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <RiUser3Line className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <MdOutlineAlternateEmail className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <BiLock className="text-xl text-gray-400" />
              <input
                class="pl-2 outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              class="block w-full bg-blue-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default home;
