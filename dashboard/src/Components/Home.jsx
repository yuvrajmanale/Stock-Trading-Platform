

import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function getTokenFromHash() {
  const hash = window.location.hash || "";
  const normalized = hash.startsWith("#") ? hash.slice(1) : hash;
  const [path, query] = normalized.split("?");
  return query ? new URLSearchParams(query).get("token") : null;
}

const Home = () => {
  useEffect(() => {
    const tokenFromHash = getTokenFromHash();

    if (tokenFromHash) {
      localStorage.setItem("token", tokenFromHash);
      const cleanHash = hashWithPath => {
        const [path] = hashWithPath.split("?");
        return path || "#/";
      };
      window.history.replaceState(
        {},
        document.title,
        `${window.location.pathname}${window.location.search}${cleanHash(window.location.hash)}`
      );
    }

    const token = localStorage.getItem("token");

  //   if (!token) {
  //     window.location.href =
  //       "https://stock-trading-platform-l4d8-rj31o9tii-yuvraj-manales-projects.vercel.app/login";
  //   }
   }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;