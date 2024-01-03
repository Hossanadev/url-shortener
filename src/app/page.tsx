"use client";
import Guest from "@/components/Layout/Guest";
import Authenticated from "@/components/Layout/Authenticated";
import HomePage from "@/pages/Home";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <Provider store={store}>
      <div className="">
        {isAuthenticated ? (
          <Authenticated>
            <HomePage />
          </Authenticated>
        ) : (
          <Guest setIsAuthenticated={setIsAuthenticated} />
        )}
      </div>
    </Provider>
  );
}
