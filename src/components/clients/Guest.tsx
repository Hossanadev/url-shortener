import { FC, useState } from "react";
import { GuestProps } from "../../../utilities/types";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";

const Guest: FC<GuestProps> = (props) => {
  const { isAuthenticated } = props;
  const [authScreenToShow, setAuthScreenToShow] =
    useState<string>("create account");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    isAuthenticated(true);
  };

  return (
    <div className="bg-[#14344C] h-screen py-10 font-serif">
      <p className="text-white text-3xl md:text-5xl font-semibold text-center">
        URL Manager
      </p>
      <span className="text-white text-lg font-medium py-3 block text-center">
        by
      </span>
      <span className="text-white text-lg font-medium block text-center">
        Hossana Chukwunyere
      </span>

      <section className="my-7">
        <form
          action=""
          className="w-[90%] md:w-1/2 mx-auto bg-white/90 rounded-sm p-4"
        >
          {authScreenToShow === "create account" ? (
            <>
              <span className="whitespace-nowrap text-center block text-xl">
                Create Account
              </span>
              <label htmlFor="" className="block">
                Username:
              </label>
              <input
                type="text"
                required
                placeholder="Enter Username..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />
              <label htmlFor="" className="block mt-2">
                Email:
              </label>
              <input
                type="email"
                required
                placeholder="Enter Email..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />

              <label htmlFor="" className="block mt-2">
                Password:
              </label>
              <input
                type="password"
                required
                placeholder="Enter Password..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />

              <div className="flex justify-center py-5">
                <button className="bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm">
                  Sign Up
                </button>
              </div>

              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setAuthScreenToShow("login")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </span>
                {"."}
              </p>
            </>
          ) : authScreenToShow === "login" ? (
            <>
              <span className="whitespace-nowrap text-center block text-xl">
                Login
              </span>
              <label htmlFor="" className="block">
                Email:
              </label>
              <input
                type="email"
                required
                placeholder="Enter Email..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />

              <label htmlFor="" className="block mt-2">
                Password:
              </label>
              <input
                type="password"
                required
                placeholder="Enter Password..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />
              <div className="flex justify-center py-5">
                <button
                  onClick={(e) => handleLogin(e)}
                  className="bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm"
                >
                  Login
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setAuthScreenToShow("create account")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Create Account
                </span>
                {"."}
              </p>
              <p>
                <span
                  onClick={() => setAuthScreenToShow("forgot password")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Forgot Password
                </span>
                {"?"}
              </p>
            </>
          ) : authScreenToShow === "forgot password" ? (
            <>
              <span className="whitespace-nowrap text-center block text-xl">
                Recover password
              </span>
              <label htmlFor="" className="block">
                Email:
              </label>
              <input
                type="email"
                required
                placeholder="Enter the email you registered with..."
                className="block w-full focus:ring-0 border border-[#14344C]/50 focus:border-[#14344C] outline-none rounded-sm p-2 text-sm"
              />
              <div className="flex justify-center py-5">
                <button className="bg-green-500 hover:bg-green-600 px-3 py-0.5 text-white rounded-sm">
                  Recover Password
                </button>
              </div>
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setAuthScreenToShow("login")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </span>
                {"."}
              </p>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setAuthScreenToShow("create account")}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Create Account
                </span>
                {"."}
              </p>
            </>
          ) : (
            ""
          )}
        </form>
      </section>

      <div className="flex justify-center items-center mt-10 space-x-4">
        <Facebook color="#ffffff" />
        <Twitter color="#ffffff" />
        <Instagram color="#ffffff" />
        <Youtube color="#ffffff" />
        <Linkedin color="#ffffff" />
      </div>
    </div>
  );
};

export default Guest;
