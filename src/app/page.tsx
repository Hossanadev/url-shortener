"use client";
import Guest from "@/components/clients/Guest";
import Layout from "@/components/clients/Layout";
import { HomePage } from "@/pages/Home";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

export default function Home() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  return (
    <Provider store={store}>
      <div className="">
        {authenticated ? (
          <Layout>
            <HomePage />
          </Layout>
        ) : (
          <Guest isAuthenticated={setAuthenticated} />
        )}
      </div>
    </Provider>
  );
}
