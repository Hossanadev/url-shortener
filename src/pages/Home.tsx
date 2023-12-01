import Card from "@/components/Card";
import Table from "@/components/Table";
import React, {useEffect, useState} from "react";
import { PieChart } from "react-feather";
import { columns } from "../../utilities/table.json";
import axios from "axios";
import {DashboardStatsType, UrlProps} from "../../utilities/types";

export const HomePage: React.FC = (props) => {
  const {} = props;
  const [listUrls, setListUrls] = useState<UrlProps[]>([]);
  const [dashboardStats, setDashboardStats] = useState<DashboardStatsType>({total_clicked: 0, total_unclicked: 0, total_deleted: 0, total_shortened: 0});

  useEffect(() => {
    const getStats = (url: string) => {
      try {
        axios
            .get(url)
            .then((res) => {
              if (res.status === 200) {
                const {stats} = res.data
                setDashboardStats(stats)
              }
            });
      } catch (error) {
        console.log(error);
      }
    };
    getStats("http://localhost:8080/listStats")
  }, [])

  useEffect(() => {
    const getURLs = (url: string) => {
      try {
        axios
            .get(url)
            .then((res) => {
              if (res.status === 200) {
                const {data} = res.data
                setListUrls(data)
              }
            });
      } catch (error) {
        console.log(error);
      }
    };
    getURLs("http://localhost:8080/list")
  }, [])

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 md:p-6 gap-3">
        <Card
          icon={<PieChart size={45} />}
          title="Total Clicked"
          clicks={dashboardStats?.total_clicked}
          className="bg-green-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Unclicked"
          clicks={dashboardStats?.total_unclicked}
          className="bg-yellow-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Deleted"
          clicks={dashboardStats?.total_deleted}
          className="bg-red-500"
        />
        <Card
          icon={<PieChart size={45} />}
          title="Total Shortened"
          clicks={dashboardStats?.total_shortened}
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
              id="url"
              type="text"
              placeholder="Enter URL"
              className="border border-gray-400 p-2 text-xs h-8 rounded-sm block focus:ring-0 outline-none focus:border-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 hover:text-white h-8 text-white text-xs px-4 rounded-sm ease-linear transition-colors duration-200"
            >
              Shorten
            </button>
          </div>
        </form>
        <Table className="mt-6" columns={columns} data={listUrls} pageSize={10} />
      </section>
    </>
  );
};
