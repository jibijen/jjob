import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-black-100 mt-10">
        jibitesh jena ka website he bhidu...
      </div>
    </div>
  );
};

export default AppLayout;
