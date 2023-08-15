"use client";
import { useState, useEffect } from "react";
const Dashboard = () => {
  let [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      let APIURL = "https://jsonplaceholder.typicode.com/posts";
      let response = await fetch(APIURL);
      let data = await response.json();
      setData(data);
    };
    getData();
  }, []);
  return (
    <div>
      {data &&
        data.map((d) => {
          return <div className="mb-2">{d.title}</div>;
        })}
    </div>
  );
};

export default Dashboard;
