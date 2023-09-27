import Card from "@/components/clients/Card";
import React from "react";
import { PieChart } from "react-feather";

export const HomePage: React.FC = (props) => {
  const {} = props;
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 md:p-6 gap-3">
        <Card
          icon={<PieChart size={45} />}
          title="Total Clicked"
          totalClicks="23"
          className="bg-green-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Unclicked"
          totalClicks="15"
          className="bg-yellow-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Deleted"
          totalClicks="35"
          className="bg-red-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Shortened"
          totalClicks="61"
          className="bg-amber-950"
        />
      </div>

      <section className="p-3 md:p-6">
        <h2 className="text-lg font-semibold">Shorten URLs for free!</h2>
        <form action="">
          <label htmlFor="url" className="text-sm">
            URL
          </label>
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              className="border p-2 text-sm rounded-sm block focus:ring-0 outline-none focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-white hover:text-green-500 hover:border-green-500 text-sm text-white p-2 rounded-sm shadow-2xl border-white border ease-linear transition-colors duration-500"
            >
              Shorten
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
